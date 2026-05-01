import type { Language } from "@/constants/translations";

export type CityFaq = { question: string; answer: string };
export type CityI18n = {
  uniqueParagraph: string;
  faq: CityFaq[];
  population: string;
};

const ES: Record<string, CityI18n> = {
  madrid: {
    population: "3,4 millones",
    uniqueParagraph:
      "Madrid es el mayor mercado de importación de coches de España. Su ITP del 4% es uno de los más bajos del país, lo que convierte a la capital en el destino preferido de quienes importan vehículos de gama media-alta. La Jefatura Provincial de Tráfico de Madrid (C/ Arturo Soria 143) es una de las más transitadas, por lo que se recomienda pedir cita con antelación. Las estaciones ITV de Colmenar Viejo y Alcobendas suelen ser más rápidas que las del centro. Madrid cuenta con excelentes conexiones terrestres con el resto de Europa, y muchos importadores reciben sus coches directamente en el domicilio desde Alemania en 5–7 días hábiles.",
    faq: [
      {
        question: "¿Cuánto es el ITP para importar un coche en Madrid?",
        answer:
          "La Comunidad de Madrid aplica un ITP del 4% sobre el valor fiscal del vehículo. Para un coche de 20.000 € de valor fiscal, el ITP sería de 800 €. Este es uno de los tipos más bajos de España.",
      },
      {
        question: "¿Dónde hago la ITV de importación en Madrid?",
        answer:
          "Puedes pasar la ITV de importación en cualquier estación autorizada de la Comunidad de Madrid. Las más recomendadas por rapidez son la ITV de Colmenar Viejo, Alcobendas y Getafe. Pide cita previa online en la web de la Comunidad de Madrid.",
      },
      {
        question: "¿Cuánto tarda matricular un coche importado en Madrid?",
        answer:
          "El proceso completo en Madrid suele tardar entre 4 y 6 semanas. La ITV demora 1–2 semanas, el pago de impuestos es inmediato, y la cita DGT suele asignarse en 2–3 semanas. Contratar una gestoría puede reducir el plazo a 3–4 semanas.",
      },
    ],
  },
  barcelona: {
    population: "1,6 millones",
    uniqueParagraph:
      "Barcelona es la segunda ciudad de España por volumen de importaciones de vehículos. Con un ITP del 5% en Cataluña, la ciudad tiene costes ligeramente superiores a Madrid pero una logística excelente: el Puerto de Barcelona es uno de los más grandes del Mediterráneo y recibe vehículos de toda Europa y de importaciones marítimas. La proximidad con la frontera francesa (La Jonquera está a solo 150 km) facilita el transporte terrestre desde Alemania, Francia y el resto de la UE. Hay que tener en cuenta que Barcelona tiene una Zona de Bajas Emisiones (ZBE) que restringe la circulación de vehículos con etiqueta DGT desfavorable, por lo que es importante verificar la etiqueta medioambiental del coche antes de comprarlo.",
    faq: [
      {
        question: "¿Cuánto es el ITP en Cataluña para coches importados?",
        answer:
          "Cataluña aplica un ITP del 5% sobre el valor fiscal del vehículo. Para un coche con valor fiscal de 20.000 €, el ITP sería de 1.000 €. Es un 1% más que en Madrid.",
      },
      {
        question: "¿Cómo afecta la ZBE de Barcelona a los coches importados?",
        answer:
          "La Zona de Bajas Emisiones de Barcelona restringe la entrada de vehículos con etiquetas B, C, sin etiqueta o etiqueta Eco según el horario. Antes de importar un coche, verifica su etiqueta DGT en la web de la Agencia Tributaria. Los coches eléctricos e híbridos enchufables tienen etiqueta CERO y circulan libremente.",
      },
      {
        question: "¿Puedo recibir mi coche importado directamente en Barcelona?",
        answer:
          "Sí, muchas empresas de transporte ofrecen entrega a domicilio en Barcelona desde Alemania y otros países europeos. El plazo suele ser de 5–10 días hábiles desde la recogida. El coste de transporte Munich–Barcelona es de aproximadamente 900–1.200 €.",
      },
    ],
  },
  sevilla: {
    population: "690.000",
    uniqueParagraph:
      "Sevilla es la capital de Andalucía y uno de los mercados de importación más activos del sur de España. Con un ITP del 4% —igual que Madrid—, Andalucía ofrece condiciones fiscales muy competitivas. La cercanía al Puerto de Algeciras (a 200 km de Sevilla) facilita las importaciones marítimas desde el norte de África y otros mercados. Para coches procedentes de Alemania o del norte de Europa, el transporte por carretera suele ser la opción más económica, con tiempos de entrega de 4–6 días. La Jefatura Provincial de Tráfico de Sevilla atiende también a vehículos de toda Andalucía occidental.",
    faq: [
      {
        question: "¿Cuánto es el ITP en Andalucía para coches importados?",
        answer:
          "Andalucía aplica un ITP del 4% sobre el valor fiscal. Para un coche de 20.000 € de valor fiscal, el ITP sería de 800 €. Es uno de los tipos más bajos de España, igual que Madrid.",
      },
      {
        question: "¿Dónde se pasa la ITV de importación en Sevilla?",
        answer:
          "En Sevilla hay varias estaciones ITV donde puedes pasar la ITV de importación. Las más accesibles están en la SE-30 y en las salidas principales de la ciudad. Necesitarás la ficha técnica del país de origen y el Certificado de Conformidad (COC) del vehículo.",
      },
      {
        question: "¿Puedo importar un coche desde Marruecos a Sevilla?",
        answer:
          "Técnicamente sí, pero los coches de Marruecos son vehículos de fuera de la UE, lo que implica aranceles aduaneros (6,5%), IVA (21%) y posible homologación individual. El proceso es más complejo y costoso que importar desde un país de la UE. Consulta con una gestoría especializada.",
      },
    ],
  },
  valencia: {
    population: "800.000",
    uniqueParagraph:
      "Valencia es la tercera ciudad de España y uno de los mayores puntos de entrada de vehículos importados gracias a su puerto, el más importante de España en tráfico de automóviles. El ITP de la Comunidad Valenciana es del 6%, algo más alto que Madrid o Andalucía, pero las ventajas logísticas del Puerto de Valencia compensan este sobrecoste para muchos importadores, especialmente para los que traen coches desde Japón, Corea o EAU por vía marítima. Valencia también tiene una Zona de Bajas Emisiones que afecta a la circulación de vehículos con alta emisión de CO2, por lo que es importante verificar la etiqueta DGT del coche antes de comprarlo.",
    faq: [
      {
        question: "¿Cuánto es el ITP en la Comunidad Valenciana?",
        answer:
          "La Comunidad Valenciana aplica un ITP del 6% sobre el valor fiscal del vehículo. Para un coche de 20.000 € de valor fiscal, el ITP sería de 1.200 €. Es un 2% más que en Madrid o Andalucía.",
      },
      {
        question: "¿Puedo importar un coche por el Puerto de Valencia?",
        answer:
          "Sí, el Puerto de Valencia es el principal puerto español para importación de vehículos. Tiene terminales especializadas en automóviles con capacidad para procesar miles de coches al mes. Es especialmente útil para importaciones desde Japón, Corea y EAU.",
      },
      {
        question: "¿Qué coches eléctricos son populares para importar en Valencia?",
        answer:
          "En Valencia son populares las importaciones de Tesla Model 3 y Model Y desde Alemania, así como el BMW i4, el Mercedes EQC y el Volkswagen ID.4. Al ser eléctricos, están exentos del Impuesto de Matriculación, lo que reduce significativamente el coste total de importación.",
      },
    ],
  },
  zaragoza: {
    population: "680.000",
    uniqueParagraph:
      "Zaragoza ocupa una posición estratégica en el mapa logístico de España: está exactamente en el eje Madrid–Barcelona–París, lo que la convierte en un punto de tránsito natural para los coches importados desde Francia y Alemania. Aragón aplica un ITP del 4%, igual que Madrid, lo que la hace competitiva fiscalmente. La ciudad cuenta con el Puerto Seco de Zaragoza (PLAZA), uno de los centros logísticos más grandes de Europa, con capacidad para almacenar y preparar vehículos antes de la matriculación. Zaragoza también alberga la planta de Stellantis (antes Opel), lo que crea una cultura automotriz consolidada en la región.",
    faq: [
      {
        question: "¿Cuánto es el ITP en Aragón para coches importados?",
        answer:
          "Aragón aplica un ITP del 4% sobre el valor fiscal. Para un coche de 20.000 € de valor fiscal, pagarías 800 € de ITP. Es uno de los tipos más bajos de España.",
      },
      {
        question: "¿Cuánto cuesta el transporte desde Alemania a Zaragoza?",
        answer:
          "El transporte de un coche desde Alemania (Múnich o Fráncfort) a Zaragoza por camión cuesta entre 900 y 1.300 €. El tiempo de tránsito suele ser de 3–5 días hábiles. Muchas empresas de transporte hacen paradas en Zaragoza en la ruta Madrid–Barcelona.",
      },
      {
        question: "¿Hay buenas itv para importación en Zaragoza?",
        answer:
          "Sí, Zaragoza cuenta con varias estaciones ITV autorizadas para la inspección de vehículos importados. La espera suele ser menor que en Madrid o Barcelona. Puedes pedir cita online en la web del Gobierno de Aragón.",
      },
    ],
  },
  bilbao: {
    population: "350.000",
    uniqueParagraph:
      "Bilbao y el País Vasco tienen una de las rentas per cápita más altas de España, lo que se traduce en una alta demanda de coches premium importados. El ITP vasco es del 4%, igual que Madrid. Además, la proximidad a la frontera francesa (Irún está a 100 km) y el Puerto de Bilbao —que recibe líneas regulares desde el Reino Unido— hacen de Bilbao un punto de entrada muy relevante. Es importante saber que en el País Vasco los impuestos son gestionados por las Diputaciones Forales (no por la Agencia Tributaria estatal), por lo que hay algunas diferencias en los procedimientos. Una gestoría local con conocimiento de la normativa foral es especialmente recomendable.",
    faq: [
      {
        question: "¿Cuánto es el ITP en País Vasco para coches importados?",
        answer:
          "País Vasco aplica un ITP del 4% sobre el valor fiscal, gestionado por las Diputaciones Forales de Álava, Bizkaia y Gipuzkoa. El proceso de pago y trámite es diferente al del resto de España, por lo que es recomendable contar con una gestoría local.",
      },
      {
        question: "¿Puedo importar un coche por el Puerto de Bilbao?",
        answer:
          "Sí, el Puerto de Bilbao tiene líneas regulares de roll-on/roll-off desde el Reino Unido (Portsmouth, Plymouth). También recibe vehículos desde otros puertos europeos. Es una excelente opción para importar coches desde el Reino Unido después del Brexit.",
      },
      {
        question: "¿Cómo funciona el ITP foral en el País Vasco?",
        answer:
          "En el País Vasco, el ITP (denominado ITPAJD) se paga en la Diputación Foral correspondiente a tu domicilio: Diputación Foral de Bizkaia (Bilbao), Diputación Foral de Gipuzkoa (San Sebastián) o Diputación Foral de Álava (Vitoria). El formulario y el procedimiento son similares al resto de España pero con gestión independiente.",
      },
    ],
  },
  malaga: {
    population: "590.000",
    uniqueParagraph:
      "Málaga es una de las ciudades con mayor crecimiento económico de España y un destino muy popular entre expatriados europeos que traen sus coches al instalarse en la Costa del Sol. El ITP andaluz del 4% hace que importar sea relativamente económico desde el punto de vista fiscal. La ciudad tiene buenas conexiones con el Puerto de Algeciras (a 110 km), ideal para importaciones marítimas. El aeropuerto de Málaga también facilita la llegada de gestores que acompañan a compradores en Alemania. La gran comunidad de residentes extranjeros (especialmente británicos y alemanes) ha creado un ecosistema de gestorías y profesionales especializados en importaciones.",
    faq: [
      {
        question: "¿Cuánto cuesta importar un coche a Málaga desde Alemania?",
        answer:
          "El coste total de importar un coche de 25.000 € desde Alemania a Málaga incluye: transporte (~1.100 €), ITV (~200 €), Impuesto de Matriculación (varía según CO2, p.ej. 1.200 € para un coche de emisiones medias), ITP si es de particular (~1.000 €), DGT (~100 €) y gestoría (~300 €). Total aproximado: 2.500–4.000 € adicionales al precio del coche.",
      },
      {
        question: "¿Hay gestorías especializadas en importación en Málaga?",
        answer:
          "Sí, en Málaga hay varias gestorías especializadas en importación de vehículos, especialmente orientadas a la comunidad extranjera. Muchas trabajan en inglés y alemán. Puedes encontrarlas buscando 'gestoría importación vehículos Málaga' o preguntando en foros de expatriados.",
      },
      {
        question: "¿Puedo importar un coche desde el Reino Unido a Málaga?",
        answer:
          "Sí, pero desde el Brexit los coches del Reino Unido se tratan como importaciones extracomunitarias: pagan aranceles (6,5%), IVA (21%) y pueden requerir homologación individual. El Puerto de Algeciras recibe barcos desde el Reino Unido regularmente. El proceso es más caro y complejo que importar desde la UE.",
      },
    ],
  },
  alicante: {
    population: "335.000",
    uniqueParagraph:
      "Alicante es uno de los destinos más populares entre los jubilados europeos que se instalan en España, y muchos de ellos quieren traer su coche. La Comunidad Valenciana aplica un ITP del 6%, pero el coste de vida más bajo compensa esta diferencia fiscal. El Puerto de Alicante recibe embarcaciones de varios países mediterráneos. La ciudad tiene excelentes conexiones por autovía con Madrid (A-31) y Barcelona (A-7), lo que facilita el transporte terrestre de vehículos. Los residentes alemanes, holandeses y británicos representan una parte significativa de la demanda de importaciones en la comarca.",
    faq: [
      {
        question: "¿Cómo importo mi coche al jubilarme y trasladarme a Alicante?",
        answer:
          "Si te jubilás y trasladas tu residencia a Alicante, puedes solicitar la exención por cambio de residencia (Cambio de Residencia) si cumples los requisitos: ser propietario del coche durante al menos 6 meses y solicitarlo en los primeros 60 días tras fijar la residencia en España. El trámite se hace en la Agencia Tributaria.",
      },
      {
        question: "¿Cuánto es el ITP en Alicante para un coche de segunda mano?",
        answer:
          "Alicante pertenece a la Comunidad Valenciana, que aplica un ITP del 6%. Para un coche de 20.000 € de valor fiscal, el ITP sería de 1.200 €. Es 2% más que en Madrid pero el proceso y los plazos son similares.",
      },
      {
        question: "¿Dónde hago el pago del ITP al importar en Alicante?",
        answer:
          "El ITP en la Comunidad Valenciana se paga en la Conselleria d'Hisenda i Model Econòmic. Puedes hacerlo telemáticamente con certificado digital o presencialmente en las oficinas de Hacienda de Alicante. El formulario a usar es el modelo 600.",
      },
    ],
  },
  murcia: {
    population: "460.000",
    uniqueParagraph:
      "Murcia es una ciudad con una economía en crecimiento y un mercado de importación de coches que ha aumentado notablemente en los últimos años. La Región de Murcia aplica un ITP del 4%, igual que Madrid y Andalucía, lo que la hace atractiva fiscalmente. La ciudad tiene acceso rápido al Puerto de Cartagena (a 45 km), uno de los puertos más grandes del Mediterráneo occidental, con conexiones regulares con Italia, Francia y el norte de África. Murcia también está bien comunicada por autovía con Madrid (A-30) y con la costa mediterránea (A-7), lo que facilita el transporte de vehículos por carretera.",
    faq: [
      {
        question: "¿Cuánto es el ITP en Murcia para coches importados?",
        answer:
          "La Región de Murcia aplica un ITP del 4% sobre el valor fiscal del vehículo. Para un coche de 20.000 € de valor fiscal, el ITP sería de 800 €. Es uno de los tipos más bajos de España.",
      },
      {
        question: "¿Se puede importar un coche por el Puerto de Cartagena?",
        answer:
          "Sí, el Puerto de Cartagena tiene instalaciones para recibir vehículos. Es una opción especialmente útil para importaciones desde el norte de África o el Mediterráneo oriental. Hay que coordinar el despacho aduanero con un agente autorizado.",
      },
      {
        question: "¿Cuánto tarda la matriculación en Murcia?",
        answer:
          "El proceso en Murcia suele tardar entre 4 y 7 semanas. La ITV demora 1–2 semanas, el pago de impuestos es inmediato, y la cita DGT se asigna en 3–4 semanas. El tiempo puede reducirse con una gestoría local.",
      },
    ],
  },
  palma: {
    population: "420.000",
    uniqueParagraph:
      "Palma de Mallorca tiene un mercado de importación de coches con características únicas: al ser una isla, todos los vehículos llegan por barco o por avión (este último solo para coches pequeños en servicios especiales). Las Islas Baleares aplican un ITP del 4%, competitivo respecto a otras comunidades. El Puerto de Palma y el Puerto de Alcúdia reciben barcos con vehículos regularmente desde Barcelona y Valencia. El coste adicional del transporte marítimo (50–200 € adicionales sobre el transporte continental) debe tenerse en cuenta al calcular el coste total de importación. El alto poder adquisitivo de la isla crea una demanda sostenida de coches premium importados.",
    faq: [
      {
        question: "¿Cómo llega un coche importado a Mallorca?",
        answer:
          "Los coches importados a Mallorca llegan en barco desde Barcelona o Valencia. La empresa Baleàlia y otras navieras ofrecen servicio ro-ro para vehículos. El coste adicional del transporte marítimo insular es de 50–200 € sobre el precio del transporte continental.",
      },
      {
        question: "¿Cuánto es el ITP en Baleares para coches importados?",
        answer:
          "Las Islas Baleares aplican un ITP del 4% sobre el valor fiscal del vehículo. Para un coche de 20.000 € de valor fiscal, el ITP sería de 800 €. Es uno de los tipos más bajos, igual que Madrid y Andalucía.",
      },
      {
        question: "¿Puedo usar mi coche alemán en Mallorca antes de matricularlo?",
        answer:
          "Puedes circular con matrícula extranjera temporalmente mientras realizas los trámites, pero tienes un plazo de 30 días desde que fijas la residencia en España para iniciar la matriculación. Si superas este plazo sin haberla iniciado, podrías recibir sanciones.",
      },
    ],
  },
};

