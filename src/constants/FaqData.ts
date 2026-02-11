export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_DATA: FAQItem[] = [
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
    question: "Es rentable importar un coche de Alemania a España?",
    answer:
      "Sí, a menudo es rentable importar coches de gama media-alta (Audi, BMW, Mercedes) desde Alemania debido a la mayor oferta, mejores precios y estados de conservación. El ahorro puede oscilar entre 2.000€ y 10.000€ incluso después de pagar los impuestos de matriculación y transporte.",
  },
];
