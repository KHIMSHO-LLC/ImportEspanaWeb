export interface CityData {
  slug: string;
  name: string;
  regionSlug: string;
  regionName: string;
  itpRate: number;
  province: string;
  population: string;
  uniqueParagraph: string;
  faq: { question: string; answer: string }[];
  relatedCities: string[]; // slugs
}

export const CITIES: CityData[] = [
  {
    slug: "madrid",
    name: "Madrid",
    regionSlug: "madrid",
    regionName: "Comunidad de Madrid",
    itpRate: 4,
    province: "Madrid",
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
    relatedCities: ["barcelona", "zaragoza", "bilbao"],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    regionSlug: "cataluna",
    regionName: "Cataluña",
    itpRate: 5,
    province: "Barcelona",
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
    relatedCities: ["madrid", "valencia", "zaragoza"],
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    regionSlug: "andalucia",
    regionName: "Andalucía",
    itpRate: 4,
    province: "Sevilla",
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
    relatedCities: ["malaga", "madrid", "alicante"],
  },
  {
    slug: "valencia",
    name: "Valencia",
    regionSlug: "comunidad-valenciana",
    regionName: "Comunidad Valenciana",
    itpRate: 6,
    province: "Valencia",
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
    relatedCities: ["barcelona", "alicante", "murcia"],
  },
  {
    slug: "zaragoza",
    name: "Zaragoza",
    regionSlug: "aragon",
    regionName: "Aragón",
    itpRate: 4,
    province: "Zaragoza",
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
    relatedCities: ["madrid", "barcelona", "bilbao"],
  },
  {
    slug: "bilbao",
    name: "Bilbao",
    regionSlug: "pais-vasco",
    regionName: "País Vasco",
    itpRate: 4,
    province: "Vizcaya",
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
    relatedCities: ["zaragoza", "madrid", "barcelona"],
  },
  {
    slug: "malaga",
    name: "Málaga",
    regionSlug: "andalucia",
    regionName: "Andalucía",
    itpRate: 4,
    province: "Málaga",
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
    relatedCities: ["sevilla", "alicante", "madrid"],
  },
  {
    slug: "alicante",
    name: "Alicante",
    regionSlug: "comunidad-valenciana",
    regionName: "Comunidad Valenciana",
    itpRate: 6,
    province: "Alicante",
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
    relatedCities: ["valencia", "murcia", "malaga"],
  },
  {
    slug: "murcia",
    name: "Murcia",
    regionSlug: "murcia",
    regionName: "Región de Murcia",
    itpRate: 4,
    province: "Murcia",
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
    relatedCities: ["alicante", "valencia", "sevilla"],
  },
  {
    slug: "palma",
    name: "Palma",
    regionSlug: "baleares",
    regionName: "Islas Baleares",
    itpRate: 4,
    province: "Islas Baleares",
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
    relatedCities: ["barcelona", "valencia", "alicante"],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
