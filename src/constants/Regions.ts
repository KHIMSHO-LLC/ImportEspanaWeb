// Region data for SEO landing pages
// Each region has a slug, ITP rate, description, DGT office info, and local content

export interface RegionData {
  slug: string;
  name: string;
  nameEs: string;
  itpRate: number;
  capital: string;
  dgtOffice: string;
  population: string;
  popularBrands: string[];
  descriptionEs: string;
  descriptionEn: string;
  tipsEs: string[];
  tipsEn: string[];
  nearestPort?: string;
}

export const REGIONS: RegionData[] = [
  {
    slug: "madrid",
    name: "Madrid",
    nameEs: "Comunidad de Madrid",
    itpRate: 4,
    capital: "Madrid",
    dgtOffice: "Jefatura Provincial de Tráfico de Madrid, C/ Arturo Soria 143",
    population: "6.8M",
    popularBrands: ["BMW", "Mercedes", "Audi", "Volkswagen"],
    descriptionEs:
      "Madrid es el principal hub de importación de coches en España. Con el ITP más bajo (4%), la capital atrae a miles de importadores cada año. La Jefatura de Tráfico de Madrid es una de las más transitadas del país.",
    descriptionEn:
      "Madrid is the main car import hub in Spain. With one of the lowest ITP rates (4%), the capital attracts thousands of importers every year. The Madrid Traffic Office is one of the busiest in the country.",
    tipsEs: [
      "Solicita cita previa DGT con al menos 2 semanas de antelación",
      "Lleva toda la documentación traducida y apostillada",
      "La ITV de Colmenar Viejo suele tener menos cola",
      "Gestoría cerca de la DGT puede agilizar el proceso",
    ],
    tipsEn: [
      "Book DGT appointment at least 2 weeks in advance",
      "Bring all documentation translated and apostilled",
      "The Colmenar Viejo ITV station usually has shorter queues",
      "A gestoría near the DGT office can speed up the process",
    ],
  },
  {
    slug: "cataluna",
    name: "Catalonia",
    nameEs: "Cataluña",
    itpRate: 5,
    capital: "Barcelona",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Barcelona, Gran Via de les Corts Catalanes 184",
    population: "7.8M",
    popularBrands: ["Audi", "BMW", "Seat", "Mercedes"],
    descriptionEs:
      "Cataluña, con Barcelona como epicentro, es la segunda comunidad en importaciones. Su ITP del 5% es ligeramente superior a Madrid. La proximidad a Francia facilita la importación desde Europa.",
    descriptionEn:
      "Catalonia, with Barcelona at its center, is the second largest region for car imports. Its 5% ITP is slightly higher than Madrid. Proximity to France makes importing from Europe easier.",
    tipsEs: [
      "Barcelona tiene zona de bajas emisiones (ZBE) — verifica la etiqueta DGT",
      "La frontera de La Jonquera es el punto de entrada más común",
      "ITV en poblaciones cercanas suelen ser más rápidas que en Barcelona ciudad",
      "El ITP en Cataluña es del 5%, un 1% más que en Madrid",
    ],
    tipsEn: [
      "Barcelona has a Low Emission Zone (LEZ) — check the DGT label",
      "La Jonquera border crossing is the most common entry point",
      "ITV stations in nearby towns are usually faster than in Barcelona city",
      "ITP in Catalonia is 5%, 1% higher than Madrid",
    ],
    nearestPort: "Barcelona",
  },
  {
    slug: "andalucia",
    name: "Andalusia",
    nameEs: "Andalucía",
    itpRate: 4,
    capital: "Sevilla",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Sevilla, Avda. de la Guardia Civil s/n",
    population: "8.5M",
    popularBrands: ["Volkswagen", "BMW", "Mercedes", "Renault"],
    descriptionEs:
      "Andalucía es la comunidad más poblada y una de las que más coches importa. Con un ITP del 4%, ofrece condiciones fiscales competitivas. Tiene múltiples puertos y jefaturas de tráfico.",
    descriptionEn:
      "Andalusia is the most populated region and one of the top car importers. With a 4% ITP, it offers competitive tax conditions. It has multiple ports and traffic offices across the region.",
    tipsEs: [
      "Elige la jefatura de tu provincia para evitar desplazamientos largos",
      "El puerto de Algeciras es ideal para importaciones desde el norte de África",
      "Málaga y Sevilla son las ciudades con más demanda de coches importados",
      "Comprueba si tu coche necesita homologación individual",
    ],
    tipsEn: [
      "Choose the traffic office in your province to avoid long trips",
      "Algeciras port is ideal for imports from North Africa",
      "Málaga and Sevilla have the highest demand for imported cars",
      "Check if your car needs individual type approval (homologación)",
    ],
    nearestPort: "Algeciras",
  },
  {
    slug: "comunidad-valenciana",
    name: "Valencian Community",
    nameEs: "Comunidad Valenciana",
    itpRate: 6,
    capital: "Valencia",
    dgtOffice: "Jefatura Provincial de Tráfico de Valencia, C/ Poeta Querol 15",
    population: "5.1M",
    popularBrands: ["Volkswagen", "Audi", "BMW", "Peugeot"],
    descriptionEs:
      "La Comunidad Valenciana es un destino popular para importadores, especialmente en la costa. El ITP del 6% es algo más alto, pero el puerto de Valencia facilita las importaciones marítimas.",
    descriptionEn:
      "The Valencian Community is a popular destination for importers, especially on the coast. The 6% ITP is somewhat higher, but the Port of Valencia facilitates maritime imports.",
    tipsEs: [
      "El puerto de Valencia es el más grande de España para importación de vehículos",
      "El ITP del 6% se aplica a todos los vehículos de segunda mano entre particulares",
      "Valencia tiene buenas conexiones para transporte terrestre desde Francia",
      "Verifica la zona de bajas emisiones de Valencia ciudad",
    ],
    tipsEn: [
      "The Port of Valencia is Spain's largest for vehicle imports",
      "The 6% ITP applies to all second-hand vehicles between private sellers",
      "Valencia has good connections for overland transport from France",
      "Check the Valencia city low emission zone",
    ],
    nearestPort: "Valencia",
  },
  {
    slug: "pais-vasco",
    name: "Basque Country",
    nameEs: "País Vasco",
    itpRate: 4,
    capital: "Vitoria-Gasteiz",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Vizcaya, Alameda Urquijo 12, Bilbao",
    population: "2.2M",
    popularBrands: ["BMW", "Audi", "Mercedes", "Volvo"],
    descriptionEs:
      "El País Vasco, con frontera directa con Francia, es punto de entrada natural para coches europeos. El ITP del 4% y la alta renta per cápita hacen que sea un mercado activo para importaciones premium.",
    descriptionEn:
      "The Basque Country, with a direct border with France, is a natural entry point for European cars. The 4% ITP and high per capita income make it an active market for premium imports.",
    tipsEs: [
      "Irún es el principal punto de entrada desde Francia por carretera",
      "El puerto de Bilbao recibe barcos desde el Reino Unido",
      "Las diputaciones forales tienen impuestos propios — consulta tu situación",
      "La ITV en Bizkaia y Gipuzkoa suelen ser rápidas",
    ],
    tipsEn: [
      "Irún is the main entry point from France by road",
      "Bilbao port receives ships from the United Kingdom",
      "The foral deputations have their own taxes — check your situation",
      "ITV in Bizkaia and Gipuzkoa are usually quick",
    ],
    nearestPort: "Bilbao",
  },
  {
    slug: "galicia",
    name: "Galicia",
    nameEs: "Galicia",
    itpRate: 3,
    capital: "Santiago de Compostela",
    dgtOffice:
      "Jefatura Provincial de Tráfico de A Coruña, C/ Diego Delicado s/n",
    population: "2.7M",
    popularBrands: ["Peugeot", "Citroën", "Volkswagen", "BMW"],
    descriptionEs:
      "Galicia destaca por tener el ITP más bajo de España (3%), lo que supone un ahorro significativo en la importación de coches de segunda mano. Su conexión con Portugal también facilita las importaciones.",
    descriptionEn:
      "Galicia stands out for having the lowest ITP in Spain (3%), which means significant savings when importing second-hand cars. Its connection with Portugal also facilitates imports.",
    tipsEs: [
      "¡El ITP más bajo de España! Solo el 3% del valor fiscal",
      "La frontera con Portugal en Tui facilita importaciones desde el país vecino",
      "El puerto de Vigo tiene buenas conexiones de transporte marítimo",
      "Pide cita previa en la DGT de tu provincia: A Coruña, Lugo, Ourense o Pontevedra",
    ],
    tipsEn: [
      "The lowest ITP in Spain! Only 3% of fiscal value",
      "The Portugal border at Tui makes imports from the neighboring country easy",
      "Vigo port has good maritime transport connections",
      "Book appointment at the DGT in your province: A Coruña, Lugo, Ourense or Pontevedra",
    ],
    nearestPort: "Vigo",
  },
  {
    slug: "castilla-y-leon",
    name: "Castile and León",
    nameEs: "Castilla y León",
    itpRate: 5,
    capital: "Valladolid",
    dgtOffice: "Jefatura Provincial de Tráfico de Valladolid, C/ Hípica s/n",
    population: "2.4M",
    popularBrands: ["Renault", "Volkswagen", "Peugeot", "Seat"],
    descriptionEs:
      "Castilla y León es la comunidad más grande de España. Con un ITP del 5%, ofrece condiciones intermedias. Valladolid, con su fábrica de Renault, tiene una fuerte tradición automovilística.",
    descriptionEn:
      "Castile and León is Spain's largest region. With a 5% ITP, it offers intermediate conditions. Valladolid, with its Renault factory, has a strong automotive tradition.",
    tipsEs: [
      "La fábrica de Renault en Valladolid crea una cultura del automóvil fuerte",
      "Consulta la jefatura provincial correspondiente a tu residencia",
      "Los transportes desde Alemania suelen llegar por autovía del norte",
      "Al ser zona interior, los coches suelen tener menos corrosión por sal",
    ],
    tipsEn: [
      "The Renault factory in Valladolid creates a strong car culture",
      "Contact the provincial traffic office corresponding to your residence",
      "Transport from Germany usually arrives via the northern highway",
      "Being an inland area, cars usually have less salt corrosion",
    ],
  },
  {
    slug: "castilla-la-mancha",
    name: "Castilla-La Mancha",
    nameEs: "Castilla-La Mancha",
    itpRate: 6,
    capital: "Toledo",
    dgtOffice: "Jefatura Provincial de Tráfico de Toledo, C/ Río Alberche s/n",
    population: "2.1M",
    popularBrands: ["Seat", "Renault", "Volkswagen", "Peugeot"],
    descriptionEs:
      "Castilla-La Mancha aplica un ITP del 6%. Su proximidad a Madrid permite a muchos residentes gestionar la importación en la capital. Toledo, Ciudad Real y Albacete son las principales ciudades.",
    descriptionEn:
      "Castilla-La Mancha applies a 6% ITP. Its proximity to Madrid allows many residents to manage imports in the capital. Toledo, Ciudad Real and Albacete are the main cities.",
    tipsEs: [
      "Cercana a Madrid, puedes usar las prestaciones de la capital",
      "El ITP del 6% es algo más alto que en comunidades vecinas",
      "La DGT tiene jefaturas en Toledo, Ciudad Real, Albacete, Cuenca y Guadalajara",
      "Compara costes ITP vs desplazamiento a otra comunidad",
    ],
    tipsEn: [
      "Close to Madrid, you can use the capital's services",
      "The 6% ITP is somewhat higher than in neighboring regions",
      "DGT has offices in Toledo, Ciudad Real, Albacete, Cuenca and Guadalajara",
      "Compare ITP costs vs travel to another region",
    ],
  },
  {
    slug: "aragon",
    name: "Aragon",
    nameEs: "Aragón",
    itpRate: 4,
    capital: "Zaragoza",
    dgtOffice: "Jefatura Provincial de Tráfico de Zaragoza, Vía Hispanidad 6",
    population: "1.3M",
    popularBrands: ["Opel", "Volkswagen", "Seat", "Renault"],
    descriptionEs:
      "Aragón ofrece un ITP del 4% y una excelente localización entre Madrid y Barcelona. Zaragoza es un importante nudo logístico y la factoría de Opel (Stellantis) genera una fuerte cultura del motor.",
    descriptionEn:
      "Aragon offers a 4% ITP and an excellent location between Madrid and Barcelona. Zaragoza is a major logistics hub and the Opel (Stellantis) factory generates a strong car culture.",
    tipsEs: [
      "Zaragoza está a medio camino entre Madrid y Barcelona — ideal para transporte",
      "La factoría Stellantis en Figueruelas genera conocimiento automotriz local",
      "ITP del 4%, igual que Madrid, con menos saturación en la DGT",
      "La ITV en Zaragoza es más rápida que en capitales más grandes",
    ],
    tipsEn: [
      "Zaragoza is halfway between Madrid and Barcelona — ideal for transport",
      "The Stellantis factory in Figueruelas generates local automotive expertise",
      "4% ITP, same as Madrid, with less congestion at the DGT",
      "ITV in Zaragoza is faster than in larger capitals",
    ],
  },
  {
    slug: "murcia",
    name: "Murcia",
    nameEs: "Región de Murcia",
    itpRate: 4,
    capital: "Murcia",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Murcia, Avda. Infante Juan Manuel 4",
    population: "1.5M",
    popularBrands: ["Seat", "Volkswagen", "Renault", "BMW"],
    descriptionEs:
      "Murcia ofrece un ITP del 4% y tiene el puerto de Cartagena para importaciones marítimas. Su clima seco hace que sea un buen mercado para coches bien conservados.",
    descriptionEn:
      "Murcia offers a 4% ITP and has the Port of Cartagena for maritime imports. Its dry climate makes it a good market for well-preserved cars.",
    tipsEs: [
      "El puerto de Cartagena puede recibir importaciones marítimas",
      "ITP del 4% — competitivo con Madrid y Andalucía",
      "El clima seco es beneficioso para la conservación de vehículos",
      "Solo hay una jefatura de tráfico — pide cita con antelación",
    ],
    tipsEn: [
      "The Port of Cartagena can receive maritime imports",
      "4% ITP — competitive with Madrid and Andalusia",
      "The dry climate is beneficial for vehicle preservation",
      "There's only one traffic office — book your appointment well ahead",
    ],
    nearestPort: "Cartagena",
  },
  {
    slug: "baleares",
    name: "Balearic Islands",
    nameEs: "Islas Baleares",
    itpRate: 4,
    capital: "Palma de Mallorca",
    dgtOffice: "Jefatura Provincial de Tráfico de Baleares, C/ Caro 2, Palma",
    population: "1.2M",
    popularBrands: ["BMW", "Mercedes", "Audi", "Range Rover"],
    descriptionEs:
      "Las Islas Baleares tienen un mercado premium de coches importados. El ITP es del 4% pero el transporte marítimo añade costes. Mallorca, Menorca, Ibiza y Formentera tienen estaciones ITV.",
    descriptionEn:
      "The Balearic Islands have a premium imported car market. ITP is 4% but maritime transport adds costs. Mallorca, Menorca, Ibiza and Formentera all have ITV stations.",
    tipsEs: [
      "El transporte incluye ferry desde Barcelona o Valencia — presupuesta el coste",
      "Mallorca tiene el mayor volumen de importaciones del archipiélago",
      "Las estaciones ITV en islas menores pueden tener esperas más largas",
      "Los coches sin sal marina suelen valorarse mejor en las islas",
    ],
    tipsEn: [
      "Transport includes ferry from Barcelona or Valencia — budget for the cost",
      "Mallorca has the highest import volume of the archipelago",
      "ITV stations on smaller islands may have longer waits",
      "Cars without sea salt exposure are valued higher on the islands",
    ],
    nearestPort: "Palma de Mallorca",
  },
  {
    slug: "canarias",
    name: "Canary Islands",
    nameEs: "Canarias",
    itpRate: 5.5,
    capital: "Las Palmas / Santa Cruz de Tenerife",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Las Palmas, C/ León y Castillo 431",
    population: "2.2M",
    popularBrands: ["Volkswagen", "Toyota", "Hyundai", "Kia"],
    descriptionEs:
      "Canarias tiene un régimen fiscal especial (REF) con el IGIC en lugar de IVA. El ITP es del 5.5%. Las importaciones marítimas son la norma y hay que considerar los aranceles especiales.",
    descriptionEn:
      "The Canary Islands have a special tax regime (REF) with IGIC instead of VAT. ITP is 5.5%. Maritime imports are the norm and special tariffs must be considered.",
    tipsEs: [
      "El IGIC (7%) sustituye al IVA (21%) — importante diferencia fiscal",
      "El transporte marítimo desde Europa peninsular tarda 3-5 días",
      "Hay DGT en Las Palmas y Santa Cruz de Tenerife",
      "Consulta los aranceles especiales del régimen fiscal canario",
    ],
    tipsEn: [
      "IGIC (7%) replaces VAT (21%) — important tax difference",
      "Maritime transport from mainland Europe takes 3-5 days",
      "DGT offices in Las Palmas and Santa Cruz de Tenerife",
      "Check the special tariffs of the Canary Islands tax regime",
    ],
    nearestPort: "Las Palmas",
  },
  {
    slug: "asturias",
    name: "Asturias",
    nameEs: "Principado de Asturias",
    itpRate: 4,
    capital: "Oviedo",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Asturias, C/ General Elorza 79, Oviedo",
    population: "1.0M",
    popularBrands: ["Volkswagen", "Peugeot", "Renault", "Seat"],
    descriptionEs:
      "Asturias ofrece un ITP del 4% y el puerto de Gijón para importaciones marítimas. El acceso por autovía desde Francia vía País Vasco es directo.",
    descriptionEn:
      "Asturias offers a 4% ITP and the Port of Gijón for maritime imports. Highway access from France via the Basque Country is direct.",
    tipsEs: [
      "El puerto de Gijón puede recibir vehículos importados",
      "Acceso directo por autovía de la costa desde el País Vasco",
      "ITP del 4% — mismo nivel que Madrid",
      "La DGT está en Oviedo, gestiona cita previa online",
    ],
    tipsEn: [
      "Gijón port can receive imported vehicles",
      "Direct highway access via the coast from the Basque Country",
      "4% ITP — same level as Madrid",
      "DGT is in Oviedo, book your appointment online",
    ],
    nearestPort: "Gijón",
  },
  {
    slug: "cantabria",
    name: "Cantabria",
    nameEs: "Cantabria",
    itpRate: 8,
    capital: "Santander",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Cantabria, C/ Calvo Sotelo 27, Santander",
    population: "0.6M",
    popularBrands: ["Volkswagen", "Seat", "Renault", "BMW"],
    descriptionEs:
      "Cantabria destaca por tener el ITP más alto de España (8%). Esto puede influir en la decisión de importar un coche de segunda mano. El puerto de Santander recibe ferries desde el Reino Unido.",
    descriptionEn:
      "Cantabria stands out for having the highest ITP in Spain (8%). This can influence the decision to import a second-hand car. Santander port receives ferries from the United Kingdom.",
    tipsEs: [
      "⚠️ El ITP más alto de España: 8% — calcula bien el coste total",
      "El ferry Santander-Plymouth permite traer coches desde el Reino Unido",
      "Considera si compensa registrar el coche en otra comunidad",
      "Solo hay una jefatura de tráfico en Santander",
    ],
    tipsEn: [
      "⚠️ The highest ITP in Spain: 8% — calculate total costs carefully",
      "The Santander-Plymouth ferry allows bringing cars from the UK",
      "Consider whether registering the car in another region is better",
      "There's only one traffic office in Santander",
    ],
    nearestPort: "Santander",
  },
  {
    slug: "extremadura",
    name: "Extremadura",
    nameEs: "Extremadura",
    itpRate: 6,
    capital: "Mérida",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Badajoz, Avda. Ramón y Cajal 2",
    population: "1.1M",
    popularBrands: ["Seat", "Renault", "Peugeot", "Citroën"],
    descriptionEs:
      "Extremadura aplica un ITP del 6%. Su frontera con Portugal facilita la importación desde el país vecino. Badajoz y Cáceres son las dos jefaturas de tráfico disponibles.",
    descriptionEn:
      "Extremadura applies a 6% ITP. Its border with Portugal facilitates imports from the neighboring country. Badajoz and Cáceres are the two available traffic offices.",
    tipsEs: [
      "La frontera con Portugal por Badajoz facilita importaciones portuguesas",
      "DGT tiene jefaturas en Badajoz y Cáceres",
      "ITP del 6%, ligeramente superior a la media",
      "Los precios de coches importados suelen ser más competitivos aquí",
    ],
    tipsEn: [
      "The Portugal border via Badajoz facilitates Portuguese imports",
      "DGT has offices in Badajoz and Cáceres",
      "6% ITP, slightly above average",
      "Imported car prices tend to be more competitive here",
    ],
  },
  {
    slug: "navarra",
    name: "Navarre",
    nameEs: "Comunidad Foral de Navarra",
    itpRate: 4,
    capital: "Pamplona",
    dgtOffice:
      "Jefatura Provincial de Tráfico de Navarra, C/ Sancho el Mayor 2, Pamplona",
    population: "0.7M",
    popularBrands: ["Volkswagen", "Seat", "BMW", "Audi"],
    descriptionEs:
      "Navarra tiene régimen foral propio y aplica un ITP del 4%. Su proximidad a Francia por los Pirineos la convierte en punto de entrada natural para importaciones europeas.",
    descriptionEn:
      "Navarre has its own foral regime and applies a 4% ITP. Its proximity to France via the Pyrenees makes it a natural entry point for European imports.",
    tipsEs: [
      "Proximidad directa a Francia a través del Pirineo Occidental",
      "Régimen foral — consulta con la Hacienda Foral de Navarra",
      "ITP del 4%, competitivo con Madrid",
      "La fábrica de Volkswagen en Pamplona genera experiencia automotriz local",
    ],
    tipsEn: [
      "Direct proximity to France through the Western Pyrenees",
      "Foral regime — consult with the Foral Treasury of Navarre",
      "4% ITP, competitive with Madrid",
      "The Volkswagen factory in Pamplona generates local automotive expertise",
    ],
  },
  {
    slug: "la-rioja",
    name: "La Rioja",
    nameEs: "La Rioja",
    itpRate: 4,
    capital: "Logroño",
    dgtOffice:
      "Jefatura Provincial de Tráfico de La Rioja, C/ Pérez Galdós 2, Logroño",
    population: "0.3M",
    popularBrands: ["Seat", "Volkswagen", "Renault", "Toyota"],
    descriptionEs:
      "La Rioja, la comunidad más pequeña, aplica un ITP del 4%. Aunque tiene menor volumen de importaciones, ofrece un proceso más ágil en la DGT por menor saturación.",
    descriptionEn:
      "La Rioja, the smallest region, applies a 4% ITP. Although it has a lower volume of imports, it offers a faster DGT process due to less congestion.",
    tipsEs: [
      "ITP del 4% y menor saturación en DGT = proceso más rápido",
      "Comunidad pequeña con ventajas en tiempos de espera",
      "Bien conectada con País Vasco y Navarra",
      "Solo una jefatura de tráfico en Logroño",
    ],
    tipsEn: [
      "4% ITP and less DGT congestion = faster process",
      "Small region with advantages in wait times",
      "Well connected with the Basque Country and Navarre",
      "Only one traffic office in Logroño",
    ],
  },
];

export function getRegionBySlug(slug: string): RegionData | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
