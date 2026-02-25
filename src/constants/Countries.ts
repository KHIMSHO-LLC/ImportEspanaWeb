// Country-specific import data for SEO landing pages

export interface CountryData {
  slug: string;
  name: string;
  nameEs: string;
  flag: string;
  isEU: boolean;
  popularBrands: string[];
  avgTransportCost: string;
  borderCrossing?: string;
  vatRate: number;
  descriptionEs: string;
  descriptionEn: string;
  stepsEs: { title: string; desc: string }[];
  stepsEn: { title: string; desc: string }[];
  tipsEs: string[];
  tipsEn: string[];
}

export const COUNTRIES: CountryData[] = [
  {
    slug: "alemania",
    name: "Germany",
    nameEs: "Alemania",
    flag: "🇩🇪",
    isEU: true,
    popularBrands: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche"],
    avgTransportCost: "€800–€1,500",
    vatRate: 19,
    descriptionEs:
      "Alemania es el país número 1 de origen para coches importados a España. Su industria automotriz líder mundial ofrece vehículos premium a precios significativamente más bajos que en España. BMW, Mercedes y Audi son las marcas más buscadas.",
    descriptionEn:
      "Germany is the #1 source country for cars imported to Spain. Its world-leading automotive industry offers premium vehicles at significantly lower prices than in Spain. BMW, Mercedes and Audi are the most sought-after brands.",
    stepsEs: [
      {
        title: "Busca tu coche en mobile.de o autoscout24.de",
        desc: "Los dos portales más grandes de Europa. Filtra por precio, kilómetros y ubicación.",
      },
      {
        title: "Verifica el historial del vehículo",
        desc: "Pide el informe TÜV, libro de mantenimiento y comprueba que no tenga financiación pendiente.",
      },
      {
        title: "Negocia el precio sin IVA (Netto)",
        desc: "Si compras a un concesionario como empresa, puedes pedir el precio neto. Como particular, pagas 19% IVA alemán.",
      },
      {
        title: "Transporta el coche a España",
        desc: "Camión portacoches (€800–€1,200) o conducir tú mismo con matrícula de tránsito (Kurzzeitkennzeichen).",
      },
      {
        title: "Pasa la ITV y matricula en la DGT",
        desc: "ITV de importación, pago de impuestos (matriculación + ITP si segunda mano), y matriculación final.",
      },
    ],
    stepsEn: [
      {
        title: "Search on mobile.de or autoscout24.de",
        desc: "The two largest vehicle portals in Europe. Filter by price, mileage and location.",
      },
      {
        title: "Verify vehicle history",
        desc: "Request the TÜV report, service book and check for outstanding financing.",
      },
      {
        title: "Negotiate the price without VAT (Netto)",
        desc: "If buying from a dealer as a business, you can request the net price. As a private buyer, you pay 19% German VAT.",
      },
      {
        title: "Transport the car to Spain",
        desc: "Car carrier truck (€800–€1,200) or drive yourself with transit plates (Kurzzeitkennzeichen).",
      },
      {
        title: "Pass ITV and register at DGT",
        desc: "Import ITV inspection, tax payments (registration + ITP if second-hand), and final registration.",
      },
    ],
    tipsEs: [
      "mobile.de tiene más ofertas que autoscout24 para particulares",
      "Los coches alemanes suelen tener equipamiento más completo que el modelo español",
      "Cuidado con los coches accidentados — pide siempre el informe CARFAX/AutoDNA",
      "La matrícula de tránsito alemana (amarilla) te permite conducir 5 días por Europa",
      "Los kilómetros en Alemania se miden igual (km), no hay conversión necesaria",
    ],
    tipsEn: [
      "mobile.de has more listings than autoscout24 for private sellers",
      "German cars usually have more complete equipment than Spanish models",
      "Beware of accident-damaged cars — always request the CARFAX/AutoDNA report",
      "German transit plates (yellow) allow you to drive for 5 days across Europe",
      "Mileage in Germany is measured in km (same as Spain), no conversion needed",
    ],
  },
  {
    slug: "francia",
    name: "France",
    nameEs: "Francia",
    flag: "🇫🇷",
    isEU: true,
    popularBrands: ["Peugeot", "Renault", "Citroën", "BMW", "Mercedes"],
    avgTransportCost: "€500–€1,000",
    borderCrossing: "La Jonquera / Irún",
    vatRate: 20,
    descriptionEs:
      "Francia es el segundo país de origen más popular para importaciones a España. Su frontera directa permite traer el coche conduciendo en pocas horas. Las marcas francesas como Peugeot y Renault son más baratas que en España.",
    descriptionEn:
      "France is the second most popular origin country for imports to Spain. Its direct border allows driving the car in just a few hours. French brands like Peugeot and Renault are cheaper than in Spain.",
    stepsEs: [
      {
        title: "Busca en leboncoin.fr o lacentrale.fr",
        desc: "Los portales más populares de Francia para coches de segunda mano.",
      },
      {
        title: "Verifica el CT (Contrôle Technique)",
        desc: "El equivalente francés de la ITV. Debe estar vigente para vender el coche.",
      },
      {
        title: "Conduce el coche a España",
        desc: "Desde el sur de Francia, puedes cruzar por La Jonquera (Cataluña) o Irún (País Vasco).",
      },
      {
        title: "Solicita la Carte Grise (barrée)",
        desc: "El vendedor debe anular la Carte Grise y firmar el certificado de cesión.",
      },
      {
        title: "Matricula en España",
        desc: "ITV de importación + pago de impuestos + DGT para la matrícula española.",
      },
    ],
    stepsEn: [
      {
        title: "Search on leboncoin.fr or lacentrale.fr",
        desc: "The most popular French portals for second-hand cars.",
      },
      {
        title: "Verify the CT (Contrôle Technique)",
        desc: "The French equivalent of the ITV. Must be current to sell the car.",
      },
      {
        title: "Drive the car to Spain",
        desc: "From southern France, you can cross at La Jonquera (Catalonia) or Irún (Basque Country).",
      },
      {
        title: "Request the Carte Grise (barrée)",
        desc: "The seller must cancel the Carte Grise and sign the transfer certificate.",
      },
      {
        title: "Register in Spain",
        desc: "Import ITV + tax payments + DGT for the Spanish plates.",
      },
    ],
    tipsEs: [
      "Conducir desde el sur de Francia lleva solo 3–5 horas hasta Barcelona",
      "El CT (ITV francesa) debe ser válido — si no lo tiene, negocia rebaja",
      "Los coches franceses suelen ser más baratos en el sur (Toulouse, Montpellier)",
      "Cuidado con la 'Carte Grise' — asegúrate de que está a nombre del vendedor",
    ],
    tipsEn: [
      "Driving from southern France takes only 3–5 hours to Barcelona",
      "The CT (French MOT) must be valid — if not, negotiate a discount",
      "French cars are usually cheaper in the south (Toulouse, Montpellier)",
      "Watch the 'Carte Grise' — make sure it's in the seller's name",
    ],
  },
  {
    slug: "belgica",
    name: "Belgium",
    nameEs: "Bélgica",
    flag: "🇧🇪",
    isEU: true,
    popularBrands: ["BMW", "Audi", "Volkswagen", "Volvo", "Mercedes"],
    avgTransportCost: "€1,000–€1,500",
    vatRate: 21,
    descriptionEs:
      "Bélgica es un mercado clave para coches de alta gama. Los belgas renuevan sus coches frecuentemente, lo que genera una amplia oferta de semi-nuevos premium a buen precio.",
    descriptionEn:
      "Belgium is a key market for high-end cars. Belgians renew their cars frequently, generating a wide supply of premium nearly-new cars at good prices.",
    stepsEs: [
      {
        title: "Busca en 2dehands.be o autoscout24.be",
        desc: "Los principales portales belgas. 2dehands es popular en Flandes.",
      },
      {
        title: "Verifica el certificado de matriculación (inschrijvingsbewijs)",
        desc: "Asegúrate de que el coche no tiene multas o impuestos pendientes.",
      },
      {
        title: "Organiza el transporte",
        desc: "Camión portacoches o coche plataforma (€1,000–€1,500 hasta España).",
      },
      {
        title: "Gestiona la baja de matrícula belga (Uitschrijving)",
        desc: "El vendedor debe dar de baja el coche en el DIV belga.",
      },
      {
        title: "Matricula en España",
        desc: "ITV + impuestos + DGT.",
      },
    ],
    stepsEn: [
      {
        title: "Search on 2dehands.be or autoscout24.be",
        desc: "The main Belgian portals. 2dehands is popular in Flanders.",
      },
      {
        title: "Verify the registration certificate",
        desc: "Make sure the car has no outstanding fines or taxes.",
      },
      {
        title: "Organize transport",
        desc: "Car carrier truck or flatbed (€1,000–€1,500 to Spain).",
      },
      {
        title: "Handle Belgian deregistration",
        desc: "The seller must deregister the car at the Belgian DIV.",
      },
      {
        title: "Register in Spain",
        desc: "ITV + taxes + DGT.",
      },
    ],
    tipsEs: [
      "Los coches belgas suelen tener equipamiento alto de serie",
      "Bélgica tiene impuestos de circulación altos — los belgas cambian de coche frecuentemente",
      "Busca coches de leasing terminado (fin de leasing) — suelen estar bien cuidados",
      "El transporte desde Bruselas a Madrid tarda unos 2–3 días por camión",
    ],
    tipsEn: [
      "Belgian cars usually have high standard equipment",
      "Belgium has high road taxes — Belgians change cars frequently",
      "Look for end-of-lease cars — they're usually well maintained",
      "Transport from Brussels to Madrid takes about 2–3 days by truck",
    ],
  },
  {
    slug: "italia",
    name: "Italy",
    nameEs: "Italia",
    flag: "🇮🇹",
    isEU: true,
    popularBrands: ["Fiat", "Alfa Romeo", "BMW", "Audi", "Maserati"],
    avgTransportCost: "€800–€1,300",
    vatRate: 22,
    descriptionEs:
      "Italia ofrece coches italianos de carácter (Alfa Romeo, Fiat, Maserati) a precios competitivos. Los coches alemanes premium también son más baratos que en España.",
    descriptionEn:
      "Italy offers characterful Italian cars (Alfa Romeo, Fiat, Maserati) at competitive prices. German premium cars are also cheaper than in Spain.",
    stepsEs: [
      {
        title: "Busca en subito.it o autoscout24.it",
        desc: "Los portales más usados en Italia para compraventa de coches.",
      },
      {
        title: "Verifica la Revisione (ITV italiana)",
        desc: "La Revisione es obligatoria cada 2 años. Comprueba que esté vigente.",
      },
      {
        title: "Pide el Certificato di proprietà",
        desc: "El documento que acredita la propiedad del vehículo en Italia.",
      },
      {
        title: "Transporte por ferry o camión",
        desc: "Ferry Génova/Livorno–Barcelona o camión portacoches.",
      },
      {
        title: "Matricula en España",
        desc: "ITV + impuestos + DGT.",
      },
    ],
    stepsEn: [
      {
        title: "Search on subito.it or autoscout24.it",
        desc: "The most used portals in Italy for car buying and selling.",
      },
      {
        title: "Verify the Revisione (Italian MOT)",
        desc: "The Revisione is mandatory every 2 years. Check it's current.",
      },
      {
        title: "Request the Certificato di proprietà",
        desc: "The document proving vehicle ownership in Italy.",
      },
      {
        title: "Transport by ferry or truck",
        desc: "Ferry Genoa/Livorno–Barcelona or car carrier truck.",
      },
      {
        title: "Register in Spain",
        desc: "ITV + taxes + DGT.",
      },
    ],
    tipsEs: [
      "Los ferries Génova–Barcelona son una opción económica y cómoda",
      "Los coches italianos pueden tener equipamiento diferente al español",
      "Verifica que el coche no tenga 'fermo amministrativo' (embargo italiano)",
      "La Revisione (ITV) italiana es cada 2 años, no anual",
    ],
    tipsEn: [
      "Genoa–Barcelona ferries are an economical and comfortable option",
      "Italian cars may have different equipment than Spanish ones",
      "Check that the car doesn't have 'fermo amministrativo' (Italian lien)",
      "Italian MOT (Revisione) is every 2 years, not annual",
    ],
  },
  {
    slug: "paises-bajos",
    name: "Netherlands",
    nameEs: "Países Bajos",
    flag: "🇳🇱",
    isEU: true,
    popularBrands: ["BMW", "Volkswagen", "Audi", "Tesla", "Volvo"],
    avgTransportCost: "€1,100–€1,600",
    vatRate: 21,
    descriptionEs:
      "Los Países Bajos son un mercado interesante, especialmente para coches eléctricos y híbridos enchufables, gracias a los incentivos fiscales holandeses que generan mucha oferta de estos vehículos.",
    descriptionEn:
      "The Netherlands is an interesting market, especially for electric and plug-in hybrid cars, thanks to Dutch tax incentives that generate a large supply of these vehicles.",
    stepsEs: [
      {
        title: "Busca en marktplaats.nl o autotrack.nl",
        desc: "Los portales holandeses más populares.",
      },
      {
        title: "Verifica el APK (ITV holandesa)",
        desc: "El APK es la inspección técnica holandesa. Debe estar al día.",
      },
      {
        title: "Consigue la exportación RDW",
        desc: "El RDW es la autoridad de tráfico holandesa. El vendedor debe gestionar la exportación.",
      },
      {
        title: "Transporte por camión",
        desc: "Portacoches desde Holanda (€1,100–€1,600 a España).",
      },
      {
        title: "Matricula en España",
        desc: "ITV + impuestos + DGT.",
      },
    ],
    stepsEn: [
      {
        title: "Search on marktplaats.nl or autotrack.nl",
        desc: "The most popular Dutch car portals.",
      },
      {
        title: "Verify the APK (Dutch MOT)",
        desc: "APK is the Dutch vehicle inspection. Must be current.",
      },
      {
        title: "Get the RDW export",
        desc: "RDW is the Dutch traffic authority. The seller must handle the export.",
      },
      {
        title: "Transport by truck",
        desc: "Car carrier from the Netherlands (€1,100–€1,600 to Spain).",
      },
      {
        title: "Register in Spain",
        desc: "ITV + taxes + DGT.",
      },
    ],
    tipsEs: [
      "Holanda tiene muchos Tesla y coches eléctricos de segunda mano por incentivos fiscales",
      "Los BPM (impuestos holandeses altos) hacen que los coches pierdan valor rápidamente",
      "Marktplaats.nl es el equivalente holandés de Wallapop/Milanuncios",
      "Cuidado con la corrosión por sal marina en coches costeros",
    ],
    tipsEn: [
      "Netherlands has many second-hand Teslas and EVs due to tax incentives",
      "High Dutch BPM taxes mean cars depreciate quickly",
      "Marktplaats.nl is the Dutch equivalent of Craigslist/Gumtree",
      "Watch for sea salt corrosion on coastal cars",
    ],
  },
  {
    slug: "reino-unido",
    name: "United Kingdom",
    nameEs: "Reino Unido",
    flag: "🇬🇧",
    isEU: false,
    popularBrands: ["Range Rover", "Jaguar", "BMW", "Mercedes", "Audi"],
    avgTransportCost: "€1,200–€2,000",
    vatRate: 20,
    descriptionEs:
      "El Reino Unido ya NO es parte de la UE desde el Brexit. Esto significa aduanas, aranceles y mayores costes. Además, los coches son de volante a la derecha (RHD), lo que requiere homologación especial.",
    descriptionEn:
      "The UK is NO LONGER part of the EU since Brexit. This means customs, tariffs and higher costs. Also, cars are right-hand drive (RHD), requiring special type approval.",
    stepsEs: [
      {
        title: "Busca en autotrader.co.uk o cazoo.co.uk",
        desc: "Los portales más grandes del Reino Unido.",
      },
      {
        title: "⚠️ Verifica si tiene volante a la derecha (RHD)",
        desc: "Los coches británicos tienen el volante a la derecha. Para España se necesita conversión o homologación especial.",
      },
      {
        title: "Gestiona aduanas y aranceles (post-Brexit)",
        desc: "Se aplica arancel del 6.5% + IVA 21%. Necesitas DUA (Documento Único Administrativo).",
      },
      {
        title: "Transporta por ferry o Eurotúnel",
        desc: "Ferry desde Portsmouth/Southampton a Bilbao/Santander, o Eurotúnel + carretera.",
      },
      {
        title: "Homologación + ITV + DGT",
        desc: "Homologación individual obligatoria si es RHD. Luego ITV y matriculación.",
      },
    ],
    stepsEn: [
      {
        title: "Search on autotrader.co.uk or cazoo.co.uk",
        desc: "The largest UK car portals.",
      },
      {
        title: "⚠️ Check if right-hand drive (RHD)",
        desc: "UK cars are right-hand drive. For Spain, conversion or special type approval is needed.",
      },
      {
        title: "Handle customs and tariffs (post-Brexit)",
        desc: "6.5% tariff + 21% VAT applies. You need a DUA (Single Administrative Document).",
      },
      {
        title: "Transport by ferry or Eurotunnel",
        desc: "Ferry from Portsmouth/Southampton to Bilbao/Santander, or Eurotunnel + road.",
      },
      {
        title: "Type approval + ITV + DGT",
        desc: "Individual type approval mandatory if RHD. Then ITV and registration.",
      },
    ],
    tipsEs: [
      "⚠️ Post-Brexit: arancel 6.5% + IVA 21% se aplica a la importación",
      "Los coches RHD (volante derecha) necesitan homologación individual que cuesta €1,000–€3,000",
      "Los ferries Bilbao–Portsmouth son la opción más directa",
      "Los precios en libras pueden ser atractivos pero calcula TODOS los costes extra",
      "Range Rover y Jaguar son significativamente más baratos en UK",
    ],
    tipsEn: [
      "⚠️ Post-Brexit: 6.5% tariff + 21% VAT applies to imports",
      "RHD (right-hand drive) cars need individual type approval costing €1,000–€3,000",
      "Bilbao–Portsmouth ferries are the most direct option",
      "Prices in pounds may look attractive but calculate ALL extra costs",
      "Range Rover and Jaguar are significantly cheaper in the UK",
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    nameEs: "Portugal",
    flag: "🇵🇹",
    isEU: true,
    popularBrands: ["Renault", "Peugeot", "BMW", "Mercedes", "Volkswagen"],
    avgTransportCost: "€300–€600",
    borderCrossing: "Badajoz / Tui",
    vatRate: 23,
    descriptionEs:
      "Portugal es el vecino más cercano y el más fácil para importar. La frontera terrestre directa reduce costes de transporte al mínimo. Los coches portugueses suelen estar en buen estado por las revisiones IPO frecuentes.",
    descriptionEn:
      "Portugal is the closest neighbor and the easiest to import from. The direct land border reduces transport costs to a minimum. Portuguese cars are usually in good condition due to frequent IPO inspections.",
    stepsEs: [
      {
        title: "Busca en standvirtual.com o olx.pt",
        desc: "Los portales más usados en Portugal para coches.",
      },
      {
        title: "Verifica la IPO (ITV portuguesa)",
        desc: "La IPO es la inspección técnica portuguesa. Asegúrate de que está vigente.",
      },
      {
        title: "Conduce el coche a España",
        desc: "La frontera es abierta (Schengen). Puedes cruzar por Badajoz, Tui u otros pasos.",
      },
      {
        title: "Gestiona la cancelación de matrícula portuguesa",
        desc: "El vendedor debe cancelar la matrícula en el IMT portugués.",
      },
      {
        title: "Matricula en España",
        desc: "ITV + impuestos + DGT.",
      },
    ],
    stepsEn: [
      {
        title: "Search on standvirtual.com or olx.pt",
        desc: "The most used portals in Portugal for cars.",
      },
      {
        title: "Verify the IPO (Portuguese MOT)",
        desc: "IPO is the Portuguese technical inspection. Make sure it's current.",
      },
      {
        title: "Drive the car to Spain",
        desc: "The border is open (Schengen). Cross at Badajoz, Tui or other points.",
      },
      {
        title: "Handle Portuguese deregistration",
        desc: "The seller must cancel the registration at the Portuguese IMT.",
      },
      {
        title: "Register in Spain",
        desc: "ITV + taxes + DGT.",
      },
    ],
    tipsEs: [
      "El transporte más barato: solo 3-4 horas conduciendo desde Lisboa a Madrid",
      "Los precios de coches en Portugal no siempre son más baratos que en España",
      "Los coches portugueses tienen ISV alto, así que el mercado de segunda mano puede ser caro",
      "La frontera es abierta — puedes conducir el coche directamente",
    ],
    tipsEn: [
      "The cheapest transport: only 3-4 hours driving from Lisbon to Madrid",
      "Car prices in Portugal aren't always cheaper than in Spain",
      "Portuguese cars have high ISV tax, so the used market can be expensive",
      "The border is open — you can drive the car directly",
    ],
  },
];

export function getCountryBySlug(slug: string): CountryData | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}