const EN: Record<string, CityI18n> = {
  madrid: {
    population: "3.4 million",
    uniqueParagraph:
      "Madrid is Spain's largest car import market. Its 4% ITP is one of the lowest in the country, making the capital the preferred destination for those importing mid-to-high-end vehicles. Madrid's Provincial Traffic Office (C/ Arturo Soria 143) is one of the busiest, so book an appointment in advance. ITV stations in Colmenar Viejo and Alcobendas are usually faster than central ones. Madrid has excellent road links with the rest of Europe, and many importers receive their cars at home from Germany within 5–7 business days.",
    faq: [
      {
        question: "How much is ITP for importing a car to Madrid?",
        answer:
          "The Madrid region applies a 4% ITP on the vehicle's fiscal value. For a car with a €20,000 fiscal value, ITP would be €800. This is one of the lowest rates in Spain.",
      },
      {
        question: "Where do I do the import ITV in Madrid?",
        answer:
          "You can take the import ITV at any authorized station in the Madrid region. The fastest are usually Colmenar Viejo, Alcobendas and Getafe. Book online via the Madrid government website.",
      },
      {
        question: "How long does registering an imported car in Madrid take?",
        answer:
          "The full process in Madrid usually takes 4–6 weeks. ITV takes 1–2 weeks, taxes are paid immediately, and the DGT appointment is normally assigned in 2–3 weeks. Hiring an agency can shorten it to 3–4 weeks.",
      },
    ],
  },
  barcelona: {
    population: "1.6 million",
    uniqueParagraph:
      "Barcelona is Spain's second-largest market for vehicle imports. With a 5% ITP in Catalonia, costs are slightly higher than Madrid, but logistics are excellent: the Port of Barcelona is one of the largest in the Mediterranean and receives vehicles from across Europe and overseas. Proximity to the French border (La Jonquera is just 150 km away) makes road transport from Germany, France and the rest of the EU easy. Note that Barcelona has a Low Emission Zone (ZBE) restricting vehicles with unfavourable DGT labels — verify the environmental label before buying.",
    faq: [
      {
        question: "How much is ITP in Catalonia for imported cars?",
        answer:
          "Catalonia applies a 5% ITP on the vehicle's fiscal value. For a €20,000 fiscal value, ITP would be €1,000 — 1% higher than Madrid.",
      },
      {
        question: "How does Barcelona's LEZ affect imported cars?",
        answer:
          "Barcelona's Low Emission Zone restricts vehicles with B, C, no-label or Eco labels depending on the schedule. Before importing, verify the DGT label on the Spanish Tax Agency website. Pure EVs and plug-in hybrids carry the CERO label and circulate freely.",
      },
      {
        question: "Can I get my imported car delivered straight to Barcelona?",
        answer:
          "Yes — many transport companies deliver door-to-door in Barcelona from Germany and other European countries. Lead time is usually 5–10 business days. Munich–Barcelona transport costs roughly €900–1,200.",
      },
    ],
  },
  sevilla: {
    population: "690,000",
    uniqueParagraph:
      "Seville is the capital of Andalusia and one of the most active import markets in southern Spain. With a 4% ITP — same as Madrid — Andalusia offers very competitive tax conditions. The Port of Algeciras (200 km away) makes sea imports from North Africa and other markets easier. For cars from Germany or northern Europe, road transport is usually the cheapest option, with delivery times of 4–6 days. Seville's Provincial Traffic Office also serves all of western Andalusia.",
    faq: [
      {
        question: "How much is ITP in Andalusia for imported cars?",
        answer:
          "Andalusia applies a 4% ITP on fiscal value. For a €20,000 fiscal value, ITP would be €800. It's one of the lowest rates in Spain, same as Madrid.",
      },
      {
        question: "Where do I do the import ITV in Seville?",
        answer:
          "Seville has several ITV stations where you can do the import inspection. The most accessible are along the SE-30 and at the city's main exits. You'll need the country-of-origin technical sheet and the vehicle's Certificate of Conformity (COC).",
      },
      {
        question: "Can I import a car from Morocco to Seville?",
        answer:
          "Technically yes, but Moroccan cars are non-EU, meaning customs duty (6.5%), VAT (21%) and possibly individual homologation. The process is more complex and expensive than from an EU country. Use a specialised agency.",
      },
    ],
  },
  valencia: {
    population: "800,000",
    uniqueParagraph:
      "Valencia is Spain's third-largest city and one of the main entry points for imported vehicles thanks to its port — Spain's busiest for automobiles. The Valencia region's ITP is 6%, slightly higher than Madrid or Andalusia, but the logistical advantages of the Port of Valencia offset the surcharge for many importers, especially those bringing cars from Japan, Korea or the UAE by sea. Valencia also has a Low Emission Zone affecting high-CO2 vehicles, so verify the DGT label before buying.",
    faq: [
      {
        question: "How much is ITP in the Valencia region?",
        answer:
          "The Valencia region applies a 6% ITP on the vehicle's fiscal value. For a €20,000 fiscal value, ITP would be €1,200 — 2% higher than Madrid or Andalusia.",
      },
      {
        question: "Can I import a car through the Port of Valencia?",
        answer:
          "Yes — the Port of Valencia is Spain's main port for vehicle imports, with specialised car terminals processing thousands of cars per month. It's especially useful for imports from Japan, Korea and the UAE.",
      },
      {
        question: "Which EVs are popular to import in Valencia?",
        answer:
          "Popular imports in Valencia include Tesla Model 3 and Model Y from Germany, plus the BMW i4, Mercedes EQC and Volkswagen ID.4. Being electric, they're exempt from the registration tax, significantly reducing total import cost.",
      },
    ],
  },
  zaragoza: {
    population: "680,000",
    uniqueParagraph:
      "Zaragoza is strategically placed on Spain's logistics map: it sits exactly on the Madrid–Barcelona–Paris axis, making it a natural transit point for cars imported from France and Germany. Aragón applies a 4% ITP, same as Madrid, making it tax-competitive. The city hosts the Zaragoza Dry Port (PLAZA), one of Europe's largest logistics hubs, where vehicles can be stored and prepped before registration. Zaragoza also hosts the Stellantis (formerly Opel) plant, fostering a long-standing automotive culture in the region.",
    faq: [
      {
        question: "How much is ITP in Aragón for imported cars?",
        answer:
          "Aragón applies a 4% ITP on fiscal value. For a €20,000 fiscal value you'd pay €800 — one of the lowest rates in Spain.",
      },
      {
        question: "How much does transport from Germany to Zaragoza cost?",
        answer:
          "Transporting a car from Germany (Munich or Frankfurt) to Zaragoza by truck costs €900–1,300, with 3–5 business days transit. Many transporters stop in Zaragoza on the Madrid–Barcelona route.",
      },
      {
        question: "Are there good ITV stations for imports in Zaragoza?",
        answer:
          "Yes — Zaragoza has several ITV stations authorised for imported-vehicle inspection. Waits are usually shorter than in Madrid or Barcelona. Book online on the Government of Aragón website.",
      },
    ],
  },
  bilbao: {
    population: "350,000",
    uniqueParagraph:
      "Bilbao and the Basque Country have one of Spain's highest income-per-capita levels, fuelling demand for imported premium cars. The Basque ITP is 4%, same as Madrid. Proximity to the French border (Irún is 100 km away) and the Port of Bilbao — with regular UK lines — make Bilbao a key entry point. Note that taxes in the Basque Country are managed by the Provincial Treasuries (not the central Tax Agency), so procedures differ slightly. A local agency familiar with foral rules is highly recommended.",
    faq: [
      {
        question: "How much is ITP in the Basque Country for imported cars?",
        answer:
          "The Basque Country applies a 4% ITP on fiscal value, managed by the Foral Treasuries of Álava, Bizkaia and Gipuzkoa. Payment and procedure differ from the rest of Spain — using a local agency is recommended.",
      },
      {
        question: "Can I import a car through the Port of Bilbao?",
        answer:
          "Yes — the Port of Bilbao runs regular roll-on/roll-off lines from the UK (Portsmouth, Plymouth) and receives vehicles from other European ports. It's an excellent option for UK imports post-Brexit.",
      },
      {
        question: "How does foral ITP work in the Basque Country?",
        answer:
          "In the Basque Country, ITP (called ITPAJD) is paid at the Foral Treasury matching your residence: Bizkaia (Bilbao), Gipuzkoa (San Sebastián) or Álava (Vitoria). Form and procedure are similar to the rest of Spain but managed independently.",
      },
    ],
  },
  malaga: {
    population: "590,000",
    uniqueParagraph:
      "Málaga is one of Spain's fastest-growing economies and a popular destination for European expats bringing their cars to the Costa del Sol. Andalusia's 4% ITP makes importing relatively cheap from a tax point of view. The city has good connections with the Port of Algeciras (110 km away), ideal for sea imports. Málaga's airport also makes it easy for agents accompanying buyers to Germany. The large foreign-resident community (especially British and German) has produced an ecosystem of import-specialised agencies and professionals.",
    faq: [
      {
        question: "How much does it cost to import a car to Málaga from Germany?",
        answer:
          "Total cost of importing a €25,000 car from Germany to Málaga includes: transport (~€1,100), ITV (~€200), registration tax (varies with CO2, e.g. €1,200 for medium emissions), ITP if private (~€1,000), DGT (~€100) and agency (~€300). Approximate total: €2,500–4,000 on top of the car price.",
      },
      {
        question: "Are there import-specialised agencies in Málaga?",
        answer:
          "Yes — Málaga has several agencies specialised in vehicle imports, often catering to the foreign community. Many work in English and German. Search for 'gestoría importación vehículos Málaga' or ask in expat forums.",
      },
      {
        question: "Can I import a car from the UK to Málaga?",
        answer:
          "Yes, but post-Brexit UK cars are treated as non-EU imports: customs duty (6.5%), VAT (21%) and possibly individual homologation. The Port of Algeciras receives UK ships regularly. The process is more expensive and complex than EU imports.",
      },
    ],
  },
  alicante: {
    population: "335,000",
    uniqueParagraph:
      "Alicante is one of the most popular destinations for European retirees moving to Spain, many of whom want to bring their car. The Valencia region applies a 6% ITP, but lower cost of living offsets this difference. The Port of Alicante receives ships from various Mediterranean countries. The city has excellent motorway links with Madrid (A-31) and Barcelona (A-7), making land transport easy. German, Dutch and British residents represent a significant share of import demand in the area.",
    faq: [
      {
        question: "How do I import my car upon retiring and moving to Alicante?",
        answer:
          "If you retire and move your residence to Alicante, you can apply for the Cambio de Residencia exemption from registration tax if you meet the requirements: own the car for at least 6 months and apply within 60 days of establishing residence in Spain. Filed at the Tax Agency.",
      },
      {
        question: "How much is ITP in Alicante for a used car?",
        answer:
          "Alicante is in the Valencia region, with a 6% ITP. For a €20,000 fiscal value, ITP would be €1,200 — 2% higher than Madrid, though procedures and timelines are similar.",
      },
      {
        question: "Where do I pay ITP when importing in Alicante?",
        answer:
          "ITP in the Valencia region is paid at the Conselleria d'Hisenda i Model Econòmic. You can do it online with a digital certificate or in person at the Tax Office in Alicante. The form is Modelo 600.",
      },
    ],
  },
  murcia: {
    population: "460,000",
    uniqueParagraph:
      "Murcia has a growing economy and a car-import market that has expanded significantly in recent years. The Region of Murcia applies a 4% ITP, same as Madrid and Andalusia, making it tax-competitive. The city has fast access to the Port of Cartagena (45 km away), one of the largest in the western Mediterranean, with regular links to Italy, France and North Africa. Murcia is also well-connected by motorway to Madrid (A-30) and the Mediterranean coast (A-7), making road transport easy.",
    faq: [
      {
        question: "How much is ITP in Murcia for imported cars?",
        answer:
          "The Region of Murcia applies a 4% ITP on the vehicle's fiscal value. For a €20,000 fiscal value, ITP would be €800 — one of the lowest rates in Spain.",
      },
      {
        question: "Can I import a car through the Port of Cartagena?",
        answer:
          "Yes — the Port of Cartagena has facilities to receive vehicles. It's especially useful for imports from North Africa or the eastern Mediterranean. Customs clearance must be coordinated with an authorised agent.",
      },
      {
        question: "How long does registration take in Murcia?",
        answer:
          "The process in Murcia typically takes 4–7 weeks. ITV takes 1–2 weeks, taxes are paid immediately, and the DGT appointment is assigned in 3–4 weeks. A local agency can shorten the timeline.",
      },
    ],
  },
  palma: {
    population: "420,000",
    uniqueParagraph:
      "Palma de Mallorca's car-import market has unique features: as an island, all vehicles arrive by ship or plane (the latter only for small cars on special services). The Balearic Islands apply a 4% ITP, competitive with other regions. The Port of Palma and Port of Alcúdia regularly receive vehicle ships from Barcelona and Valencia. The extra cost of island sea freight (€50–200 over mainland transport) must be factored in. The island's high purchasing power sustains demand for imported premium cars.",
    faq: [
      {
        question: "How does an imported car reach Mallorca?",
        answer:
          "Imported cars arrive in Mallorca by ship from Barcelona or Valencia. Baleàrias and other shipping lines offer ro-ro service for vehicles. The extra cost of island sea freight is €50–200 on top of mainland transport.",
      },
      {
        question: "How much is ITP in the Balearics for imported cars?",
        answer:
          "The Balearic Islands apply a 4% ITP on the vehicle's fiscal value. For a €20,000 fiscal value, ITP would be €800 — among the lowest rates, same as Madrid and Andalusia.",
      },
      {
        question: "Can I drive my German car in Mallorca before registering it?",
        answer:
          "You can temporarily drive on foreign plates while you complete the paperwork, but you have 30 days from establishing residence in Spain to start registration. Missing this deadline can result in penalties.",
      },
    ],
  },
};

