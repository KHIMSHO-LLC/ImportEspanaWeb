export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_DATA: Record<string, FAQItem[]> = {
  en: [
    {
      question:
        "How much is the registration tax (Impuesto de Matriculación) in Spain?",
      answer:
        "The registration tax in Spain depends on the CO2 emissions of the vehicle. It ranges from 0% (for vehicles with <120g/km CO2) up to 14.75% (for vehicles with >200g/km CO2). Our calculator uses the official BOE (Boletín Oficial del Estado) tables to determine the exact tax base value of your specific car model.",
    },
    {
      question: "Can I bring my car to Spain without paying taxes?",
      answer:
        "Yes, you can apply for an exemption from the registration tax if you are changing your residence to Spain (Cambio de Residencia). To qualify, you must have owned the car for at least 6 months before moving and apply within 60 days of arriving in Spain.",
    },
    {
      question: "What costs are involved in importing a car to Spain?",
      answer:
        "The main costs are: 1. Registration Tax (Impuesto de Matriculación), 2. Transfer Tax (ITP - usually 4-8% if buying from a private seller), 3. ITV Inspection (Technical Inspection), 4. DGT Fees (Traffic Department), 5. License Plates, and 6. Agency/Gestoría fees (optional but recommended).",
    },
    {
      question: "Do electric cars pay import tax in Spain?",
      answer:
        "Pure electric vehicles (EVs) are generally exempt from the Registration Tax (Impuesto de Matriculación) because they produce 0g/km of CO2. However, other fees like ITV, DGT registration fees, and license plates still apply.",
    },
    {
      question: "How do I calculate the CO2 emissions for the tax?",
      answer:
        "The CO2 emissions value is found on the vehicle's Certificate of Conformity (COC) or technical sheet (Ficha Técnica). ImportEspana's calculator helps you estimate this, but checking your documents provides the most accurate result.",
    },
    {
      question: "Is it profitable to import a car from Germany to Spain?",
      answer:
        "Yes, it is often profitable to import mid-to-high-end cars (Audi, BMW, Mercedes) from Germany due to the larger supply, better prices, and better condition. Savings can range from €2,000 to €10,000 even after paying registration and transport taxes.",
    },
  ],
  es: [
    // ── SECCIÓN 1: COSTES ──────────────────────────────────────────────────
    {
      question: "¿Cuánto cuesta el Impuesto de Matriculación en España?",
      answer:
        "El impuesto de matriculación depende de las emisiones de CO2 del vehículo: 0% para coches con menos de 120 g/km, 4,75% entre 120 y 159 g/km, 9,75% entre 160 y 199 g/km, y 14,75% para más de 200 g/km. Nuestra calculadora usa las tablas oficiales del BOE para determinar el valor fiscal exacto de tu modelo.",
    },
    {
      question: "¿Qué costes tiene importar un coche a España?",
      answer:
        "Los principales costes son: 1) Impuesto de Matriculación (IEDMT), calculado sobre el valor fiscal BOE; 2) ITP (4–8% del valor si compras a particular); 3) ITV de importación (150–300 €); 4) Tasas DGT (~100 €); 5) Placas de matrícula (~50 €); y 6) Gestoría (200–400 €, opcional pero recomendada). El total puede rondar 1.500–5.000 € según el valor del coche.",
    },
    {
      question: "¿Los coches eléctricos pagan impuesto de matriculación?",
      answer:
        "Los vehículos eléctricos puros (BEV) están exentos del Impuesto de Matriculación al emitir 0 g/km de CO2. Sin embargo, deberás pagar ITV, tasas DGT y placas. Los híbridos enchufables (PHEV) con más de 40 km de autonomía eléctrica también pueden estar exentos en algunos casos.",
    },
    {
      question: "¿Puedo traer mi coche a España por cambio de residencia?",
      answer:
        "Sí, puedes solicitar la exención del impuesto de matriculación por Cambio de Residencia. Debes haber sido propietario del coche al menos 6 meses antes de mudarte a España y solicitar la exención dentro de los 60 días posteriores a tu llegada. El trámite se hace en la Agencia Tributaria.",
    },
    {
      question: "¿Cuánto cuesta transportar un coche de Alemania a España?",
      answer:
        "El transporte de un coche desde Alemania a España cuesta entre 800 y 1.500 €, dependiendo de la distancia, el tipo de transporte (abierto o cerrado) y la empresa. El trayecto Múnich–Madrid suele estar entre 1.000 y 1.200 € en camión abierto. El transporte marítimo desde puertos del norte de Europa puede ser algo más económico.",
    },
    {
      question: "¿Qué es la base imponible del impuesto de matriculación?",
      answer:
        "La base imponible es el valor del coche según las tablas del BOE (Boletín Oficial del Estado), ajustado por un coeficiente de depreciación según la antigüedad del vehículo. No es el precio de compra, sino un valor fiscal de referencia. Nuestra calculadora lo determina automáticamente al introducir la marca, modelo y año.",
    },
    // ── SECCIÓN 2: PROCESO ─────────────────────────────────────────────────
    {
      question: "¿Cuáles son los pasos para matricular un coche extranjero en España?",
      answer:
        "El proceso tiene 5 pasos: 1) ITV especial de importación con la ficha técnica; 2) Pago del Impuesto de Matriculación en Hacienda (modelo 576); 3) Pago del ITP si compras a particular (modelo 600); 4) Pago del IVTM (sello) en el Ayuntamiento; 5) Cita en la DGT para el permiso de circulación. El proceso completo suele durar 4–8 semanas.",
    },
    {
      question: "¿Qué documentos necesito para importar un coche?",
      answer:
        "Necesitarás: Certificado de Conformidad (COC) del fabricante, ficha técnica del país de origen, contrato de compraventa o factura, DNI/NIE del comprador, justificante de pago de impuestos (modelos 576 y 600 según el caso), ITV de importación aprobada, y permiso de circulación extranjero. Si el coche viene de fuera de la UE, también necesitas el DUA (Declaración Única Aduanera).",
    },
    {
      question: "¿Cuánto tiempo tarda la matriculación de un coche importado?",
      answer:
        "El proceso completo puede tardar entre 4 y 8 semanas, dependiendo de la comunidad autónoma y la carga de la DGT. La ITV puede obtenerse en 1–2 semanas. El pago de impuestos es inmediato. La cita DGT suele tardar 2–4 semanas. Contratar una gestoría puede acelerar significativamente el proceso.",
    },
    {
      question: "¿Necesito una gestoría para importar un coche?",
      answer:
        "No es obligatorio, pero sí muy recomendable. Una gestoría conoce todos los trámites, los plazos y los formularios, lo que reduce errores y ahorra tiempo. El coste suele ser de 200 a 400 €, una cantidad razonable teniendo en cuenta que pueden ahorrarte semanas de gestiones.",
    },
    {
      question: "¿Qué es la ITV de importación y dónde se pasa?",
      answer:
        "La ITV de importación es una inspección técnica especial para vehículos matriculados en el extranjero. Se realiza en cualquier estación ITV autorizada en España. El coche debe presentarse con la ficha técnica del país de origen. Si el vehículo pasa la inspección, recibirás el certificado necesario para continuar con la matriculación.",
    },
    {
      question: "¿Tengo plazo máximo para matricular mi coche importado?",
      answer:
        "Sí. Si resides en España y has importado el coche, tienes un plazo de 30 días desde que el vehículo entra en el país para iniciar los trámites de matriculación. Si superas este plazo sin haberlo matriculado, podrías enfrentarte a sanciones. Para el cambio de residencia, el plazo es de 60 días desde tu llegada a España.",
    },
    // ── SECCIÓN 3: VEHÍCULOS ESPECÍFICOS ──────────────────────────────────
    {
      question: "¿Es rentable importar un coche de Alemania a España?",
      answer:
        "Sí, a menudo es rentable importar coches de gama media-alta (Audi, BMW, Mercedes) desde Alemania. La oferta es mayor, el estado de conservación suele ser mejor y los precios son más bajos que en España. El ahorro puede oscilar entre 2.000 € y 10.000 € incluso después de pagar los impuestos. Los coches más rentables suelen ser los modelos entre 3 y 6 años de antigüedad.",
    },
    {
      question: "¿Qué coches son más baratos importar de Alemania a España?",
      answer:
        "Los coches más rentables para importar desde Alemania son: BMW Serie 3/5, Mercedes Clase C/E, Audi A4/A6, Volkswagen Golf/Passat y coches eléctricos como el BMW i3 o el Volkswagen ID.3. Los coches eléctricos tienen la ventaja adicional de estar exentos del impuesto de matriculación.",
    },
    {
      question: "¿Cómo sé el CO2 de mi coche importado?",
      answer:
        "El valor de CO2 figura en el Certificado de Conformidad (COC) o Ficha Técnica del vehículo. También puedes buscarlo en la web del fabricante introduciendo el VIN del coche. Para coches alemanes, el TÜV y los registros de vehículos (Zulassungsbescheinigung) también contienen esta información.",
    },
    {
      question: "¿Puedo importar un coche híbrido o eléctrico desde fuera de la UE?",
      answer:
        "Sí, puedes importar coches híbridos y eléctricos desde fuera de la UE (por ejemplo, desde EAU o EE.UU.), pero el proceso es más complejo. Además del IVA (21%) y los aranceles aduaneros (10% para coches no UE), necesitarás la homologación individual del vehículo, que puede costar entre 1.000 y 3.000 €. Los EVs sí están exentos del impuesto de matriculación.",
    },
    {
      question: "¿Qué pasa si mi coche importado no supera la ITV?",
      answer:
        "Si el coche no supera la ITV de importación, recibirás un informe con los defectos. Tendrás que repararlos y volver a presentar el vehículo. Los defectos menores (calificación de 'Desfavorable Leve') te permiten circular durante un tiempo limitado para hacer las reparaciones. Los defectos graves ('Negativa') impiden la circulación hasta su reparación.",
    },
    // ── SECCIÓN 4: COMPARATIVAS REGIONALES ────────────────────────────────
    {
      question: "¿Qué comunidad autónoma tiene el ITP más bajo de España?",
      answer:
        "Madrid, Andalucía, Aragón, Murcia, Navarra, País Vasco y La Rioja tienen el ITP más bajo de España para vehículos de segunda mano, con un 4% del valor fiscal. Canarias, Ceuta y Melilla son casos especiales: no aplican ITP (usan IGIC o IPSI). En el extremo más alto, Asturias, Cantabria y Galicia aplican el 8%. La diferencia puede ser de cientos de euros dependiendo del valor del coche.",
    },
    {
      question: "¿Cuál es el ITP en Madrid, Barcelona y Valencia?",
      answer:
        "Los tipos de ITP son: Madrid (Comunidad de Madrid): 4%, Barcelona (Cataluña): 6%, Valencia (Comunidad Valenciana): 6%. Si compras un coche de segunda mano de 20.000 € a un particular, pagarías 800 € en Madrid, 1.200 € en Barcelona y 1.200 € en Valencia. La diferencia puede ser significativa para coches de mayor valor.",
    },
    {
      question: "¿Dónde conviene más matricular un coche importado?",
      answer:
        "Debes matricular el coche en la comunidad autónoma donde tengas tu residencia habitual, no puedes elegirla libremente para pagar menos ITP. Sin embargo, si tienes la posibilidad de cambiar de residencia legalmente, Madrid (4%), Andalucía (4%) y Aragón (4%) son las comunidades peninsulares con tipos más favorables. Canarias no aplica ITP, pero usa el IGIC.",
    },
    {
      question: "¿Es mejor comprar un coche a concesionario o particular al importar?",
      answer:
        "Comprar a concesionario: pagas IVA en origen (ya incluido en el precio en Alemania), no pagas ITP en España, pero el precio base es mayor. Comprar a particular: precio de compra más bajo, pero pagas ITP (4–8%) al matricular en España. Para coches de alto valor, comprar a concesionario suele salir más barato en impuestos totales.",
    },
    // ── SECCIÓN 5: IMPORTAR DESDE DUBAI ───────────────────────────────────
    {
      question: "¿Se puede importar un coche de Dubái a España?",
      answer:
        "Sí, es legal importar coches desde Dubái (EAU) a España, aunque el proceso es más complejo que desde la UE. Deberás pagar aranceles aduaneros (10% del valor del coche), IVA a la importación (21%), el Impuesto de Matriculación (según CO2), y los costes de homologación individual (obligatoria para coches no homologados en la UE). El transporte marítimo desde EAU puede costar 1.500–3.000 €.",
    },
    {
      question: "¿Qué aranceles se pagan al importar un coche de Dubái?",
      answer:
        "Al importar un coche desde Dubái (fuera de la UE), se aplican: Arancel aduanero: 10% del valor CIF (coste + seguro + flete), que es el tipo general del arancel comunitario (TARIC 8703); IVA a la importación: 21% sobre el valor CIF más el arancel; Impuesto de Matriculación: según emisiones CO2 (0–14,75%); Homologación individual: 1.000–3.000 € según el modelo. Algunos países con TLC con la UE (Japón, Corea del Sur, Reino Unido) pueden tener aranceles reducidos o 0%.",
    },
    {
      question: "¿Merece la pena importar un coche de lujo desde Dubái?",
      answer:
        "Puede ser rentable para coches de lujo muy específicos que no están disponibles en Europa o tienen precios mucho más altos aquí. Por ejemplo, ciertos modelos de Lamborghini, Ferrari o coches americanos como el Dodge Challenger. Sin embargo, los costes adicionales (arancel 10% del CIF, IVA 21%, homologación individual 1.500–3.000 €, transporte 1.500–3.000 €) son significativos y deben calcularse cuidadosamente con nuestra calculadora antes de tomar la decisión.",
    },
    {
      question: "¿Qué es la homologación individual y cuándo es necesaria?",
      answer:
        "La homologación individual es un proceso por el que un organismo técnico certifica que un vehículo cumple con la normativa española y europea de seguridad y emisiones. Es obligatoria para coches importados desde fuera de la UE que no tienen homologación europea (tipo EC). El coste varía entre 800 y 3.000 € dependiendo del modelo y las adaptaciones necesarias.",
    },
    {
      question: "¿Los coches de Dubái tienen el volante a la derecha?",
      answer:
        "No, en Dubái y los Emiratos Árabes se circula por la derecha y los coches tienen el volante a la izquierda, igual que en España. Esto facilita la importación. Sin embargo, el mercado de EAU incluye muchos coches de origen americano o japonés que pueden tener especificaciones técnicas diferentes a los europeos, lo que puede complicar o encarecer la homologación.",
    },
    {
      question: "¿Es posible importar un coche eléctrico desde EAU?",
      answer:
        "Sí, es posible importar coches eléctricos desde los Emiratos Árabes Unidos. Marcas como Tesla son comunes allí. Al ser eléctrico (0 g/km CO2), estarías exento del Impuesto de Matriculación. Sin embargo, sigues pagando aranceles (10%), IVA (21%) y posiblemente homologación. Para modelos Tesla que ya están homologados en la UE, el proceso es más sencillo.",
    },
    {
      question: "¿Cuánto cuesta el transporte marítimo desde Dubái a España?",
      answer:
        "El transporte marítimo de un coche desde Dubái (puerto de Jebel Ali) a España (puertos de Valencia, Barcelona o Algeciras) cuesta entre 1.500 y 3.000 €, con un tiempo de tránsito de 20–35 días. El seguro de transporte es obligatorio y supone un coste adicional del 1–2% del valor del vehículo. El despacho aduanero en España cuesta entre 200 y 400 € adicionales.",
    },
  ],
  de: [
    {
      question: "Wie hoch ist die Zulassungssteuer in Spanien?",
      answer:
        "Die Zulassungssteuer hängt von den CO2-Emissionen ab. Sie reicht von 0% (<120g/km) bis 14,75% (>200g/km). Unser Rechner nutzt die offiziellen BOE-Tabellen für eine genaue Schätzung.",
    },
    {
      question: "Kann ich mein Auto steuerfrei nach Spanien bringen?",
      answer:
        "Ja, bei einem Wohnsitzwechsel (Cambio de Residencia) können Sie von der Steuer befreit werden. Sie müssen das Auto seit mindestens 6 Monaten besitzen und die Befreiung innerhalb von 60 Tagen nach Ankunft beantragen.",
    },
    {
      question: "Welche Kosten fallen beim Import an?",
      answer:
        "Hauptkosten: 1. Zulassungssteuer (IEDMT), 2. Grunderwerbsteuer (ITP - bei Privatkauf), 3. TÜV (ITV), 4. Verkehrsamt-Gebühren (DGT), 5. Kennzeichen, 6. Gestoría (optional).",
    },
    {
      question: "Zahlen Elektroautos Importsteuern?",
      answer:
        "Reine Elektroautos sind meist von der Zulassungssteuer befreit (0g/km CO2). Gebühren für ITV, DGT und Kennzeichen fallen jedoch an.",
    },
    {
      question: "Lohnt sich ein Import aus Deutschland?",
      answer:
        "Ja, oft lohnt sich der Import von Premium-Fahrzeugen (Audi, BMW, Mercedes) aus Deutschland wegen der größeren Auswahl und besseren Preise. Die Einsparung kann 2.000€ bis 10.000€ betragen.",
    },
  ],
  fr: [
    {
      question: "Combien coûte la taxe d'immatriculation en Espagne ?",
      answer:
        "La taxe dépend des émissions de CO2. Elle varie de 0% (<120g/km) à 14,75% (>200g/km). Notre calculateur utilise les tables officielles du BOE.",
    },
    {
      question: "Puis-je importer ma voiture sans payer de taxes ?",
      answer:
        "Oui, en cas de changement de résidence, vous pouvez être exonéré. Vous devez posséder le véhicule depuis au moins 6 mois et faire la demande sous 60 jours.",
    },
    {
      question: "Quels sont les coûts d'importation ?",
      answer:
        "Coûts principaux : 1. Taxe d'immatriculation, 2. Taxe de transfert (ITP - achat à particulier), 3. Contrôle technique (ITV), 4. Frais DGT, 5. Plaques, 6. Gestoría (optionnel).",
    },
    {
      question: "Les voitures électriques paient-elles des taxes ?",
      answer:
        "Les véhicules électriques sont généralement exonérés de la taxe d'immatriculation. Les frais d'ITV et de DGT restent applicables.",
    },
    {
      question: "Est-il rentable d'importer une voiture d'Allemagne ?",
      answer:
        "Oui, pour les véhicules haut de gamme, l'importation d'Allemagne est souvent rentable grâce à une offre plus large et de meilleurs prix. L'économie peut aller de 2.000€ à 10.000€.",
    },
  ],
  ru: [
    {
      question: "Сколько стоит налог на регистрацию в Испании?",
      answer:
        "Налог зависит от выбросов CO2: от 0% (<120 г/км) до 14,75% (>200 г/км). Наш калькулятор использует официальные таблицы BOE.",
    },
    {
      question: "Можно ли ввезти авто без налогов при переезде?",
      answer:
        "Да, при смене резиденции можно получить освобождение. Вы должны владеть авто не менее 6 месяцев и подать заявку в течение 60 дней после приезда.",
    },
    {
      question: "Каковы расходы на импорт?",
      answer:
        "Основные расходы: 1. Налог на регистрацию, 2. Налог на передачу прав (ITP), 3. Техосмотр (ITV), 4. Сборы DGT, 5. Номера, 6. Услуги хестора.",
    },
    {
      question: "Платят ли электромобили налог?",
      answer:
        "Электромобили обычно освобождены от регистрационного налога (0 г/км CO2). Оплачиваются только сборы ITV и DGT.",
    },
    {
      question: "Выгодно ли импортировать авто из Германии?",
      answer:
        "Да, часто выгодно импортировать премиум-авто (Audi, BMW, Mercedes) из Германии из-за большего выбора и лучших цен. Экономия может составить от 2.000€ до 10.000€.",
    },
  ],
};
