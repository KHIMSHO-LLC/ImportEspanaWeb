const fs = require("fs");
const path = require("path");
const readline = require("readline");

const BOE_FILE_PATH = path.join(__dirname, "../src/data/boe_prices.json");
const OUTPUT_FILE_PATH = path.join(
  __dirname,
  "../src/data/boe_prices_with_co2.json",
);
const EEA_CSV_PATH = path.join(__dirname, "../src/data/eea_co2_data.csv");

async function main() {
  console.log("🚗 Starting High-Performance Streaming CO2 Matcher...");

  if (!fs.existsSync(BOE_FILE_PATH)) {
    console.error(`❌ BOE database not found: ${BOE_FILE_PATH}`);
    process.exit(1);
  }

  // Ensure file is present, otherwise politely notify user
  if (!fs.existsSync(EEA_CSV_PATH)) {
    console.log(`\n⏳ File not found at ${EEA_CSV_PATH}`);
    console.log(
      "Waiting for your 2GB CSV download to finish! Once it is downloaded:",
    );
    console.log("1. Rename the unzipped file to: eea_co2_data.csv");
    console.log("2. Place it exactly in: ImportEspanaWeb/src/data/");
    console.log("3. Re-run this script: node scripts/match_co2_data.js\n");
    return;
  }

  console.log("✅ Loading Official BOE baseline data...");
  const boeData = JSON.parse(fs.readFileSync(BOE_FILE_PATH, "utf8"));

  // Helper mapping: BOE uses single letters for fuel, EEA spells it out
  const formatFuel = (boeFuel) => {
    if (boeFuel === "G") return "petrol";
    if (boeFuel === "D") return "diesel";
    if (boeFuel === "Elc") return "electric";
    return "";
  };

  // Pre-index the BOE properties for O(1) matching latency during the 2GB stream
  const lookupMap = new Map();
  boeData.forEach((v, index) => {
    const key = `${v.brand.toLowerCase()}_${v.cc}_${formatFuel(v.fuel)}`;
    if (!lookupMap.has(key)) lookupMap.set(key, []);
    lookupMap.get(key).push({ index, co2List: [] });
  });

  console.log("🌊 Activating File Stream to parse 2GB EEA Data...");
  console.log(
    "   (This uses barely any RAM, but may take 2-4 minutes to read millions of rows)\n",
  );

  const fileStream = fs.createReadStream(EEA_CSV_PATH);
  // Readline efficiently pumps lines into memory one-by-one without holding the massive string
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let headers = null;
  let makeIdx = -1,
    ccIdx = -1,
    fuelIdx = -1,
    co2Idx = -1;
  let linesProcessed = 0;

  for await (const line of rl) {
    if (!headers) {
      headers = line.split(",");
      makeIdx = headers.findIndex(
        (h) => h.toLowerCase().includes("make") || h.toLowerCase() === "m",
      );
      ccIdx = headers.findIndex(
        (h) =>
          h.toLowerCase().includes("capacity") ||
          h.toLowerCase() === "ec (cm3)",
      );
      fuelIdx = headers.findIndex(
        (h) => h.toLowerCase().includes("fuel") || h.toLowerCase() === "ft",
      );

      // Prefer WLTP Standard CO2 over traditional older NEDC where available
      co2Idx = headers.findIndex(
        (h) =>
          h.toLowerCase().includes("wltp") && h.toLowerCase().includes("co2"),
      );
      if (co2Idx === -1) {
        co2Idx = headers.findIndex((h) => h.toLowerCase().includes("co2"));
      }

      console.log(
        `📌 Found Dataset Columns -> Make:${makeIdx}, CC:${ccIdx}, Fuel:${fuelIdx}, CO2:${co2Idx}`,
      );
      continue;
    }

    linesProcessed++;
    if (linesProcessed % 1000000 === 0) {
      console.log(
        `⏳ Streaming: Parsed ${linesProcessed.toLocaleString()} vehicles...`,
      );
    }

    // Split CSV line correctly. This Regex splits by comma ignoring commas inside quotes
    const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if (cols.length <= Math.max(makeIdx, ccIdx, fuelIdx, co2Idx)) continue;

    const make = cols[makeIdx]?.replace(/"/g, "").trim().toLowerCase();
    const cc = cols[ccIdx]?.replace(/"/g, "").trim();
    let fuelRaw = cols[fuelIdx]?.replace(/"/g, "").trim().toLowerCase();
    const co2 = parseInt(cols[co2Idx]?.replace(/"/g, "").trim(), 10);

    let fuel = "";
    if (fuelRaw?.includes("petrol")) fuel = "petrol";
    else if (fuelRaw?.includes("diesel")) fuel = "diesel";
    else if (fuelRaw?.includes("electric")) fuel = "electric";

    if (!make || !cc || !co2 || isNaN(co2)) continue;

    // Fuzzy Map Match against BOE database records
    const key = `${make}_${cc}_${fuel}`;
    if (lookupMap.has(key)) {
      lookupMap.get(key).forEach((item) => item.co2List.push(co2));
    }
  }

  console.log(
    "\n✅ Finished streaming 2GB dataset. Compiling exact median CO2 emissions...",
  );

  let matchedCount = 0;
  boeData.forEach((v, index) => {
    const key = `${v.brand.toLowerCase()}_${v.cc}_${formatFuel(v.fuel)}`;
    const mapItems = lookupMap.get(key);

    // Assign CO2 null as default, then hydrate if we have matches
    v.co2 = null;

    if (mapItems) {
      const matchItem = mapItems.find((item) => item.index === index);
      // We calculate the exact median CO2 if multiple trims exist for the exact same engine
      if (matchItem && matchItem.co2List.length > 0) {
        matchItem.co2List.sort((a, b) => a - b);
        const medianCo2 =
          matchItem.co2List[Math.floor(matchItem.co2List.length / 2)];
        v.co2 = medianCo2;
        matchedCount++;
      }
    }
  });

  console.log("💾 Writing combined database to boe_prices_with_co2.json...");
  fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(boeData, null, 2));

  console.log(`\n🎉 SUCCESS!`);
  console.log(
    `➡️ Out of ${boeData.length.toLocaleString()} total BOE models, we successfully found automated CO2 values for ${matchedCount.toLocaleString()} models!`,
  );
  console.log(
    `➡️ You can now safely delete the massive 2GB eea_co2_data.csv file to save disk space.`,
  );
}

main().catch(console.error);
