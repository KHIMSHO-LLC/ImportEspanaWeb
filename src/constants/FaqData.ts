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
    {
      question: "¿Cuánto cuesta el Impuesto de Matriculación en España?",
      answer:
        "El impuesto de matriculación depende de las emisiones de CO2. Varía desde el 0% (<120g/km) hasta el 14,75% (>200g/km). Nuestra calculadora utiliza las tablas oficiales del BOE para determinar el valor fiscal exacto de tu modelo.",
    },
    {
      question: "¿Puedo traer mi coche a España por cambio de residencia?",
      answer:
        "Sí, puedes solicitar la exención del impuesto de matriculación por Cambio de Residencia. Debes haber sido propietario del coche al menos 6 meses antes de mudarte y solicitar la exención dentro de los 60 días posteriores a tu llegada.",
    },
    {
      question: "¿Qué costes tiene importar un coche a España?",
      answer:
        "Los principales costes son: 1. Impuesto de Matriculación (IEDMT), 2. ITP (4-8% si compras a particular), 3. ITV, 4. Tasas DGT, 5. Placas de matrícula, y 6. Gestoría (opcional).",
    },
    {
      question: "¿Los coches eléctricos pagan impuesto de matriculación?",
      answer:
        "Los vehículos eléctricos puros (EV) suelen estar exentos del Impuesto de Matriculación al emitir 0g/km de CO2. Sin embargo, deberás pagar ITV, tasas de DGT y placas.",
    },
    {
      question: "¿Cómo sé el CO2 de mi coche?",
      answer:
        "El valor de CO2 figura en el Certificado de Conformidad (COC) o Ficha Técnica. Nuestra calculadora te ayuda a estimarlo, pero el documento oficial es el que manda.",
    },
    {
      question: "¿Es rentable importar un coche de Alemania a España?",
      answer:
        "Sí, a menudo es rentable importar coches de gama media-alta (Audi, BMW, Mercedes) desde Alemania debido a la mayor oferta, mejores precios y estados de conservación. El ahorro puede oscilar entre 2.000€ y 10.000€ incluso después de pagar los impuestos.",
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
