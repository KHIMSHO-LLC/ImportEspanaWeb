/**
 * AI Blog Post Generator using Google Gemini API (Free Tier)
 * Generates BILINGUAL articles (Spanish + English) for each topic.
 * Includes retry logic and model fallback for rate limits.
 *
 * Usage: GEMINI_API_KEY=your_key node scripts/generate-blog.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_FILE = path.join(__dirname, "topics.json");
const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Models to try in order (fallback chain)
const MODELS = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash-thinking-exp",
];

function getGeminiUrl(model) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callGeminiWithRetry(prompt, maxRetries = 3) {
  for (const model of MODELS) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(
          `  🤖 Trying ${model} (attempt ${attempt}/${maxRetries})...`,
        );

        const response = await fetch(getGeminiUrl(model), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 4096,
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            console.log(`  ✅ Success with ${model}`);
            return text;
          }
          throw new Error("Empty response from API");
        }

        if (response.status === 429) {
          const errorData = await response.text();
          // Extract retry delay from error if available
          const retryMatch = errorData.match(/"retryDelay":\s*"(\d+)s"/);
          const waitTime = retryMatch
            ? parseInt(retryMatch[1]) + 5
            : 45 * attempt;

          console.log(
            `  ⏳ Rate limited on ${model}. Waiting ${waitTime}s before retry...`,
          );
          await sleep(waitTime * 1000);
          continue;
        }

        // Other errors - try next model
        const error = await response.text();
        console.log(
          `  ⚠️ ${model} returned ${response.status}, trying next model...`,
        );
        break;
      } catch (err) {
        if (attempt === maxRetries) {
          console.log(`  ⚠️ All retries failed for ${model}: ${err.message}`);
          break;
        }
        console.log(
          `  ⚠️ Error: ${err.message}, retrying in ${10 * attempt}s...`,
        );
        await sleep(10000 * attempt);
      }
    }
  }

  throw new Error("All models and retries exhausted. Try again later.");
}

async function generateSpanishArticle(topic) {
  const prompt = `You are an expert auto journalist and SEO specialist writing for ImportEspana.com, a website that helps people calculate costs of importing cars to Spain.

Write a comprehensive, SEO-optimized blog article in SPANISH about:

**Topic:** ${topic.title_hint}
**Target keyword:** ${topic.keyword}

Requirements:
- Write 1500-2000 words in Spanish
- Use the target keyword naturally 5-8 times throughout the article
- Include H2 and H3 headings for structure
- Include practical tables where relevant
- Include concrete examples with numbers
- Add a call to action linking to ImportEspana calculator: [calculadora ImportEspana](https://importespana.com)
- Write in a professional but approachable tone
- Include an FAQ section at the end with 3-4 questions
- DO NOT include the title as H1 (it will be added from frontmatter)
- Start directly with the first H2 or introductory paragraph
- Use markdown formatting

Output ONLY the markdown article content (no frontmatter, no title).`;

  return callGeminiWithRetry(prompt);
}

async function generateEnglishArticle(topic) {
  const prompt = `You are an expert auto journalist and SEO specialist writing for ImportEspana.com, a website that helps people calculate costs of importing cars to Spain.

Write a comprehensive, SEO-optimized blog article in ENGLISH about:

**Topic:** ${topic.title_hint_en || topic.title_hint}
**Spanish keyword reference:** ${topic.keyword}

Requirements:
- Write 1500-2000 words in English
- Target English-speaking expats and foreigners importing cars to Spain
- Include H2 and H3 headings for structure
- Include practical tables where relevant (costs in EUR)
- Include concrete examples with numbers
- Add a call to action linking to ImportEspana calculator: [ImportEspana calculator](https://importespana.com)
- Write in a professional but approachable tone
- Include an FAQ section at the end with 3-4 questions
- DO NOT include the title as H1 (it will be added from frontmatter)
- Start directly with the first H2 or introductory paragraph
- Use markdown formatting

Output ONLY the markdown article content (no frontmatter, no title).`;

  return callGeminiWithRetry(prompt);
}

function createFrontmatter(topic, lang) {
  const today = new Date().toISOString().split("T")[0];
  const tags = inferTags(topic.keyword);

  if (lang === "en") {
    const enTitle = topic.title_hint_en || topic.title_hint;
    return `---
title: "${enTitle}"
date: "${today}"
description: "Complete guide about ${topic.keyword}. Everything you need to know about importing cars to Spain."
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
language: "en"
---`;
  }

  return `---
title: "${topic.title_hint}"
date: "${today}"
description: "Guía completa sobre ${topic.keyword}. Todo lo que necesitas saber sobre ${topic.title_hint.toLowerCase()}."
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
language: "es"
---`;
}

function inferTags(keyword) {
  const tagMap = {
    importar: "Importación",
    impuesto: "Impuestos",
    matriculación: "Matriculación",
    ITP: "ITP",
    IVA: "IVA",
    CO2: "CO2",
    eléctrico: "Eléctrico",
    híbrido: "Híbrido",
    Alemania: "Alemania",
    Francia: "Francia",
    Italia: "Italia",
    "Reino Unido": "Reino Unido",
    USA: "USA",
    BOE: "BOE",
    DGT: "DGT",
    ITV: "ITV",
    moto: "Motos",
    clásico: "Clásicos",
    furgoneta: "Comerciales",
    arancel: "Aduanas",
    DUA: "Aduanas",
  };

  const tags = [];
  for (const [key, value] of Object.entries(tagMap)) {
    if (
      keyword.toLowerCase().includes(key.toLowerCase()) &&
      !tags.includes(value)
    ) {
      tags.push(value);
    }
  }

  if (tags.length === 0) tags.push("Guía");
  return tags.slice(0, 3);
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY environment variable is required");
    process.exit(1);
  }

  // Read topics
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, "utf-8"));

  // Find next unwritten topic
  const nextTopic = topics.find((t) => !t.done);

  if (!nextTopic) {
    console.log("✅ All topics have been written!");
    process.exit(0);
  }

  console.log(`📝 Generating bilingual articles for: ${nextTopic.title_hint}`);
  console.log(`🔑 Keyword: ${nextTopic.keyword}`);

  // Ensure blog directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  try {
    // Generate Spanish article
    console.log(`\n🇪🇸 Generating Spanish version...`);
    const esContent = await generateSpanishArticle(nextTopic);
    const esFrontmatter = createFrontmatter(nextTopic, "es");
    const esArticle = `${esFrontmatter}\n\n${esContent}\n`;
    const esPath = path.join(BLOG_DIR, `${nextTopic.slug}.md`);
    fs.writeFileSync(esPath, esArticle, "utf-8");
    console.log(`✅ Spanish article saved: ${esPath}`);

    // Wait 60s between calls to avoid rate limits on free tier
    console.log(
      `\n⏳ Waiting 60s before English version (rate limit buffer)...`,
    );
    await sleep(60000);

    // Generate English article
    console.log(`\n🇬🇧 Generating English version...`);
    const enContent = await generateEnglishArticle(nextTopic);
    const enFrontmatter = createFrontmatter(nextTopic, "en");
    const enArticle = `${enFrontmatter}\n\n${enContent}\n`;
    const enPath = path.join(BLOG_DIR, `${nextTopic.slug}-en.md`);
    fs.writeFileSync(enPath, enArticle, "utf-8");
    console.log(`✅ English article saved: ${enPath}`);

    // Mark as done
    nextTopic.done = true;
    fs.writeFileSync(
      TOPICS_FILE,
      JSON.stringify(topics, null, 2) + "\n",
      "utf-8",
    );
    console.log(`\n✅ Topic marked as done. 2 articles generated!`);
  } catch (error) {
    console.error(`\n❌ Error generating article:`, error.message);
    process.exit(1);
  }
}

main();
