// Region data for SEO landing pages
// Each region has a slug, ITP rate, description, DGT office info, and local content

export interface RegionStep {
  title: string;
  desc: string;
}

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
  stepsEs: RegionStep[];
  stepsEn: RegionStep[];
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
    stepsEs: [
      {
        title: "Localiza tu coche en el extranjero",
        desc: "Al ser el mayor mercado de importación del país, Madrid concentra compradores que buscan de todo, desde utilitarios hasta berlinas premium alemanas.",
      },
      {
        title: "Organiza el transporte hasta la capital",
        desc: "Al no tener costa, todo entra por carretera desde el norte o el este — reserva camión portacoches con antelación, la demanda en Madrid es alta.",
      },
      {
        title: "Evita las colas de la ITV en la capital",
        desc: "La ITV de Colmenar Viejo suele tener menos espera que las estaciones del centro de Madrid para la inspección de importación.",
      },
      {
        title: "Calcula el impuesto de matriculación",
        desc: "El tramo por CO₂ (0–14,75%) se aplica igual que en el resto del país antes de pasar a liquidar el ITP autonómico.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Madrid tiene uno de los tipos más bajos de España, lo que explica por qué tantos importadores optan por matricular aquí.",
      },
      {
        title: "Matricula en la DGT de Arturo Soria",
        desc: "Pide cita con dos semanas de margen: es una de las jefaturas con más volumen de trámites de toda España.",
      },
    ],
    stepsEn: [
      {
        title: "Find your car abroad",
        desc: "As the country's largest import market, Madrid draws buyers looking for everything from city runabouts to premium German saloons.",
      },
      {
        title: "Arrange transport into the capital",
        desc: "With no coastline, everything arrives overland from the north or east — book a car-carrier truck early, demand into Madrid is high.",
      },
      {
        title: "Skip the queues at the capital's ITV",
        desc: "The Colmenar Viejo ITV station usually has a shorter wait than stations in central Madrid for the import inspection.",
      },
      {
        title: "Work out the registration tax",
        desc: "The national CO₂ bracket (0–14.75%) applies the same as anywhere else in Spain, before you move on to the regional ITP.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "Madrid has one of the lowest rates in Spain, which is exactly why so many importers choose to register here.",
      },
      {
        title: "Register at the DGT on Arturo Soria",
        desc: "Book two weeks ahead — this is one of the highest-volume traffic offices in the whole country.",
      },
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
    stepsEs: [
      {
        title: "Compra tu vehículo en Francia o el resto de la UE",
        desc: "La cercanía con Francia hace que buena parte de los coches importados en Cataluña entren directamente por carretera desde el país vecino.",
      },
      {
        title: "Entra por La Jonquera o el puerto de Barcelona",
        desc: "Tienes dos vías reales: cruce terrestre por La Jonquera o transporte marítimo hasta el puerto de Barcelona, uno de los grandes de España.",
      },
      {
        title: "Pasa la ITV fuera de Barcelona ciudad",
        desc: "Las estaciones de ITV en poblaciones cercanas a Barcelona suelen dar cita antes que las del centro urbano.",
      },
      {
        title: "Revisa si tu coche está exento del impuesto",
        desc: "Desde el Decreto-ley 5/2025, Cataluña exime del ITP a los vehículos de cero emisiones, además del tramo estatal habitual por CO₂.",
      },
      {
        title: "Liquida el ITP (5%)",
        desc: "Un punto por encima de Madrid, salvo que tu vehículo sea de cero emisiones o tenga más de 10 años y un valor inferior a 40.000€, casos exentos en Cataluña.",
      },
      {
        title: "Matricula en la DGT de Gran Via",
        desc: "Comprueba también la etiqueta ambiental DGT antes de circular, ya que Barcelona aplica su propia zona de bajas emisiones.",
      },
    ],
    stepsEn: [
      {
        title: "Buy your vehicle in France or elsewhere in the EU",
        desc: "Proximity to France means a large share of cars imported into Catalonia arrive directly overland from the neighboring country.",
      },
      {
        title: "Enter via La Jonquera or the Port of Barcelona",
        desc: "You have two real routes in: the La Jonquera land crossing, or maritime transport into the Port of Barcelona, one of Spain's major ports.",
      },
      {
        title: "Get your ITV done outside Barcelona city",
        desc: "ITV stations in towns near Barcelona tend to offer appointments sooner than stations in the city center.",
      },
      {
        title: "Check whether your car is exempt from the tax",
        desc: "Since Decreto-ley 5/2025, Catalonia exempts zero-emission vehicles from ITP, on top of the usual national CO₂ registration tax bracket.",
      },
      {
        title: "Pay the ITP (5%)",
        desc: "One point above Madrid, unless your vehicle is zero-emission or over 10 years old and worth under €40,000 — both exempt in Catalonia.",
      },
      {
        title: "Register at the DGT on Gran Via",
        desc: "Also check the DGT environmental label before driving, since Barcelona enforces its own low emission zone.",
      },
    ],
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
    stepsEs: [
      {
        title: "Elige el origen de tu vehículo",
        desc: "Al ser la comunidad más poblada, Andalucía tiene demanda repartida entre casi todas las marcas, desde utilitarios hasta modelos premium.",
      },
      {
        title: "Entra por el puerto de Algeciras",
        desc: "Algeciras es la puerta marítima natural de la comunidad, especialmente práctica si el vehículo procede del norte de África.",
      },
      {
        title: "Pasa la ITV cerca de tu provincia",
        desc: "Andalucía tiene ocho provincias con estación ITV propia; evita desplazarte y comprueba si tu coche necesita homologación individual antes de la inspección.",
      },
      {
        title: "Aplica la reducción para cero emisiones",
        desc: "Antes de liquidar el tramo estatal por CO₂, ten en cuenta que Andalucía aplica un ITP reducido si tu vehículo es de cero emisiones.",
      },
      {
        title: "Liquida el ITP (4%, o 1% en cero emisiones)",
        desc: "El tipo general es del 4%, pero baja al 1% para vehículos eléctricos, una de las bonificaciones más notables entre las comunidades.",
      },
      {
        title: "Matricula en la jefatura de tu provincia",
        desc: "Elige la DGT de tu provincia — Sevilla, Málaga, Cádiz y el resto — para evitar los desplazamientos largos que implica una comunidad tan extensa.",
      },
    ],
    stepsEn: [
      {
        title: "Choose where your vehicle comes from",
        desc: "As Spain's most populated region, Andalusia's demand spreads across nearly every brand, from city cars to premium models.",
      },
      {
        title: "Bring it in via the Port of Algeciras",
        desc: "Algeciras is the region's natural maritime gateway, especially convenient if the vehicle is coming from North Africa.",
      },
      {
        title: "Get the ITV done near your province",
        desc: "Andalusia has eight provinces each with their own ITV station; avoid unnecessary travel and check whether your car needs individual type approval first.",
      },
      {
        title: "Apply the zero-emission reduction",
        desc: "Before settling the national CO₂ bracket, note that Andalusia applies a reduced ITP rate for zero-emission vehicles.",
      },
      {
        title: "Pay the ITP (4%, or 1% for zero-emission)",
        desc: "The standard rate is 4%, but it drops to 1% for electric vehicles — one of the more notable discounts among the regions.",
      },
      {
        title: "Register at your province's traffic office",
        desc: "Pick the DGT office in your own province — Sevilla, Málaga, Cádiz and others — to avoid the long trips a region this large can involve.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el vehículo en origen",
        desc: "La demanda aquí se concentra en marcas alemanas y francesas, con buena parte de la oferta llegando por mar más que por carretera.",
      },
      {
        title: "Envíalo por el puerto de Valencia",
        desc: "Es la terminal de vehículos más grande de España, aunque la carretera desde Francia también es una opción viable para quien prefiera conducir el coche.",
      },
      {
        title: "Reserva cita de ITV con margen",
        desc: "Al ser un destino con alto volumen de importación marítima, conviene pedir cita de ITV de importación con antelación en la provincia.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se calcula igual que en el resto de España antes de pasar al ITP autonómico, más alto aquí que en comunidades vecinas.",
      },
      {
        title: "Liquida el ITP (6%)",
        desc: "El tipo se aplica a todo vehículo de segunda mano entre particulares, y es de los más altos del arco mediterráneo.",
      },
      {
        title: "Matricula en la DGT de Poeta Querol",
        desc: "Antes de circular, revisa la zona de bajas emisiones de la ciudad de Valencia, que puede afectar a vehículos más antiguos.",
      },
    ],
    stepsEn: [
      {
        title: "Find the vehicle at source",
        desc: "Demand here concentrates on German and French brands, with a good share of stock arriving by sea rather than overland.",
      },
      {
        title: "Ship it in through the Port of Valencia",
        desc: "It's Spain's largest vehicle terminal, though the road route from France is also viable if you'd rather drive the car in yourself.",
      },
      {
        title: "Book your ITV slot early",
        desc: "As a high-volume maritime import destination, it pays to request the import ITV appointment in your province well ahead of time.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax is calculated the same way as anywhere in Spain, before moving to the regional ITP, which runs higher here than in neighboring regions.",
      },
      {
        title: "Pay the ITP (6%)",
        desc: "This rate applies to every second-hand vehicle sold between individuals, and it's among the highest on the Mediterranean coast.",
      },
      {
        title: "Register at the DGT on Poeta Querol",
        desc: "Before driving, check Valencia city's low emission zone, which can affect older vehicles.",
      },
    ],
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
    stepsEs: [
      {
        title: "Compra en Francia o Alemania",
        desc: "La renta per cápita alta del País Vasco sostiene un mercado activo de importaciones premium, muy orientado a berlinas alemanas.",
      },
      {
        title: "Cruza por Irún o entra por el puerto de Bilbao",
        desc: "Irún es la vía terrestre habitual desde Francia; el puerto de Bilbao, por su parte, recibe también barcos procedentes del Reino Unido.",
      },
      {
        title: "Pasa la ITV en Bizkaia o Gipuzkoa",
        desc: "Las estaciones de ambos territorios suelen dar cita con rapidez, algo que no siempre ocurre en comunidades con más población.",
      },
      {
        title: "Consulta el régimen foral antes del tramo por CO₂",
        desc: "Las diputaciones forales gestionan parte de la fiscalidad propia, así que conviene confirmar tu situación antes de calcular el impuesto de matriculación.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "El tipo coincide con el de Madrid, competitivo dentro del contexto foral vasco.",
      },
      {
        title: "Matricula en la DGT de Alameda Urquijo, Bilbao",
        desc: "Es la jefatura de referencia en Vizcaya para vehículos entrados por el puerto o desde Francia.",
      },
    ],
    stepsEn: [
      {
        title: "Buy in France or Germany",
        desc: "The Basque Country's high per-capita income sustains an active premium import market, heavily skewed toward German saloons.",
      },
      {
        title: "Cross at Irún or arrive via the Port of Bilbao",
        desc: "Irún is the usual overland route from France; the Port of Bilbao, meanwhile, also receives ships coming from the United Kingdom.",
      },
      {
        title: "Get the ITV done in Bizkaia or Gipuzkoa",
        desc: "Stations in both territories tend to offer quick appointments, which isn't always the case in more populated regions.",
      },
      {
        title: "Check the foral tax regime before the CO₂ bracket",
        desc: "The foral deputations manage part of their own taxation, so it's worth confirming your situation before calculating the registration tax.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "The rate matches Madrid's, competitive within the Basque foral context.",
      },
      {
        title: "Register at the DGT on Alameda Urquijo, Bilbao",
        desc: "This is the reference office in Vizcaya for vehicles arriving via the port or from France.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el coche en Portugal o el resto de Europa",
        desc: "La frontera de Tui hace que buena parte de las importaciones gallegas procedan del país vecino, con marcas francesas también muy presentes.",
      },
      {
        title: "Trae el coche por Tui o por el puerto de Vigo",
        desc: "Puedes cruzar por carretera desde Portugal o recurrir al puerto de Vigo si el vehículo llega por mar desde otro punto de Europa.",
      },
      {
        title: "Pasa la ITV en tu provincia",
        desc: "Galicia reparte sus inspecciones entre A Coruña, Lugo, Ourense y Pontevedra — pide cita en la que te quede más cerca.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en toda España, pero aquí el ahorro real está en el tramo autonómico siguiente.",
      },
      {
        title: "Liquida el ITP (3%)",
        desc: "Es el tipo más bajo de toda España, lo que convierte a Galicia en una de las comunidades más ventajosas fiscalmente para matricular un coche de segunda mano.",
      },
      {
        title: "Matricula en la DGT de A Coruña",
        desc: "Si resides en otra provincia gallega, puedes pedir cita en Lugo, Ourense o Pontevedra en lugar de desplazarte hasta A Coruña.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car in Portugal or elsewhere in Europe",
        desc: "The Tui border means a good share of Galician imports come from the neighboring country, with French brands also well represented.",
      },
      {
        title: "Bring it in via Tui or the Port of Vigo",
        desc: "You can cross overland from Portugal, or use the Port of Vigo if the vehicle is arriving by sea from elsewhere in Europe.",
      },
      {
        title: "Get the ITV done in your province",
        desc: "Galicia splits its inspections across A Coruña, Lugo, Ourense and Pontevedra — book whichever is closest to you.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as anywhere in Spain, but the real saving here comes in the regional bracket that follows.",
      },
      {
        title: "Pay the ITP (3%)",
        desc: "This is the lowest rate anywhere in Spain, making Galicia one of the most tax-advantageous regions for registering a second-hand car.",
      },
      {
        title: "Register at the DGT in A Coruña",
        desc: "If you live in another Galician province, you can book an appointment in Lugo, Ourense or Pontevedra instead of traveling to A Coruña.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el coche, sobre todo en Alemania",
        desc: "La tradición automovilística de Valladolid, con su fábrica de Renault, alimenta una demanda constante de vehículos franceses y alemanes.",
      },
      {
        title: "Transporta el coche por la autovía del norte",
        desc: "Al ser la comunidad más extensa de España y sin salida al mar, el transporte desde Alemania llega casi siempre por carretera vía el norte peninsular.",
      },
      {
        title: "Pasa la ITV de importación",
        desc: "Los vehículos que vienen de zona interior europea suelen presentar menos corrosión por sal, lo que agiliza la inspección técnica.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en el resto del país, antes de pasar al ITP, aquí en un nivel intermedio.",
      },
      {
        title: "Liquida el ITP (5%)",
        desc: "Un punto por encima de Madrid, una posición intermedia frente al resto de comunidades del interior peninsular.",
      },
      {
        title: "Matricula en la DGT de Valladolid",
        desc: "Al ser la comunidad más grande de España, confirma con antelación la jefatura provincial que corresponde a tu domicilio.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car, mainly in Germany",
        desc: "Valladolid's automotive tradition, anchored by its Renault factory, sustains steady demand for French and German vehicles.",
      },
      {
        title: "Transport it via the northern highway",
        desc: "As Spain's largest region with no coastline, transport from Germany almost always arrives overland via the northern part of the peninsula.",
      },
      {
        title: "Pass the import ITV inspection",
        desc: "Vehicles coming from inland Europe tend to show less salt corrosion, which can speed up the technical inspection.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as the rest of the country, before moving to the ITP, which sits at an intermediate level here.",
      },
      {
        title: "Pay the ITP (5%)",
        desc: "One point above Madrid, an intermediate position among the inland regions of the peninsula.",
      },
      {
        title: "Register at the DGT in Valladolid",
        desc: "As Spain's largest region, confirm ahead of time which provincial office corresponds to your address.",
      },
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
    stepsEs: [
      {
        title: "Busca el coche apoyándote en Madrid",
        desc: "Muchos residentes de esta comunidad rastrean coches y gestorías desde la capital, dada la cercanía geográfica y la mayor oferta.",
      },
      {
        title: "Transporta el vehículo por carretera",
        desc: "Sin puerto propio, el transporte llega casi siempre por vía terrestre, a menudo aprovechando las mismas rutas que abastecen Madrid.",
      },
      {
        title: "Pasa la ITV en tu provincia",
        desc: "Toledo, Ciudad Real, Albacete, Cuenca y Guadalajara tienen jefatura propia — compara plazos antes de decidir dónde inspeccionar el coche.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación es idéntico en toda España; aquí conviene fijarse bien en el ITP, algo más alto que en la vecina Madrid.",
      },
      {
        title: "Liquida el ITP (6%)",
        desc: "Dos puntos por encima de Madrid — merece la pena comparar si compensa desplazar la matriculación a otra comunidad cercana.",
      },
      {
        title: "Matricula en la DGT de Toledo",
        desc: "Si vives en Ciudad Real, Albacete, Cuenca o Guadalajara, puedes tramitarlo en la jefatura de tu propia provincia.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car, leaning on Madrid",
        desc: "Many residents here search for cars and gestorías from the capital, given the geographic proximity and wider selection available.",
      },
      {
        title: "Transport the vehicle overland",
        desc: "With no port of its own, transport almost always arrives by road, often along the same routes that supply Madrid.",
      },
      {
        title: "Get the ITV done in your province",
        desc: "Toledo, Ciudad Real, Albacete, Cuenca and Guadalajara each have their own office — compare wait times before deciding where to inspect the car.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax is identical across Spain; here it's worth paying close attention to the ITP, which runs higher than in neighboring Madrid.",
      },
      {
        title: "Pay the ITP (6%)",
        desc: "Two points above Madrid — it's worth comparing whether registering in a nearby region would work out cheaper.",
      },
      {
        title: "Register at the DGT in Toledo",
        desc: "If you live in Ciudad Real, Albacete, Cuenca or Guadalajara, you can handle it at your own province's office instead.",
      },
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
    stepsEs: [
      {
        title: "Busca el coche apoyándote en la experiencia local",
        desc: "La factoría Stellantis de Figueruelas ha formado a generaciones de mecánicos y gestores en Zaragoza, útil a la hora de verificar un vehículo importado.",
      },
      {
        title: "Aprovecha la posición central de Zaragoza",
        desc: "A medio camino entre Madrid y Barcelona, el transporte terrestre hacia Aragón suele ser más barato y rápido que hacia comunidades más periféricas.",
      },
      {
        title: "Pasa la ITV en Zaragoza",
        desc: "Al tener menos saturación que las capitales más grandes, la inspección técnica de importación suele resolverse con más agilidad aquí.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en toda España antes de pasar al ITP autonómico.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Coincide con el de Madrid, y la menor saturación administrativa de la comunidad facilita los trámites posteriores.",
      },
      {
        title: "Matricula en la DGT de Vía Hispanidad",
        desc: "Al tener menos volumen que Madrid o Barcelona, suele ser más sencillo conseguir cita previa en esta jefatura.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car, drawing on local expertise",
        desc: "The Stellantis factory in Figueruelas has trained generations of mechanics and administrators in Zaragoza, useful when verifying an imported vehicle.",
      },
      {
        title: "Take advantage of Zaragoza's central position",
        desc: "Halfway between Madrid and Barcelona, overland transport into Aragon tends to be cheaper and faster than into more peripheral regions.",
      },
      {
        title: "Get the ITV done in Zaragoza",
        desc: "With less congestion than the larger capitals, the import technical inspection tends to move faster here.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as anywhere in Spain, before moving on to the regional ITP.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "It matches Madrid's rate, and the region's lighter administrative load makes the following paperwork easier.",
      },
      {
        title: "Register at the DGT on Vía Hispanidad",
        desc: "With lower volume than Madrid or Barcelona, getting an appointment at this office tends to be more straightforward.",
      },
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
    stepsEs: [
      {
        title: "Busca un vehículo bien conservado",
        desc: "El clima seco de la región favorece la conservación de coches importados, un punto a favor frente a zonas más húmedas del norte.",
      },
      {
        title: "Envíalo por el puerto de Cartagena",
        desc: "Cartagena permite recibir vehículos por vía marítima sin depender del transporte terrestre desde el resto de Europa.",
      },
      {
        title: "Pasa la ITV de importación",
        desc: "Al tratarse de una única jefatura provincial, conviene coordinar la cita de ITV con la de la DGT para no duplicar viajes.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en el resto de España antes de liquidar el ITP autonómico.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Un tipo competitivo, en línea con Madrid y Andalucía, entre las comunidades con menor presión fiscal sobre el vehículo de segunda mano.",
      },
      {
        title: "Matricula en la DGT de Avda. Infante Juan Manuel",
        desc: "Al haber una sola jefatura en toda la comunidad, pide cita con bastante antelación para evitar esperas largas.",
      },
    ],
    stepsEn: [
      {
        title: "Find a well-preserved vehicle",
        desc: "The region's dry climate favors the condition of imported cars, an advantage compared with wetter areas further north.",
      },
      {
        title: "Bring it in via the Port of Cartagena",
        desc: "Cartagena lets you receive vehicles by sea without relying on overland transport from the rest of Europe.",
      },
      {
        title: "Pass the import ITV inspection",
        desc: "With only one provincial office, it's worth coordinating the ITV appointment with the DGT one to avoid duplicate trips.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as the rest of Spain before settling the regional ITP.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "A competitive rate, in line with Madrid and Andalusia, among the regions with the lightest tax load on second-hand vehicles.",
      },
      {
        title: "Register at the DGT on Avda. Infante Juan Manuel",
        desc: "With only one office for the whole region, book well in advance to avoid long waits.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca un vehículo premium en la península o Europa",
        desc: "El mercado balear se orienta a gama alta; al pagar ya un ferry, muchos importadores prefieren que el coche merezca ese coste adicional.",
      },
      {
        title: "Reserva el ferry hasta Palma",
        desc: "No hay alternativa por carretera: el trayecto en ferry desde Barcelona o Valencia es obligatorio y debe presupuestarse aparte del precio del coche.",
      },
      {
        title: "Pasa la ITV según la isla",
        desc: "Mallorca concentra el mayor volumen y suele tener más disponibilidad; en Menorca, Ibiza o Formentera conviene pedir cita con más margen.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación es igual que en la península, sin descuentos adicionales por ser territorio insular.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "El tipo es igual que en Madrid, aunque el coste total sube por el transporte marítimo obligatorio hasta el archipiélago.",
      },
      {
        title: "Matricula en la DGT de C/ Caro, Palma",
        desc: "Es la jefatura de referencia para todo el archipiélago, incluidas las islas menores.",
      },
    ],
    stepsEn: [
      {
        title: "Find a premium vehicle on the mainland or in Europe",
        desc: "The Balearic market skews upmarket; since a ferry crossing is already priced in, many importers prefer a car that justifies the extra cost.",
      },
      {
        title: "Book the ferry to Palma",
        desc: "There's no overland alternative: the ferry crossing from Barcelona or Valencia is mandatory and should be budgeted separately from the car's price.",
      },
      {
        title: "Get the ITV done depending on the island",
        desc: "Mallorca has the highest volume and usually more availability; on Menorca, Ibiza or Formentera it's worth booking further ahead.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax is the same as on the mainland, with no extra discount for being an island territory.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "The rate matches Madrid's, though total cost rises because of the mandatory ferry crossing to the archipelago.",
      },
      {
        title: "Register at the DGT on C/ Caro, Palma",
        desc: "This is the reference office for the whole archipelago, including the smaller islands.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el vehículo teniendo en cuenta el REF",
        desc: "Al aplicarse el Régimen Económico y Fiscal canario, conviene confirmar de antemano cómo tributa la compra antes de cerrarla.",
      },
      {
        title: "Envíalo por mar hasta Las Palmas o Tenerife",
        desc: "El trayecto desde la península tarda entre 3 y 5 días; no existe alternativa terrestre al ser territorio insular y alejado.",
      },
      {
        title: "Pasa la ITV de importación",
        desc: "Programa la inspección técnica teniendo en cuenta el tiempo de tránsito marítimo, para no acumular retrasos adicionales.",
      },
      {
        title: "El IGIC sustituye al IVA",
        desc: "Aquí no se paga el 21% de IVA nacional, sino el IGIC (7%), la gran diferencia fiscal frente a la importación en la península.",
      },
      {
        title: "Liquida el ITP (5,5%)",
        desc: "El tipo autonómico convive con el régimen fiscal especial; consulta también los aranceles propios del REF antes de dar el coche por matriculado.",
      },
      {
        title: "Matricula en la DGT de Las Palmas o Santa Cruz",
        desc: "El archipiélago tiene dos jefaturas provinciales — elige la de tu isla para no depender de un desplazamiento entre provincias.",
      },
    ],
    stepsEn: [
      {
        title: "Find the vehicle with the REF in mind",
        desc: "Since the Canary Islands' special economic and tax regime applies, it's worth confirming in advance how the purchase will be taxed.",
      },
      {
        title: "Ship it by sea to Las Palmas or Tenerife",
        desc: "The crossing from the mainland takes 3 to 5 days; there's no overland alternative given the islands' distance and insularity.",
      },
      {
        title: "Pass the import ITV inspection",
        desc: "Schedule the technical inspection with the maritime transit time in mind, so you don't stack up further delays.",
      },
      {
        title: "IGIC replaces VAT",
        desc: "You don't pay the national 21% VAT here, but IGIC (7%) instead — the major tax difference compared with importing on the mainland.",
      },
      {
        title: "Pay the ITP (5.5%)",
        desc: "The regional rate sits alongside the special tax regime; also check the REF's own tariffs before considering the car registered.",
      },
      {
        title: "Register at the DGT in Las Palmas or Santa Cruz",
        desc: "The archipelago has two provincial offices — pick the one on your own island rather than traveling between provinces.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el coche pensando en la ruta cantábrica",
        desc: "La autovía de la costa desde el País Vasco hace que muchas importaciones asturianas circulen por vehículos que ya entraron por Irún.",
      },
      {
        title: "Entra por el puerto de Gijón",
        desc: "Alternativa a la carretera: Gijón puede recibir vehículos importados directamente por vía marítima.",
      },
      {
        title: "Pasa la ITV en Oviedo",
        desc: "Al ser una comunidad pequeña, la DGT gestiona la cita previa online sin las esperas de las jefaturas más grandes.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en el resto de España antes de liquidar el ITP autonómico.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Mismo nivel que Madrid, una de las opciones más competitivas de la cornisa cantábrica.",
      },
      {
        title: "Matricula en la DGT de General Elorza, Oviedo",
        desc: "Reserva tu cita previa online con antelación, ya que es la única jefatura de la comunidad.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car with the Cantabrian route in mind",
        desc: "The coastal highway from the Basque Country means many Asturian imports are vehicles that already entered via Irún.",
      },
      {
        title: "Bring it in via the Port of Gijón",
        desc: "An alternative to the road: Gijón can receive imported vehicles directly by sea.",
      },
      {
        title: "Get the ITV done in Oviedo",
        desc: "Being a small region, the DGT manages online appointments without the waits seen at larger offices.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as the rest of Spain before settling the regional ITP.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "Same level as Madrid, one of the more competitive options along the Cantabrian coast.",
      },
      {
        title: "Register at the DGT on General Elorza, Oviedo",
        desc: "Book your online appointment ahead of time, since it's the only office in the region.",
      },
    ],
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
      "El ITP más alto de España: 8% — calcula bien el coste total",
      "El ferry Santander-Plymouth permite traer coches desde el Reino Unido",
      "Considera si compensa registrar el coche en otra comunidad",
      "Solo hay una jefatura de tráfico en Santander",
    ],
    tipsEn: [
      "The highest ITP in Spain: 8% — calculate total costs carefully",
      "The Santander-Plymouth ferry allows bringing cars from the UK",
      "Consider whether registering the car in another region is better",
      "There's only one traffic office in Santander",
    ],
    nearestPort: "Santander",
    stepsEs: [
      {
        title: "Busca el coche pensando también en el Reino Unido",
        desc: "La ruta Santander-Plymouth abre una vía poco habitual en España: importar directamente desde el mercado británico sin pasar por Francia.",
      },
      {
        title: "Trae el vehículo por el ferry de Santander",
        desc: "Es la única conexión directa con el Reino Unido para importar coches por mar sin cruzar el resto de Europa por carretera.",
      },
      {
        title: "Pasa la ITV de importación",
        desc: "Si el coche procede del Reino Unido, ten en cuenta que puede requerir adaptaciones antes de superar la inspección, al venir con conducción a la derecha.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en toda España, pero aquí conviene prestar especial atención al tramo autonómico que sigue.",
      },
      {
        title: "Liquida el ITP (8%)",
        desc: "Es el tipo más alto de España — merece la pena valorar si compensa matricular el vehículo en otra comunidad antes de decidir aquí.",
      },
      {
        title: "Matricula en la DGT de Calvo Sotelo, Santander",
        desc: "Al ser la única jefatura de la comunidad, gestiona la cita con margen suficiente.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car, considering the UK too",
        desc: "The Santander-Plymouth route opens up a path rarely used in Spain: importing directly from the British market without passing through France.",
      },
      {
        title: "Bring the vehicle in via the Santander ferry",
        desc: "It's the only direct sea connection with the UK, letting you import cars without driving across the rest of Europe.",
      },
      {
        title: "Pass the import ITV inspection",
        desc: "If the car comes from the UK, note it may need adaptations before passing inspection, since it arrives right-hand drive.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as anywhere in Spain, but here it's worth paying close attention to the regional bracket that follows.",
      },
      {
        title: "Pay the ITP (8%)",
        desc: "This is the highest rate in Spain — it's worth weighing whether registering the vehicle in another region would work out better first.",
      },
      {
        title: "Register at the DGT on Calvo Sotelo, Santander",
        desc: "As the only office in the region, arrange your appointment with enough lead time.",
      },
    ],
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
    stepsEs: [
      {
        title: "Busca el coche al otro lado de la raya con Portugal",
        desc: "La frontera por Badajoz convierte a Extremadura en una de las comunidades donde más sentido tiene mirar directamente el mercado portugués.",
      },
      {
        title: "Cruza por Badajoz sin necesidad de barco",
        desc: "Al ser frontera terrestre, el transporte desde Portugal evita los costes añadidos de un ferry o transporte marítimo.",
      },
      {
        title: "Pasa la ITV en Badajoz o Cáceres",
        desc: "Las dos jefaturas de la comunidad gestionan también la inspección técnica; elige la más cercana a tu residencia.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en el resto del país antes de pasar al ITP autonómico.",
      },
      {
        title: "Liquida el ITP (6%)",
        desc: "Ligeramente por encima de la media nacional, aunque los precios de compra en origen suelen compensar la diferencia.",
      },
      {
        title: "Matricula en la DGT de Badajoz o Cáceres",
        desc: "Al tener dos jefaturas provinciales, elige la de tu provincia para evitar cruzar la comunidad de punta a punta.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car on the other side of the Portuguese border",
        desc: "The Badajoz crossing makes Extremadura one of the regions where looking directly at the Portuguese market makes the most sense.",
      },
      {
        title: "Cross via Badajoz with no boat required",
        desc: "Since it's a land border, transport from Portugal avoids the extra costs of a ferry or maritime shipping.",
      },
      {
        title: "Get the ITV done in Badajoz or Cáceres",
        desc: "The region's two offices also handle the technical inspection; pick whichever is closer to where you live.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as the rest of the country before moving to the regional ITP.",
      },
      {
        title: "Pay the ITP (6%)",
        desc: "Slightly above the national average, though purchase prices at source tend to offset the difference.",
      },
      {
        title: "Register at the DGT in Badajoz or Cáceres",
        desc: "With two provincial offices available, pick the one in your own province to avoid crossing the region end to end.",
      },
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
    stepsEs: [
      {
        title: "Busca el coche en Francia vía Pirineo Occidental",
        desc: "La fábrica de Volkswagen en Pamplona ha generado una base técnica local sólida para valorar vehículos alemanes de importación.",
      },
      {
        title: "Cruza el Pirineo Occidental desde Francia",
        desc: "Es la vía de entrada natural para importaciones europeas, sin necesidad de rodear por el País Vasco o Aragón.",
      },
      {
        title: "Pasa la ITV en Pamplona",
        desc: "Al ser una comunidad de tamaño medio, la inspección técnica de importación suele resolverse sin la saturación de capitales más grandes.",
      },
      {
        title: "Confirma tu situación con la Hacienda Foral",
        desc: "El régimen foral navarro gestiona parte de la fiscalidad propia; conviene consultarlo antes de calcular el impuesto de matriculación.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Competitivo con Madrid, dentro de un régimen fiscal foral distinto al del resto de España.",
      },
      {
        title: "Matricula en la DGT de Sancho el Mayor, Pamplona",
        desc: "Es la jefatura de referencia para toda la comunidad foral.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car in France via the Western Pyrenees",
        desc: "The Volkswagen factory in Pamplona has built up solid local technical expertise for assessing imported German vehicles.",
      },
      {
        title: "Cross the Western Pyrenees from France",
        desc: "It's the natural entry route for European imports, without needing to go around via the Basque Country or Aragon.",
      },
      {
        title: "Get the ITV done in Pamplona",
        desc: "As a mid-sized region, the import technical inspection tends to move without the congestion seen in larger capitals.",
      },
      {
        title: "Check your situation with the Foral Treasury",
        desc: "Navarre's foral regime manages part of its own taxation; it's worth checking before calculating the registration tax.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "Competitive with Madrid, within a foral tax regime distinct from the rest of Spain.",
      },
      {
        title: "Register at the DGT on Sancho el Mayor, Pamplona",
        desc: "This is the reference office for the whole foral community.",
      },
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
    stepsEs: [
      {
        title: "Busca el coche apoyándote en las regiones vecinas",
        desc: "Al estar bien conectada con el País Vasco y Navarra, muchos importadores riojanos siguen las mismas rutas de entrada que sus vecinos del norte.",
      },
      {
        title: "Transporta el coche por carretera",
        desc: "Al ser la comunidad más pequeña de España y sin puerto propio, el transporte llega siempre por vía terrestre desde regiones colindantes.",
      },
      {
        title: "Pasa la ITV en Logroño",
        desc: "El menor volumen de trámites en la comunidad se traduce en citas de inspección más rápidas que en comunidades más grandes.",
      },
      {
        title: "Calcula el tramo estatal por CO₂",
        desc: "El impuesto de matriculación se aplica igual que en el resto de España antes de pasar al ITP autonómico.",
      },
      {
        title: "Liquida el ITP (4%)",
        desc: "Coincide con Madrid, y la menor saturación administrativa de La Rioja agiliza todo el proceso posterior.",
      },
      {
        title: "Matricula en la DGT de Pérez Galdós, Logroño",
        desc: "Al ser la única jefatura de la comunidad más pequeña de España, las citas suelen conseguirse con más rapidez que en otras provincias.",
      },
    ],
    stepsEn: [
      {
        title: "Find the car by following neighboring regions",
        desc: "Being well connected with the Basque Country and Navarre, many importers here follow the same entry routes as their northern neighbors.",
      },
      {
        title: "Transport the car overland",
        desc: "As Spain's smallest region with no port of its own, transport always arrives by road from neighboring regions.",
      },
      {
        title: "Get the ITV done in Logroño",
        desc: "The region's lower paperwork volume translates into faster inspection appointments than in larger regions.",
      },
      {
        title: "Work out the national CO₂ bracket",
        desc: "The registration tax applies the same as the rest of Spain before moving to the regional ITP.",
      },
      {
        title: "Pay the ITP (4%)",
        desc: "It matches Madrid, and La Rioja's lighter administrative load speeds up the rest of the process.",
      },
      {
        title: "Register at the DGT on Pérez Galdós, Logroño",
        desc: "As the only office in Spain's smallest region, appointments tend to come through faster than in other provinces.",
      },
    ],
  },
];

export function getRegionBySlug(slug: string): RegionData | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