const RU: Record<string, CityI18n> = {
  madrid: {
    population: "3,4 млн",
    uniqueParagraph:
      "Мадрид — крупнейший рынок импорта автомобилей в Испании. Ставка ITP 4% — одна из самых низких в стране, поэтому столица — предпочтительный пункт для импорта авто среднего и премиального класса. Провинциальное управление DGT (C/ Arturo Soria 143) очень загружено — записывайтесь заранее. Станции ITV в Colmenar Viejo и Alcobendas обычно быстрее центральных. У Мадрида отличные автомобильные связи с Европой, и многие импортеры получают авто на дом из Германии за 5–7 рабочих дней.",
    faq: [
      {
        question: "Сколько ITP при импорте авто в Мадриде?",
        answer:
          "Сообщество Мадрида применяет ITP 4% от налоговой стоимости. Для авто стоимостью 20 000 € ITP составит 800 €. Одна из самых низких ставок в Испании.",
      },
      {
        question: "Где пройти ITV для импорта в Мадриде?",
        answer:
          "Можно пройти ITV на любой авторизованной станции Сообщества Мадрида. По скорости рекомендуют Colmenar Viejo, Alcobendas и Getafe. Запись онлайн на сайте Сообщества Мадрида.",
      },
      {
        question: "Сколько занимает регистрация импортированного авто в Мадриде?",
        answer:
          "Полный процесс обычно 4–6 недель. ITV — 1–2 недели, налоги — сразу, запись в DGT — 2–3 недели. Через гестору можно сократить до 3–4 недель.",
      },
    ],
  },
  barcelona: {
    population: "1,6 млн",
    uniqueParagraph:
      "Барселона — второй по объему импорта рынок Испании. ITP 5% в Каталонии чуть выше Мадрида, но логистика отличная: порт Барселоны — один из крупнейших в Средиземноморье и принимает авто со всей Европы и из-за моря. Близость к французской границе (La Jonquera в 150 км) упрощает наземный транспорт из Германии, Франции и других стран ЕС. Учитывайте: в Барселоне действует Зона низких выбросов (ZBE), ограничивающая авто с неблагоприятной экологической меткой DGT.",
    faq: [
      {
        question: "Сколько ITP в Каталонии на импортные авто?",
        answer:
          "Каталония применяет ITP 5% от налоговой стоимости. Для авто 20 000 € ITP составит 1 000 € — на 1% больше, чем в Мадриде.",
      },
      {
        question: "Как ZBE Барселоны влияет на импортные авто?",
        answer:
          "Зона низких выбросов Барселоны ограничивает авто с метками B, C, без метки или Eco в зависимости от расписания. Перед импортом проверьте метку DGT на сайте налоговой. У электромобилей и PHEV метка CERO — ограничений нет.",
      },
      {
        question: "Можно ли получить авто прямо в Барселоне?",
        answer:
          "Да, многие перевозчики доставляют до двери в Барселоне из Германии и других стран ЕС. Срок 5–10 рабочих дней. Транспорт Мюнхен–Барселона — около 900–1 200 €.",
      },
    ],
  },
  sevilla: {
    population: "690 000",
    uniqueParagraph:
      "Севилья — столица Андалусии и один из самых активных рынков импорта на юге Испании. ITP 4% — как в Мадриде. Близость порта Альхесирас (в 200 км) упрощает морской импорт из Северной Африки. Для авто из Германии или Северной Европы дешевле — наземный транспорт со сроками 4–6 дней. Провинциальное управление трафика Севильи также обслуживает всю западную Андалусию.",
    faq: [
      {
        question: "Сколько ITP в Андалусии на импортные авто?",
        answer:
          "Андалусия применяет ITP 4% от налоговой стоимости. Для авто 20 000 € ITP составит 800 € — одна из низких ставок в Испании, как в Мадриде.",
      },
      {
        question: "Где пройти ITV для импорта в Севилье?",
        answer:
          "В Севилье несколько станций ITV. Самые удобные — на SE-30 и у выездов из города. Понадобятся техпаспорт страны вылета и сертификат соответствия (COC).",
      },
      {
        question: "Можно ли импортировать авто из Марокко в Севилью?",
        answer:
          "Технически да, но Марокко вне ЕС: пошлина (6,5%), НДС (21%) и возможна индивидуальная омологация. Процесс сложнее и дороже импорта из ЕС. Используйте специализированную гестору.",
      },
    ],
  },
  valencia: {
    population: "800 000",
    uniqueParagraph:
      "Валенсия — третий город Испании и один из главных пунктов входа импортных авто благодаря порту, крупнейшему в Испании по автоперевозкам. ITP в регионе Валенсии — 6%, чуть выше Мадрида и Андалусии, но логистические преимущества порта компенсируют разницу для тех, кто везёт авто из Японии, Кореи или ОАЭ. В Валенсии также действует Зона низких выбросов — проверяйте метку DGT перед покупкой.",
    faq: [
      {
        question: "Сколько ITP в регионе Валенсии?",
        answer:
          "Регион применяет ITP 6% от налоговой стоимости. Для авто 20 000 € ITP составит 1 200 € — на 2% больше Мадрида или Андалусии.",
      },
      {
        question: "Можно ли импортировать авто через порт Валенсии?",
        answer:
          "Да, порт Валенсии — главный порт Испании для импорта авто. Специализированные терминалы обрабатывают тысячи авто в месяц. Особенно удобно для импорта из Японии, Кореи и ОАЭ.",
      },
      {
        question: "Какие электромобили популярны для импорта в Валенсии?",
        answer:
          "Популярны Tesla Model 3 и Model Y из Германии, BMW i4, Mercedes EQC, Volkswagen ID.4. Электромобили освобождены от регистрационного налога, что заметно снижает общую стоимость импорта.",
      },
    ],
  },
  zaragoza: {
    population: "680 000",
    uniqueParagraph:
      "Сарагоса стратегически расположена на оси Мадрид–Барселона–Париж — естественный транзитный пункт для авто из Франции и Германии. Арагон применяет ITP 4%, как Мадрид. В городе работает «сухой порт» Zaragoza (PLAZA) — один из крупнейших логистических хабов Европы. Также здесь находится завод Stellantis (бывший Opel), что формирует устойчивую автомобильную культуру региона.",
    faq: [
      {
        question: "Сколько ITP в Арагоне на импортные авто?",
        answer:
          "Арагон применяет ITP 4% от налоговой стоимости. Для авто 20 000 € — 800 €. Одна из самых низких ставок Испании.",
      },
      {
        question: "Сколько стоит транспорт из Германии в Сарагосу?",
        answer:
          "Из Мюнхена/Франкфурта в Сарагосу грузовиком — 900–1 300 €. Транзит 3–5 рабочих дней. Многие перевозчики делают остановки в Сарагосе по маршруту Мадрид–Барселона.",
      },
      {
        question: "Хорошие ли ITV для импорта в Сарагосе?",
        answer:
          "Да, в Сарагосе есть авторизованные ITV для импорта. Очереди обычно меньше, чем в Мадриде или Барселоне. Запись онлайн на сайте правительства Арагона.",
      },
    ],
  },
  bilbao: {
    population: "350 000",
    uniqueParagraph:
      "Бильбао и Страна Басков — один из самых высоких уровней дохода в Испании, отсюда высокий спрос на премиум-импорт. ITP 4% — как в Мадриде. Близость к французской границе (Irún в 100 км) и порт Бильбао (регулярные линии из Великобритании) делают город важным пунктом входа. В Стране Басков налоги ведут провинциальные казначейства (не центральная налоговая) — процедуры немного отличаются. Рекомендуется местная гестория.",
    faq: [
      {
        question: "Сколько ITP в Стране Басков на импортные авто?",
        answer:
          "Страна Басков применяет ITP 4% от налоговой стоимости. Управление — Провинциальные казначейства Алавы, Бискайи и Гипускоа. Процесс отличается, лучше с местной гесторией.",
      },
      {
        question: "Можно ли импортировать через порт Бильбао?",
        answer:
          "Да, в порту Бильбао регулярные ro-ro линии из Великобритании (Portsmouth, Plymouth) и других портов Европы. Отличный вариант для импорта из UK после Brexit.",
      },
      {
        question: "Как работает форальный ITP в Стране Басков?",
        answer:
          "ITP (ITPAJD) платится в Провинциальное казначейство по месту жительства: Бискайя (Бильбао), Гипускоа (Сан-Себастьян) или Алава (Витория). Форма и процедура схожи с остальной Испанией, но управление независимое.",
      },
    ],
  },
  malaga: {
    population: "590 000",
    uniqueParagraph:
      "Малага — один из самых быстрорастущих городов Испании и популярное место для европейских экспатов на Коста-дель-Соль. ITP Андалусии 4% делает импорт относительно дешёвым с точки зрения налогов. Хорошая связь с портом Альхесирас (в 110 км) — удобно для морского импорта. Аэропорт Малаги облегчает перелёты гесторов с покупателями в Германию. Большое сообщество иностранных резидентов (особенно британцев и немцев) сформировало экосистему специализированных гесторов.",
    faq: [
      {
        question: "Сколько стоит импорт авто из Германии в Малагу?",
        answer:
          "Полная стоимость импорта авто 25 000 € из Германии в Малагу: транспорт (~1 100 €), ITV (~200 €), регистрационный налог (зависит от CO2, например 1 200 € при средних выбросах), ITP при покупке у частника (~1 000 €), DGT (~100 €) и гестория (~300 €). Итого ~2 500–4 000 € сверх цены авто.",
      },
      {
        question: "Есть ли в Малаге специализированные гестории для импорта?",
        answer:
          "Да, в Малаге несколько гесторов специализируются на импорте авто, особенно для иностранцев. Многие работают на английском и немецком. Ищите 'gestoría importación vehículos Málaga' или спрашивайте на форумах экспатов.",
      },
      {
        question: "Можно ли импортировать авто из Великобритании в Малагу?",
        answer:
          "Да, но после Brexit британские авто — внеЕС-импорт: пошлина (6,5%), НДС (21%) и возможная индивидуальная омологация. Порт Альхесирас регулярно принимает суда из UK. Процесс дороже и сложнее ЕС-импорта.",
      },
    ],
  },
  alicante: {
    population: "335 000",
    uniqueParagraph:
      "Аликанте — одно из самых популярных направлений для европейских пенсионеров, многие хотят привезти своё авто. ITP региона Валенсии 6%, но более низкая стоимость жизни компенсирует разницу. Порт Аликанте принимает суда из стран Средиземноморья. Отличные автомагистрали в Мадрид (A-31) и Барселону (A-7) упрощают наземный транспорт. Немцы, голландцы и британцы составляют значительную часть спроса на импорт.",
    faq: [
      {
        question: "Как импортировать авто при переезде в Аликанте на пенсию?",
        answer:
          "При смене резидентства в Аликанте можно применить освобождение «Cambio de Residencia» от регистрационного налога: владение авто не менее 6 месяцев и заявление в первые 60 дней после установления резидентства. Подаётся в налоговую.",
      },
      {
        question: "Сколько ITP в Аликанте для подержанного авто?",
        answer:
          "Аликанте — регион Валенсии, ITP 6%. Для авто 20 000 € — 1 200 €. На 2% выше Мадрида, но процесс и сроки схожи.",
      },
      {
        question: "Где платить ITP при импорте в Аликанте?",
        answer:
          "ITP в регионе Валенсии — в Conselleria d'Hisenda i Model Econòmic. Онлайн с цифровым сертификатом или лично в офисе налоговой Аликанте. Форма — Modelo 600.",
      },
    ],
  },
  murcia: {
    population: "460 000",
    uniqueParagraph:
      "Мурсия — растущая экономика и заметно расширяющийся рынок импорта авто. Регион Мурсии применяет ITP 4%, как Мадрид и Андалусия — выгодно по налогам. Быстрый доступ к порту Картахены (в 45 км) — одного из крупнейших портов западного Средиземноморья с регулярными линиями в Италию, Францию и Северную Африку. Хорошая связь по A-30 с Мадридом и A-7 с побережьем.",
    faq: [
      {
        question: "Сколько ITP в Мурсии на импортные авто?",
        answer:
          "Регион Мурсии применяет ITP 4% от налоговой стоимости. Для авто 20 000 € — 800 €. Одна из самых низких ставок в Испании.",
      },
      {
        question: "Можно ли импортировать через порт Картахены?",
        answer:
          "Да, в порту Картахены есть инфраструктура. Особенно удобно для импорта из Северной Африки и восточного Средиземноморья. Таможню согласовать с лицензированным агентом.",
      },
      {
        question: "Сколько занимает регистрация в Мурсии?",
        answer:
          "Обычно 4–7 недель. ITV — 1–2 недели, налоги — сразу, запись DGT — 3–4 недели. Местная гестория ускоряет процесс.",
      },
    ],
  },
  palma: {
    population: "420 000",
    uniqueParagraph:
      "У Пальмы-де-Мальорки уникальный рынок импорта: остров, поэтому всё прибывает по морю или (редко, для небольших авто) по воздуху. На Балеарах ITP 4% — конкурентная ставка. Порты Пальмы и Алькудии регулярно принимают суда из Барселоны и Валенсии. Стоимость островного фрахта (50–200 € сверх материкового транспорта) учитывайте в общей стоимости. Высокая покупательная способность поддерживает спрос на премиум.",
    faq: [
      {
        question: "Как импортированное авто попадает на Майорку?",
        answer:
          "Авто прибывает по морю из Барселоны или Валенсии. Baleàrias и другие операторы предлагают ro-ro. Островной фрахт — 50–200 € сверх материкового транспорта.",
      },
      {
        question: "Сколько ITP на Балеарах на импортные авто?",
        answer:
          "Балеары применяют ITP 4% от налоговой стоимости. Для авто 20 000 € — 800 €. Одна из самых низких ставок, как в Мадриде и Андалусии.",
      },
      {
        question: "Можно ли ездить на немецком авто на Майорке до регистрации?",
        answer:
          "Можно временно с иностранными номерами при оформлении, но 30 дней с момента установления резидентства — крайний срок для начала регистрации. Просрочка — штрафы.",
      },
    ],
  },
};

const DE: Record<string, CityI18n> = {
  madrid: {
    population: "3,4 Millionen",
    uniqueParagraph:
      "Madrid ist Spaniens größter Markt für Auto-Importe. Mit 4% ITP zählt die Hauptstadt zu den günstigsten Regionen — bevorzugt für Importe der Mittel- und Oberklasse. Das Provinz-Verkehrsamt (C/ Arturo Soria 143) ist stark frequentiert — Termine rechtzeitig buchen. ITV-Stationen in Colmenar Viejo und Alcobendas sind oft schneller als in der Innenstadt. Madrid hat hervorragende Straßenverbindungen nach Europa, und viele Importeure erhalten ihr Auto in 5–7 Werktagen direkt aus Deutschland.",
    faq: [
      {
        question: "Wie hoch ist die ITP für den Auto-Import in Madrid?",
        answer:
          "Die Region Madrid erhebt 4% ITP auf den Steuerwert. Bei einem Steuerwert von 20.000 € sind das 800 €. Einer der niedrigsten Sätze Spaniens.",
      },
      {
        question: "Wo mache ich die Import-ITV in Madrid?",
        answer:
          "Die Import-ITV ist an jeder zugelassenen Station der Region Madrid möglich. Schnell sind meist Colmenar Viejo, Alcobendas und Getafe. Termine online über die Webseite der Region Madrid.",
      },
      {
        question: "Wie lange dauert die Zulassung eines importierten Autos in Madrid?",
        answer:
          "Insgesamt 4–6 Wochen. ITV 1–2 Wochen, Steuern sofort, DGT-Termin meist 2–3 Wochen. Mit einer Gestoría auf 3–4 Wochen verkürzbar.",
      },
    ],
  },
  barcelona: {
    population: "1,6 Millionen",
    uniqueParagraph:
      "Barcelona ist Spaniens zweitgrößter Markt für Fahrzeugimporte. Mit 5% ITP in Katalonien etwas teurer als Madrid, aber hervorragende Logistik: Der Hafen Barcelona ist einer der größten am Mittelmeer und nimmt Fahrzeuge aus ganz Europa und Übersee auf. Nähe zur französischen Grenze (La Jonquera 150 km) erleichtert den Landtransport aus Deutschland, Frankreich und der EU. Beachten: Barcelona hat eine Umweltzone (ZBE), die Fahrzeuge mit ungünstiger DGT-Plakette einschränkt — Plakette vor dem Kauf prüfen.",
    faq: [
      {
        question: "Wie hoch ist die ITP in Katalonien für importierte Autos?",
        answer:
          "Katalonien erhebt 5% ITP auf den Steuerwert. Bei 20.000 € sind das 1.000 € — 1% mehr als Madrid.",
      },
      {
        question: "Wie wirkt sich die Umweltzone Barcelonas auf importierte Autos aus?",
        answer:
          "Die ZBE Barcelona schränkt Fahrzeuge mit B-, C-, ohne- oder Eco-Plakette zeitweise ein. Vor dem Import die DGT-Plakette auf der Webseite der Steuerbehörde prüfen. E-Autos und Plug-in-Hybride mit CERO-Plakette fahren frei.",
      },
      {
        question: "Kann mein importiertes Auto direkt in Barcelona zugestellt werden?",
        answer:
          "Ja — viele Speditionen liefern bis vor die Tür in Barcelona aus Deutschland und anderen EU-Ländern. Lieferzeit meist 5–10 Werktage. Transport München–Barcelona ca. 900–1.200 €.",
      },
    ],
  },
  sevilla: {
    population: "690.000",
    uniqueParagraph:
      "Sevilla ist die Hauptstadt Andalusiens und einer der aktivsten Importmärkte im Süden Spaniens. Mit 4% ITP — wie Madrid — bietet Andalusien sehr wettbewerbsfähige Steuerbedingungen. Die Nähe zum Hafen Algeciras (200 km) erleichtert Seeimporte aus Nordafrika. Aus Deutschland oder Nordeuropa ist meist der Straßentransport am günstigsten (4–6 Tage Lieferzeit). Das Provinz-Verkehrsamt Sevilla bedient ganz Westandalusien.",
    faq: [
      {
        question: "Wie hoch ist die ITP in Andalusien für importierte Autos?",
        answer:
          "Andalusien erhebt 4% ITP auf den Steuerwert. Bei 20.000 € sind das 800 € — wie in Madrid einer der niedrigsten Sätze Spaniens.",
      },
      {
        question: "Wo macht man die Import-ITV in Sevilla?",
        answer:
          "In Sevilla gibt es mehrere ITV-Stationen für die Import-Inspektion. Am erreichbarsten an der SE-30 und an den Stadtausfahrten. Benötigt: Fahrzeugschein des Herkunftslandes und COC.",
      },
      {
        question: "Kann ich ein Auto aus Marokko nach Sevilla importieren?",
        answer:
          "Technisch ja, aber Marokko ist Nicht-EU: Zoll (6,5%), MwSt. (21%) und ggf. Einzelabnahme. Aufwendiger und teurer als EU-Import — spezialisierte Gestoría empfohlen.",
      },
    ],
  },
  valencia: {
    population: "800.000",
    uniqueParagraph:
      "Valencia ist Spaniens drittgrößte Stadt und einer der wichtigsten Einlassorte für importierte Fahrzeuge — der Hafen ist Spaniens verkehrsstärkster für Autos. Die ITP der Region Valencia liegt bei 6%, etwas höher als Madrid oder Andalusien, aber die Logistikvorteile gleichen das oft aus, vor allem bei Seeimporten aus Japan, Korea oder den VAE. Valencia hat ebenfalls eine Umweltzone für Fahrzeuge mit hohen CO2-Werten — DGT-Plakette vor dem Kauf prüfen.",
    faq: [
      {
        question: "Wie hoch ist die ITP in der Region Valencia?",
        answer:
          "Die Region Valencia erhebt 6% ITP auf den Steuerwert. Bei 20.000 € sind das 1.200 € — 2% mehr als Madrid oder Andalusien.",
      },
      {
        question: "Kann ich ein Auto über den Hafen Valencia importieren?",
        answer:
          "Ja — der Hafen Valencia ist Spaniens wichtigster Hafen für Auto-Importe mit spezialisierten Auto-Terminals. Besonders sinnvoll für Importe aus Japan, Korea und den VAE.",
      },
      {
        question: "Welche Elektroautos sind in Valencia beliebt zum Importieren?",
        answer:
          "Beliebt: Tesla Model 3 und Model Y aus Deutschland, BMW i4, Mercedes EQC, Volkswagen ID.4. Da elektrisch, sind sie von der Zulassungssteuer befreit — der Gesamtimport wird deutlich günstiger.",
      },
    ],
  },
  zaragoza: {
    population: "680.000",
    uniqueParagraph:
      "Zaragoza liegt strategisch auf der Achse Madrid–Barcelona–Paris — natürlicher Transitpunkt für Auto-Importe aus Frankreich und Deutschland. Aragonien erhebt 4% ITP, wie Madrid, also steuerlich wettbewerbsfähig. Mit dem Trockenhafen Zaragoza (PLAZA) liegt einer der größten Logistik-Hubs Europas vor Ort. Auch die Stellantis-Werke (ehemals Opel) prägen die Auto-Kultur der Region.",
    faq: [
      {
        question: "Wie hoch ist die ITP in Aragonien für importierte Autos?",
        answer:
          "Aragonien erhebt 4% ITP auf den Steuerwert. Bei 20.000 € sind das 800 € — einer der niedrigsten Sätze Spaniens.",
      },
      {
        question: "Wie viel kostet der Transport von Deutschland nach Zaragoza?",
        answer:
          "Aus München oder Frankfurt nach Zaragoza per LKW: 900–1.300 €. Transit 3–5 Werktage. Viele Speditionen halten in Zaragoza auf der Route Madrid–Barcelona.",
      },
      {
        question: "Gibt es gute ITV-Stationen für Importe in Zaragoza?",
        answer:
          "Ja — Zaragoza hat mehrere zugelassene ITV-Stationen für Import-Prüfungen. Wartezeiten sind meist kürzer als in Madrid oder Barcelona. Termine online über die Regierung Aragoniens.",
      },
    ],
  },
  bilbao: {
    population: "350.000",
    uniqueParagraph:
      "Bilbao und das Baskenland zählen zu Spaniens einkommensstärksten Regionen — entsprechend hoch die Nachfrage nach importierten Premium-Autos. Die baskische ITP liegt bei 4%, wie Madrid. Die Nähe zur französischen Grenze (Irún 100 km) und der Hafen Bilbao mit regelmäßigen UK-Linien machen Bilbao zu einem wichtigen Eintrittspunkt. Im Baskenland verwalten die Provinzkassen die Steuern (nicht die zentrale Steuerbehörde) — die Verfahren unterscheiden sich leicht. Eine lokale Gestoría mit Foralrecht-Kenntnissen ist sehr empfehlenswert.",
    faq: [
      {
        question: "Wie hoch ist die ITP im Baskenland für importierte Autos?",
        answer:
          "Das Baskenland erhebt 4% ITP auf den Steuerwert, verwaltet von den Provinzkassen Álava, Bizkaia und Gipuzkoa. Verfahren weicht vom Rest Spaniens ab — lokale Gestoría empfohlen.",
      },
      {
        question: "Kann ich ein Auto über den Hafen Bilbao importieren?",
        answer:
          "Ja — der Hafen Bilbao hat regelmäßige Ro-Ro-Linien aus Großbritannien (Portsmouth, Plymouth) sowie Verbindungen zu anderen europäischen Häfen. Hervorragend für UK-Importe nach dem Brexit.",
      },
      {
        question: "Wie funktioniert die Foral-ITP im Baskenland?",
        answer:
          "Die ITP (ITPAJD) wird in der Foralkasse des Wohnsitzes gezahlt: Bizkaia (Bilbao), Gipuzkoa (San Sebastián) oder Álava (Vitoria). Formular und Verfahren ähnlich wie im Rest Spaniens, aber unabhängig verwaltet.",
      },
    ],
  },
  malaga: {
    population: "590.000",
    uniqueParagraph:
      "Málaga ist eine der wirtschaftsstärksten Wachstumsregionen Spaniens und ein beliebtes Ziel europäischer Expats an der Costa del Sol. Mit 4% ITP in Andalusien ist der Import steuerlich relativ günstig. Gute Anbindung zum Hafen Algeciras (110 km) — ideal für Seeimporte. Auch der Flughafen Málaga erleichtert die Anreise von Vermittlern. Die große Auslandsgemeinde (vor allem Briten und Deutsche) hat ein Ökosystem importspezialisierter Gestorías hervorgebracht.",
    faq: [
      {
        question: "Wie viel kostet ein Auto-Import aus Deutschland nach Málaga?",
        answer:
          "Gesamtkosten Import eines 25.000-€-Autos aus Deutschland nach Málaga: Transport (~1.100 €), ITV (~200 €), Zulassungssteuer (CO2-abhängig, z. B. 1.200 € bei mittleren Emissionen), ITP bei Privatkauf (~1.000 €), DGT (~100 €) und Gestoría (~300 €). Insgesamt ~2.500–4.000 € zusätzlich zum Fahrzeugpreis.",
      },
      {
        question: "Gibt es in Málaga importspezialisierte Gestorías?",
        answer:
          "Ja — Málaga hat mehrere Gestorías mit Spezialisierung auf Fahrzeugimporte, oft auf die Auslandsgemeinde ausgerichtet. Viele arbeiten Englisch und Deutsch. Suche nach 'gestoría importación vehículos Málaga' oder Expat-Foren.",
      },
      {
        question: "Kann ich ein Auto aus Großbritannien nach Málaga importieren?",
        answer:
          "Ja, aber UK-Autos gelten seit Brexit als Nicht-EU-Importe: Zoll (6,5%), MwSt. (21%) und ggf. Einzelabnahme. Der Hafen Algeciras nimmt UK-Schiffe regelmäßig auf — aufwendiger und teurer als EU-Importe.",
      },
    ],
  },
  alicante: {
    population: "335.000",
    uniqueParagraph:
      "Alicante ist eines der beliebtesten Ziele europäischer Rentner in Spanien, viele möchten ihr Auto mitbringen. Die Region Valencia erhebt 6% ITP, doch die niedrigen Lebenshaltungskosten gleichen den Unterschied aus. Der Hafen Alicante empfängt Schiffe aus mehreren Mittelmeerländern. Hervorragende Autobahn-Anbindung an Madrid (A-31) und Barcelona (A-7). Deutsche, niederländische und britische Einwohner machen einen großen Teil der Importnachfrage aus.",
    faq: [
      {
        question: "Wie importiere ich mein Auto bei Renteneintritt nach Alicante?",
        answer:
          "Bei Wohnsitzwechsel nach Alicante kann die Befreiung 'Cambio de Residencia' beantragt werden: Eigentum am Auto seit mindestens 6 Monaten und Antrag innerhalb von 60 Tagen nach Wohnsitznahme in Spanien. Bei der Steuerbehörde einzureichen.",
      },
      {
        question: "Wie hoch ist die ITP in Alicante für einen Gebrauchtwagen?",
        answer:
          "Alicante gehört zur Region Valencia mit 6% ITP. Bei 20.000 € Steuerwert: 1.200 € — 2% mehr als Madrid, Verfahren und Fristen ähnlich.",
      },
      {
        question: "Wo zahle ich die ITP beim Import in Alicante?",
        answer:
          "ITP in der Region Valencia wird in der Conselleria d'Hisenda i Model Econòmic gezahlt — online mit digitalem Zertifikat oder vor Ort beim Finanzamt Alicante. Formular: Modelo 600.",
      },
    ],
  },
  murcia: {
    population: "460.000",
    uniqueParagraph:
      "Murcia hat eine wachsende Wirtschaft und einen in den letzten Jahren stark gewachsenen Importmarkt. Die Region Murcia erhebt 4% ITP, wie Madrid und Andalusien — steuerlich attraktiv. Schneller Zugang zum Hafen Cartagena (45 km), einem der größten am westlichen Mittelmeer mit regelmäßigen Linien nach Italien, Frankreich und Nordafrika. Gute Autobahn-Anbindung Madrid (A-30) und Mittelmeerküste (A-7).",
    faq: [
      {
        question: "Wie hoch ist die ITP in Murcia für importierte Autos?",
        answer:
          "Die Region Murcia erhebt 4% ITP auf den Steuerwert. Bei 20.000 € sind das 800 € — einer der niedrigsten Sätze Spaniens.",
      },
      {
        question: "Kann man ein Auto über den Hafen Cartagena importieren?",
        answer:
          "Ja — der Hafen Cartagena hat Anlagen für Fahrzeuge. Besonders sinnvoll für Importe aus Nordafrika oder dem östlichen Mittelmeer. Zollabwicklung über autorisierten Agenten koordinieren.",
      },
      {
        question: "Wie lange dauert die Zulassung in Murcia?",
        answer:
          "Insgesamt 4–7 Wochen. ITV 1–2 Wochen, Steuern sofort, DGT-Termin 3–4 Wochen. Lokale Gestoría kann den Ablauf verkürzen.",
      },
    ],
  },
  palma: {
    population: "420.000",
    uniqueParagraph:
      "Der Importmarkt von Palma de Mallorca hat Besonderheiten: Als Insel kommen alle Fahrzeuge per Schiff oder (selten, bei kleinen Autos) per Flugzeug. Die Balearen erheben 4% ITP — wettbewerbsfähig. Die Häfen Palma und Alcúdia empfangen regelmäßig Fahrzeugschiffe aus Barcelona und Valencia. Zusätzliche Inselfracht (50–200 € auf den Festlandtransport) berücksichtigen. Hohe Kaufkraft hält die Nachfrage nach importierten Premium-Autos hoch.",
    faq: [
      {
        question: "Wie kommt ein importiertes Auto nach Mallorca?",
        answer:
          "Importierte Autos kommen per Schiff aus Barcelona oder Valencia. Baleàrias und andere Reedereien bieten Ro-Ro für Fahrzeuge an. Inselfracht: 50–200 € zusätzlich zum Festlandtransport.",
      },
      {
        question: "Wie hoch ist die ITP auf den Balearen für importierte Autos?",
        answer:
          "Die Balearen erheben 4% ITP auf den Steuerwert. Bei 20.000 € sind das 800 € — wie Madrid und Andalusien einer der niedrigsten Sätze.",
      },
      {
        question: "Darf ich mein deutsches Auto auf Mallorca vor der Zulassung fahren?",
        answer:
          "Vorübergehend mit ausländischen Kennzeichen während der Abwicklung möglich, aber innerhalb von 30 Tagen nach Wohnsitznahme in Spanien muss die Zulassung beginnen. Sonst drohen Sanktionen.",
      },
    ],
  },
};

const FR: Record<string, CityI18n> = {
  madrid: {
    population: "3,4 millions",
    uniqueParagraph:
      "Madrid est le plus grand marché d'import auto d'Espagne. Son ITP de 4% est l'un des plus bas du pays — destination préférée pour les importations milieu-haut de gamme. La préfecture provinciale de circulation (C/ Arturo Soria 143) est très chargée — réservez à l'avance. Les centres ITV de Colmenar Viejo et Alcobendas sont souvent plus rapides que ceux du centre. Madrid bénéficie d'excellentes liaisons routières avec l'Europe, et beaucoup d'importateurs reçoivent leur voiture chez eux depuis l'Allemagne en 5–7 jours ouvrés.",
    faq: [
      {
        question: "Quel est l'ITP pour importer une voiture à Madrid ?",
        answer:
          "La Communauté de Madrid applique 4% d'ITP sur la valeur fiscale. Pour 20 000 € de valeur fiscale, cela fait 800 € — l'un des taux les plus bas d'Espagne.",
      },
      {
        question: "Où passer l'ITV d'importation à Madrid ?",
        answer:
          "L'ITV d'importation se passe dans tout centre agréé de la Communauté de Madrid. Les plus rapides sont Colmenar Viejo, Alcobendas et Getafe. Réservation en ligne sur le site de la Communauté.",
      },
      {
        question: "Combien de temps prend l'immatriculation d'une voiture importée à Madrid ?",
        answer:
          "Le processus complet prend 4–6 semaines. ITV 1–2 semaines, taxes immédiates, rendez-vous DGT 2–3 semaines. Une gestoría peut réduire à 3–4 semaines.",
      },
    ],
  },
  barcelona: {
    population: "1,6 millions",
    uniqueParagraph:
      "Barcelone est le deuxième marché d'import auto d'Espagne. Avec 5% d'ITP en Catalogne, les coûts sont légèrement supérieurs à Madrid mais la logistique est excellente : le port de Barcelone est l'un des plus grands de Méditerranée, recevant véhicules d'Europe et d'outre-mer. La proximité de la frontière française (La Jonquera à 150 km) facilite le transport routier depuis l'Allemagne, la France et le reste de l'UE. Attention : Barcelone a une Zone à Faibles Émissions (ZBE) qui restreint les véhicules à étiquette DGT défavorable — vérifiez l'étiquette environnementale avant l'achat.",
    faq: [
      {
        question: "Quel est l'ITP en Catalogne pour les voitures importées ?",
        answer:
          "La Catalogne applique 5% d'ITP sur la valeur fiscale. Pour 20 000 € : 1 000 € — 1% de plus qu'à Madrid.",
      },
      {
        question: "Comment la ZBE de Barcelone affecte-t-elle les voitures importées ?",
        answer:
          "La ZBE restreint les véhicules à étiquette B, C, sans étiquette ou Eco selon les horaires. Avant l'import, vérifiez l'étiquette DGT sur le site de l'agence fiscale. Les VE et hybrides rechargeables ont l'étiquette CERO et circulent librement.",
      },
      {
        question: "Puis-je faire livrer ma voiture importée directement à Barcelone ?",
        answer:
          "Oui — beaucoup de transporteurs livrent à domicile à Barcelone depuis l'Allemagne et d'autres pays UE. Délai 5–10 jours ouvrés. Munich–Barcelone coûte ~900–1 200 €.",
      },
    ],
  },
  sevilla: {
    population: "690 000",
    uniqueParagraph:
      "Séville est la capitale de l'Andalousie et l'un des marchés d'import les plus actifs du sud de l'Espagne. Avec 4% d'ITP — comme Madrid — l'Andalousie offre des conditions très compétitives. Le port d'Algésiras (à 200 km) facilite les imports maritimes depuis l'Afrique du Nord. Pour les voitures d'Allemagne ou du nord de l'Europe, le transport routier est généralement le moins cher (4–6 jours de livraison). La préfecture de Séville sert aussi toute l'ouest de l'Andalousie.",
    faq: [
      {
        question: "Quel est l'ITP en Andalousie pour les voitures importées ?",
        answer:
          "L'Andalousie applique 4% d'ITP sur la valeur fiscale. Pour 20 000 € : 800 €. L'un des taux les plus bas, comme Madrid.",
      },
      {
        question: "Où passer l'ITV d'importation à Séville ?",
        answer:
          "Plusieurs centres ITV à Séville, surtout sur la SE-30 et aux principales sorties. Il faut la fiche technique du pays d'origine et le COC.",
      },
      {
        question: "Puis-je importer une voiture du Maroc à Séville ?",
        answer:
          "Techniquement oui, mais les voitures marocaines sont hors UE : droits (6,5%), TVA (21%) et homologation individuelle possible. Plus complexe et cher qu'un import UE — gestoría spécialisée recommandée.",
      },
    ],
  },
  valencia: {
    population: "800 000",
    uniqueParagraph:
      "Valence est la troisième ville d'Espagne et un des principaux points d'entrée des véhicules importés grâce à son port — le plus important d'Espagne pour le trafic auto. L'ITP de la Région de Valence est de 6%, un peu plus que Madrid ou l'Andalousie, mais les avantages logistiques compensent souvent, surtout pour les imports du Japon, de Corée ou des EAU par voie maritime. Valence a aussi une ZBE pour les véhicules à fortes émissions — vérifiez l'étiquette DGT avant l'achat.",
    faq: [
      {
        question: "Quel est l'ITP dans la Région de Valence ?",
        answer:
          "La Région applique 6% d'ITP sur la valeur fiscale. Pour 20 000 € : 1 200 € — 2% de plus que Madrid ou l'Andalousie.",
      },
      {
        question: "Puis-je importer une voiture par le port de Valence ?",
        answer:
          "Oui — le port de Valence est le principal port d'Espagne pour l'import auto, avec terminaux spécialisés traitant des milliers de voitures par mois. Idéal pour Japon, Corée, EAU.",
      },
      {
        question: "Quelles voitures électriques sont populaires à importer à Valence ?",
        answer:
          "Populaires : Tesla Model 3 et Y depuis l'Allemagne, BMW i4, Mercedes EQC, Volkswagen ID.4. Étant électriques, exonérées de la taxe d'immatriculation — coût total d'import nettement réduit.",
      },
    ],
  },
  zaragoza: {
    population: "680 000",
    uniqueParagraph:
      "Saragosse occupe une position stratégique sur la carte logistique espagnole : exactement sur l'axe Madrid–Barcelone–Paris, point de transit naturel pour les imports d'Allemagne et de France. L'Aragon applique 4% d'ITP, comme Madrid — fiscalement compétitif. La ville abrite le Port Sec de Saragosse (PLAZA), l'un des plus grands hubs logistiques d'Europe, où l'on stocke et prépare les véhicules avant immatriculation. Saragosse héberge aussi l'usine Stellantis (ex-Opel) — culture automobile bien ancrée.",
    faq: [
      {
        question: "Quel est l'ITP en Aragon pour les voitures importées ?",
        answer:
          "L'Aragon applique 4% d'ITP. Pour 20 000 € : 800 € — l'un des taux les plus bas d'Espagne.",
      },
      {
        question: "Combien coûte le transport d'Allemagne à Saragosse ?",
        answer:
          "Munich/Francfort vers Saragosse en camion : 900–1 300 €. Transit 3–5 jours ouvrés. Beaucoup de transporteurs s'arrêtent à Saragosse sur la route Madrid–Barcelone.",
      },
      {
        question: "Y a-t-il de bons centres ITV pour l'import à Saragosse ?",
        answer:
          "Oui — plusieurs centres ITV agréés. Les attentes sont en général plus courtes qu'à Madrid ou Barcelone. Réservation en ligne sur le site du Gouvernement d'Aragon.",
      },
    ],
  },
  bilbao: {
    population: "350 000",
    uniqueParagraph:
      "Bilbao et le Pays basque comptent parmi les revenus par habitant les plus élevés d'Espagne — d'où une forte demande de premium importé. L'ITP basque est de 4%, comme Madrid. La proximité de la frontière française (Irún à 100 km) et le port de Bilbao (lignes régulières depuis le Royaume-Uni) en font un point d'entrée majeur. Au Pays basque, les impôts sont gérés par les Trésors provinciaux (et non par l'agence centrale) — procédures légèrement différentes. Une gestoría locale connaissant le droit foral est très recommandée.",
    faq: [
      {
        question: "Quel est l'ITP au Pays basque pour les voitures importées ?",
        answer:
          "Le Pays basque applique 4% d'ITP sur la valeur fiscale, géré par les Trésors d'Álava, de Bizkaia et de Gipuzkoa. Procédure différente du reste de l'Espagne — gestoría locale recommandée.",
      },
      {
        question: "Puis-je importer une voiture par le port de Bilbao ?",
        answer:
          "Oui — lignes ro-ro régulières depuis le Royaume-Uni (Portsmouth, Plymouth) et autres ports européens. Excellent pour l'import depuis le UK post-Brexit.",
      },
      {
        question: "Comment fonctionne l'ITP foral au Pays basque ?",
        answer:
          "L'ITP (ITPAJD) se paie au Trésor foral correspondant à votre domicile : Bizkaia (Bilbao), Gipuzkoa (Saint-Sébastien) ou Álava (Vitoria). Formulaire et procédure similaires au reste de l'Espagne mais gestion indépendante.",
      },
    ],
  },
  malaga: {
    population: "590 000",
    uniqueParagraph:
      "Málaga est l'une des villes en plus forte croissance économique d'Espagne et une destination très prisée des expatriés européens sur la Costa del Sol. Avec 4% d'ITP en Andalousie, l'import est relativement bon marché côté fiscal. Bonnes connexions au port d'Algésiras (110 km) — idéal pour les imports maritimes. L'aéroport de Málaga facilite aussi le déplacement de gestionnaires accompagnant des acheteurs en Allemagne. La grande communauté étrangère (Britanniques, Allemands) a créé un écosystème de gestorías spécialisées.",
    faq: [
      {
        question: "Combien coûte l'import d'une voiture d'Allemagne à Málaga ?",
        answer:
          "Coût total d'import d'une voiture à 25 000 € : transport (~1 100 €), ITV (~200 €), taxe d'immatriculation (variable selon CO2, ex. 1 200 € pour émissions moyennes), ITP si privé (~1 000 €), DGT (~100 €) et gestoría (~300 €). Total ~2 500–4 000 € en plus du prix.",
      },
      {
        question: "Y a-t-il des gestorías spécialisées en import à Málaga ?",
        answer:
          "Oui — plusieurs gestorías spécialisées dans l'import, souvent orientées communauté étrangère. Beaucoup travaillent en anglais et allemand. Cherchez 'gestoría importación vehículos Málaga' ou demandez sur les forums d'expats.",
      },
      {
        question: "Puis-je importer une voiture du Royaume-Uni à Málaga ?",
        answer:
          "Oui, mais depuis le Brexit les voitures UK sont des imports hors UE : droits (6,5%), TVA (21%) et homologation individuelle possible. Le port d'Algésiras reçoit régulièrement des navires du UK — plus cher et complexe qu'un import UE.",
      },
    ],
  },
  alicante: {
    population: "335 000",
    uniqueParagraph:
      "Alicante est l'une des destinations préférées des retraités européens s'installant en Espagne, beaucoup veulent emmener leur voiture. La Région de Valence applique 6% d'ITP, mais le coût de la vie plus bas compense. Le port d'Alicante reçoit des navires de plusieurs pays méditerranéens. Excellentes liaisons par autoroute Madrid (A-31) et Barcelone (A-7). Les résidents allemands, néerlandais et britanniques représentent une part importante de la demande d'import.",
    faq: [
      {
        question: "Comment importer ma voiture en partant à la retraite à Alicante ?",
        answer:
          "Lors d'un transfert de résidence à Alicante, vous pouvez demander l'exonération 'Cambio de Residencia' de la taxe d'immatriculation : possession du véhicule ≥ 6 mois et demande dans les 60 jours suivant l'établissement de la résidence en Espagne. Démarche à l'agence fiscale.",
      },
      {
        question: "Quel est l'ITP à Alicante pour une voiture d'occasion ?",
        answer:
          "Alicante est dans la Région de Valence (ITP 6%). Pour 20 000 € : 1 200 € — 2% de plus qu'à Madrid, procédures et délais similaires.",
      },
      {
        question: "Où payer l'ITP en important à Alicante ?",
        answer:
          "L'ITP de la Région de Valence se paie à la Conselleria d'Hisenda i Model Econòmic — en ligne avec certificat numérique ou en personne au bureau des impôts d'Alicante. Formulaire : Modelo 600.",
      },
    ],
  },
  murcia: {
    population: "460 000",
    uniqueParagraph:
      "Murcie a une économie en croissance et un marché d'import auto qui s'est nettement développé. La Région de Murcie applique 4% d'ITP, comme Madrid et l'Andalousie — fiscalement intéressant. Accès rapide au port de Carthagène (à 45 km), l'un des plus grands de Méditerranée occidentale, avec lignes régulières vers l'Italie, la France et l'Afrique du Nord. Bonnes liaisons par autoroute avec Madrid (A-30) et la côte méditerranéenne (A-7).",
    faq: [
      {
        question: "Quel est l'ITP à Murcie pour les voitures importées ?",
        answer:
          "La Région de Murcie applique 4% d'ITP sur la valeur fiscale. Pour 20 000 € : 800 € — l'un des taux les plus bas d'Espagne.",
      },
      {
        question: "Peut-on importer une voiture par le port de Carthagène ?",
        answer:
          "Oui — le port de Carthagène a des installations pour véhicules. Particulièrement utile pour les imports d'Afrique du Nord ou de Méditerranée orientale. Le dédouanement doit être coordonné avec un agent agréé.",
      },
      {
        question: "Combien de temps prend l'immatriculation à Murcie ?",
        answer:
          "Le processus dure 4–7 semaines. ITV 1–2 semaines, taxes immédiates, rendez-vous DGT 3–4 semaines. Une gestoría locale peut accélérer.",
      },
    ],
  },
  palma: {
    population: "420 000",
    uniqueParagraph:
      "Le marché d'import de Palma de Majorque a des particularités : étant insulaire, tous les véhicules arrivent par bateau ou (rarement, petites voitures) par avion. Les Baléares appliquent 4% d'ITP — compétitif. Les ports de Palma et d'Alcúdia reçoivent régulièrement des bateaux avec véhicules depuis Barcelone et Valence. Le surcoût du fret insulaire (50–200 € de plus que le transport continental) doit être pris en compte. Le pouvoir d'achat élevé maintient une demande soutenue de premium importé.",
    faq: [
      {
        question: "Comment une voiture importée arrive-t-elle à Majorque ?",
        answer:
          "Les voitures importées arrivent par bateau depuis Barcelone ou Valence. Baleàrias et autres compagnies offrent un service ro-ro. Le surcoût insulaire est de 50–200 € au-dessus du transport continental.",
      },
      {
        question: "Quel est l'ITP aux Baléares pour les voitures importées ?",
        answer:
          "Les Baléares appliquent 4% d'ITP sur la valeur fiscale. Pour 20 000 € : 800 € — parmi les taux les plus bas, comme Madrid et l'Andalousie.",
      },
      {
        question: "Puis-je conduire ma voiture allemande à Majorque avant immatriculation ?",
        answer:
          "Vous pouvez circuler temporairement avec des plaques étrangères pendant les démarches, mais vous avez 30 jours dès l'établissement de la résidence en Espagne pour démarrer l'immatriculation. Au-delà : sanctions possibles.",
      },
    ],
  },
};

export const CITIES_I18N: Record<Language, Record<string, CityI18n>> = {
  en: EN,
  es: ES,
  ru: RU,
  de: DE,
  fr: FR,
};
