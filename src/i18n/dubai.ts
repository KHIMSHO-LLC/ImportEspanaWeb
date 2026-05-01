import type { Language } from "@/constants/translations";

export type DubaiFaq = { question: string; answer: string };
export type DubaiProcessStep = { title: string; desc: string; time: string };
export type DubaiPopularModel = { name: string; emoji: string; note: string };
export type DubaiComparisonRow = {
  label: string;
  dubai: string;
  alemania: string;
  dubaiBad?: boolean;
  dubaiGood?: boolean;
};

export type DubaiContent = {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  guideBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  trustBadges: string[];
  costTariffLabel: string;
  costTariffSub: string;
  costVatLabel: string;
  costVatSub: string;
  costTotalLabel: string;
  costTotalSub: string;
  costTotalValue: string;
  warningTitle: string;
  warningText: string;
  calculatorHeading: string;
  calculatorSubheading: string;
  calculatorLoading: string;
  costBuildupHeading: string;
  costBuildupRows: { label: string; value: string }[];
  costBuildupTotalLabel: string;
  costBuildupTotalValue: string;
  costBuildupNote: string;
  processHeading: string;
  processSteps: DubaiProcessStep[];
  comparisonHeading: string;
  comparisonHeaderFactor: string;
  comparisonHeaderDubai: string;
  comparisonHeaderGermany: string;
  comparisonRows: DubaiComparisonRow[];
  comparisonNote: string;
  modelsHeading: string;
  popularModels: DubaiPopularModel[];
  watchOutHeading: string;
  watchOutItems: string[];
  faqHeading: string;
  faqItems: DubaiFaq[];
  linkBlogTitle: string;
  linkBlogDesc: string;
  linkCountryTitle: string;
  linkCountryDesc: string;
};

export const DUBAI_CONTENT: Record<Language, DubaiContent> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Import from Dubai",
    guideBadge: "2026 Import Guide",
    heroTitle: "Importing a Car from Dubai to Spain",
    heroSubtitle:
      "Calculate customs duty (6.5%), VAT (21%), registration tax, homologation and sea freight — all in seconds.",
    trustBadges: ["✅ Free calculator", "📋 Real 2026 data", "⚡ Instant result"],
    costTariffLabel: "Customs duty",
    costTariffSub: "of CIF value",
    costVatLabel: "Import VAT",
    costVatSub: "on CIF + duty",
    costTotalLabel: "Total surcharge",
    costTotalSub: "of car price",
    costTotalValue: "~25–30%",
    warningTitle: "Important:",
    warningText:
      "Importing from Dubai involves customs duty and VAT that don't apply to EU imports. Use the calculator to know the exact cost before you buy.",
    calculatorHeading: "Calculator — Dubai to Spain",
    calculatorSubheading: "Pre-configured for imports from the UAE.",
    calculatorLoading: "Loading calculator...",
    costBuildupHeading: "How is the total cost built up?",
    costBuildupRows: [
      { label: "Car price (example)", value: "€40,000" },
      { label: "+ Sea freight (approx.)", value: "€2,200" },
      { label: "+ 6.5% duty on CIF", value: "€2,743" },
      { label: "+ 21% VAT on (CIF + duty)", value: "€9,450" },
      { label: "+ Homologation + ITV + fees", value: "~€3,000" },
    ],
    costBuildupTotalLabel: "Estimated total",
    costBuildupTotalValue: "~€57,400",
    costBuildupNote: "Indicative example. Use the calculator for your case.",
    processHeading: "Import Process from Dubai",
    processSteps: [
      {
        title: "Find and buy the car in the UAE",
        desc:
          "Search Dubizzle, Cars.co or local dealers. Verify the car has European spec or that homologation is feasible.",
        time: "1–4 weeks",
      },
      {
        title: "Book ro-ro sea freight",
        desc:
          "From Jebel Ali Port (Dubai) to a Spanish port. Transit takes 20–35 days. Mandatory transport insurance.",
        time: "20–35 days",
      },
      {
        title: "Customs clearance in Spain",
        desc:
          "On arrival, a customs agent clears the vehicle: duty (6.5%) and VAT (21%). Documents: invoice, packing list, bill of lading (B/L).",
        time: "3–7 days",
      },
      {
        title: "Individual homologation",
        desc:
          "Take the car to a control body (IDIADA, INTA…) for individual homologation. Cost: €800–4,000 depending on model.",
        time: "2–8 weeks",
      },
      {
        title: "ITV and final registration",
        desc:
          "With the homologation, pass the Spanish ITV. Pay the registration tax to the Tax Agency and request plates at the DGT.",
        time: "1–2 weeks",
      },
    ],
    comparisonHeading: "Dubai vs. Germany — which makes more sense?",
    comparisonHeaderFactor: "Factor",
    comparisonHeaderDubai: "🇦🇪 Dubai",
    comparisonHeaderGermany: "🇩🇪 Germany",
    comparisonRows: [
      { label: "Customs duty", dubai: "6.5% CIF", alemania: "0%", dubaiBad: true },
      { label: "Import VAT", dubai: "21%", alemania: "0%", dubaiBad: true },
      { label: "Homologation", dubai: "€800–4,000", alemania: "Included (COC)", dubaiBad: true },
      { label: "Transport", dubai: "€1,600–2,800", alemania: "€500–1,200", dubaiBad: true },
      { label: "Exclusive cars", dubai: "✅ F-150, Yukon…", alemania: "❌ Not available", dubaiGood: true },
      { label: "Used luxury market", dubai: "✅ Very active", alemania: "⚠️ Smaller offer", dubaiGood: true },
      { label: "Total time", dubai: "3–4 months", alemania: "4–8 weeks", dubaiBad: true },
    ],
    comparisonNote:
      "Importing from Germany is usually cheaper unless you want a model that's not available in Europe.",
    modelsHeading: "Popular Models from Dubai",
    popularModels: [
      { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Reg. tax exempt" },
      { name: "Lamborghini Urus", emoji: "🏎️", note: "Potential savings" },
      { name: "Rolls-Royce Ghost", emoji: "👑", note: "Pre-owned" },
      { name: "Dodge Challenger", emoji: "🇺🇸", note: "UAE-only" },
      { name: "GMC Yukon", emoji: "🚙", note: "Not in EU" },
      { name: "Ford F-150", emoji: "🛻", note: "Exclusive pickup" },
    ],
    watchOutHeading: "What to watch out for before importing",
    watchOutItems: [
      "Verify the model has European spec or that homologation is possible — some UAE models cannot be homologated in Spain.",
      "The car must pass the Spanish ITV and meet WLTP/Euro 6 emissions rules.",
      "Request the vehicle history (Carfax or similar) — the Dubai market has high turnover.",
      "AED/EUR exchange rate can affect the final price. Confirm price and shipping cost in writing.",
      "Hire a specialist broker for non-EU imports to handle customs clearance.",
    ],
    faqHeading: "Frequently Asked Questions — Importing from Dubai",
    faqItems: [
      {
        question: "How much is the customs duty when importing a car from Dubai to Spain?",
        answer:
          "Non-EU vehicles pay 6.5% duty on the CIF value (car cost + insurance + freight). On top of CIF + duty, 21% VAT applies. For a €40,000 car with €3,000 transport, customs costs are about €12,500 extra.",
      },
      {
        question: "Do I need homologation to import my car from Dubai?",
        answer:
          "Yes. Cars sold in the UAE don't have European homologation. You'll need an individual homologation certifying the vehicle complies with Spanish and European rules. The cost runs €800–4,000 depending on model. Cars already with European spec (many Mercedes, BMW or VW sold in the UAE) make the process easier.",
      },
      {
        question: "How long does sea freight from Dubai to Spain take?",
        answer:
          "Transit from Jebel Ali Port (Dubai) to Spain takes 20–35 days depending on the destination port: Valencia 25–30 days, Barcelona 22–28 days, Algeciras 20–25 days. Transport cost is €1,600–2,800 by port.",
      },
      {
        question: "Do EVs imported from Dubai pay registration tax?",
        answer:
          "No. Pure EVs (0 g/km CO2) are exempt from Spain's registration tax regardless of origin. They still pay customs duty (6.5%) and VAT (21%) when crossing into the EU.",
      },
      {
        question: "Are Dubai cars left-hand drive?",
        answer:
          "Yes. The UAE drives on the right, so cars are left-hand drive — same as Spain and continental Europe. No steering conversion is needed, unlike UK or Japanese imports.",
      },
      {
        question: "Which brands are cheaper in Dubai than in Spain?",
        answer:
          "Often cheaper in Dubai vs Spain: certain American models (Cadillac, Dodge, GMC), pickup trucks (Ford F-150, RAM 1500), special-spec versions of European brands, and the second-hand luxury market for Rolls-Royce, Bentley and Lamborghini.",
      },
    ],
    linkBlogTitle: "Full guide: Dubai → Spain 2026",
    linkBlogDesc: "Step-by-step process with real examples",
    linkCountryTitle: "Guide: Importing from the UAE",
    linkCountryDesc: "Origin country, paperwork, tips",
  },
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Importar desde Dubái",
    guideBadge: "Guía de importación 2026",
    heroTitle: "Importar Coche desde Dubái a España",
    heroSubtitle:
      "Calcula aranceles (6,5%), IVA (21%), impuesto de matriculación, homologación y transporte marítimo — todo en segundos.",
    trustBadges: [
      "✅ Calculadora gratuita",
      "📋 Datos reales 2026",
      "⚡ Resultado inmediato",
    ],
    costTariffLabel: "Arancel aduanero",
    costTariffSub: "del valor CIF",
    costVatLabel: "IVA importación",
    costVatSub: "sobre CIF + arancel",
    costTotalLabel: "Sobrecosto total",
    costTotalSub: "del precio del coche",
    costTotalValue: "~25–30%",
    warningTitle: "Importante:",
    warningText:
      "Importar desde Dubái conlleva aranceles e IVA que no existen en importaciones desde la UE. Usa la calculadora para conocer el coste exacto antes de comprar.",
    calculatorHeading: "Calculadora — Dubái a España",
    calculatorSubheading: "Configurada automáticamente para importación desde EAU.",
    calculatorLoading: "Cargando calculadora...",
    costBuildupHeading: "¿Cómo se construye el coste total?",
    costBuildupRows: [
      { label: "Precio del coche (ejemplo)", value: "40.000 €" },
      { label: "+ Transporte marítimo (aprox.)", value: "2.200 €" },
      { label: "+ Arancel 6,5% del CIF", value: "2.743 €" },
      { label: "+ IVA 21% sobre (CIF + arancel)", value: "9.450 €" },
      { label: "+ Homologación + ITV + tasas", value: "~3.000 €" },
    ],
    costBuildupTotalLabel: "Total estimado",
    costBuildupTotalValue: "~57.400 €",
    costBuildupNote: "Ejemplo orientativo. Usa la calculadora para tu caso específico.",
    processHeading: "Proceso de Importación desde Dubái",
    processSteps: [
      {
        title: "Localiza y compra el coche en EAU",
        desc:
          "Busca en Dubizzle, Cars.co o concesionarios locales. Verifica que el coche tenga spec europea o que sea posible homologarlo.",
        time: "1–4 semanas",
      },
      {
        title: "Contrata el transporte marítimo ro-ro",
        desc:
          "Desde el Puerto de Jebel Ali (Dubái) a un puerto español. El tránsito dura 20–35 días. Contrata seguro obligatorio.",
        time: "20–35 días",
      },
      {
        title: "Despacho aduanero en España",
        desc:
          "Al llegar al puerto, un agente de aduanas realiza el despacho: pago del arancel (6,5%) e IVA (21%). Documentos: factura de compra, packing list, conocimiento de embarque (B/L).",
        time: "3–7 días",
      },
      {
        title: "Homologación individual",
        desc:
          "Lleva el coche a un organismo de control (IDIADA, INTA…) para la homologación individual. Coste: 800–4.000 € según modelo.",
        time: "2–8 semanas",
      },
      {
        title: "ITV y matriculación final",
        desc:
          "Con la homologación, pasa la ITV española. Paga el Impuesto de Matriculación en Hacienda y solicita la matrícula en la DGT.",
        time: "1–2 semanas",
      },
    ],
    comparisonHeading: "Dubái vs. Alemania — ¿Cuál conviene más?",
    comparisonHeaderFactor: "Factor",
    comparisonHeaderDubai: "🇦🇪 Dubái",
    comparisonHeaderGermany: "🇩🇪 Alemania",
    comparisonRows: [
      { label: "Arancel", dubai: "6,5% CIF", alemania: "0%", dubaiBad: true },
      { label: "IVA importación", dubai: "21%", alemania: "0%", dubaiBad: true },
      { label: "Homologación", dubai: "800–4.000€", alemania: "Incluida COC", dubaiBad: true },
      { label: "Transporte", dubai: "1.600–2.800€", alemania: "500–1.200€", dubaiBad: true },
      { label: "Coches exclusivos", dubai: "✅ F-150, Yukon…", alemania: "❌ No disponible", dubaiGood: true },
      { label: "Mercado lujo 2ª mano", dubai: "✅ Muy activo", alemania: "⚠️ Menor oferta", dubaiGood: true },
      { label: "Tiempo total", dubai: "3–4 meses", alemania: "4–8 semanas", dubaiBad: true },
    ],
    comparisonNote:
      "Importar desde Alemania suele ser más barato salvo que busques un modelo no disponible en Europa.",
    modelsHeading: "Modelos Populares desde Dubái",
    popularModels: [
      { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Exento matriculación" },
      { name: "Lamborghini Urus", emoji: "🏎️", note: "Ahorro potencial" },
      { name: "Rolls-Royce Ghost", emoji: "👑", note: "Segunda mano" },
      { name: "Dodge Challenger", emoji: "🇺🇸", note: "Solo en EAU" },
      { name: "GMC Yukon", emoji: "🚙", note: "No disponible en UE" },
      { name: "Ford F-150", emoji: "🛻", note: "Pickup exclusivo" },
    ],
    watchOutHeading: "Qué tener en cuenta antes de importar",
    watchOutItems: [
      "Verifica que el modelo tiene spec europea o que la homologación es posible — algunos modelos EAU no pueden homologarse en España.",
      "El coche debe pasar la ITV española y cumplir normativa WLTP/Euro 6 de emisiones.",
      "Solicita el historial del vehículo (Carfax o similar) — el mercado de Dubái tiene alta rotación.",
      "El tipo de cambio AED/EUR puede afectar el precio final. Confirma precio y coste de envío por escrito.",
      "Contrata un gestor especializado en importaciones extra-UE para el despacho aduanero.",
    ],
    faqHeading: "Preguntas Frecuentes — Importar desde Dubái",
    faqItems: [
      {
        question: "¿Cuánto es el arancel para importar un coche de Dubái a España?",
        answer:
          "Los vehículos de origen no-UE pagan un arancel del 6,5% del valor CIF (coste del coche + seguro + flete). Además, sobre el valor CIF más el arancel se aplica el IVA del 21%. Para un coche de 40.000 € con transporte de 3.000 €, el coste adicional en aduanas sería de aproximadamente 12.500 €.",
      },
      {
        question: "¿Necesito homologación para importar mi coche de Dubái?",
        answer:
          "Sí, los coches vendidos en EAU no tienen homologación europea. Necesitarás una homologación individual que certifique que el vehículo cumple la normativa española y europea. El coste varía entre 800 € y 4.000 € dependiendo del modelo. Para coches que ya cuentan con especificación europea (muchos Mercedes, BMW o VW vendidos en EAU), el proceso es más sencillo.",
      },
      {
        question: "¿Cuánto tarda el transporte marítimo desde Dubái a España?",
        answer:
          "El transporte desde el Puerto de Jebel Ali (Dubái) a España tarda entre 20 y 35 días dependiendo del puerto de destino. Los tiempos orientativos son: Valencia 25–30 días, Barcelona 22–28 días, Algeciras 20–25 días. El coste del transporte es de 1.600–2.800 € según el puerto.",
      },
      {
        question: "¿Los coches eléctricos importados de Dubái pagan impuesto de matriculación?",
        answer:
          "No. Los coches eléctricos (0 g/km CO2) están exentos del Impuesto de Matriculación en España, independientemente de su país de origen. Sin embargo, siguen pagando aranceles aduaneros (6,5%) e IVA (21%) al cruzar la frontera de la UE.",
      },
      {
        question: "¿Los coches de Dubái tienen el volante a la izquierda?",
        answer:
          "Sí, en los Emiratos Árabes Unidos se circula por la derecha, por lo que los coches tienen el volante a la izquierda, igual que en España y el resto de Europa continental. Esto elimina la necesidad de convertir el volante, a diferencia de los coches del Reino Unido o Japón.",
      },
      {
        question: "¿Qué marcas son más baratas en Dubái que en España?",
        answer:
          "En Dubái suelen ser más baratos que en España: ciertos modelos americanos (Cadillac, Dodge, GMC), algunos camiones pickups (Ford F-150, RAM 1500), versiones con especificaciones especiales de marcas europeas, y el mercado de coches de alta gama de segunda mano puede ofrecer buenas oportunidades en Rolls-Royce, Bentley y Lamborghini.",
      },
    ],
    linkBlogTitle: "Guía completa: Dubai → España 2026",
    linkBlogDesc: "Proceso paso a paso y ejemplos reales",
    linkCountryTitle: "Guía: Importar desde EAU",
    linkCountryDesc: "País de origen, documentación, consejos",
  },
  ru: {
    breadcrumbHome: "Главная",
    breadcrumbCurrent: "Импорт из Дубая",
    guideBadge: "Руководство по импорту 2026",
    heroTitle: "Импорт автомобиля из Дубая в Испанию",
    heroSubtitle:
      "Рассчитайте таможенную пошлину (6,5%), НДС (21%), регистрационный налог, омологацию и морскую доставку — за секунды.",
    trustBadges: ["✅ Бесплатный калькулятор", "📋 Актуальные данные 2026", "⚡ Мгновенный результат"],
    costTariffLabel: "Таможенная пошлина",
    costTariffSub: "от стоимости CIF",
    costVatLabel: "НДС при импорте",
    costVatSub: "на CIF + пошлина",
    costTotalLabel: "Общее удорожание",
    costTotalSub: "от цены автомобиля",
    costTotalValue: "~25–30%",
    warningTitle: "Важно:",
    warningText:
      "Импорт из Дубая включает пошлину и НДС, которых нет при импорте из ЕС. Используйте калькулятор, чтобы узнать точную стоимость перед покупкой.",
    calculatorHeading: "Калькулятор — Дубай в Испанию",
    calculatorSubheading: "Настроен автоматически для импорта из ОАЭ.",
    calculatorLoading: "Загрузка калькулятора...",
    costBuildupHeading: "Как формируется итоговая стоимость?",
    costBuildupRows: [
      { label: "Цена авто (пример)", value: "40 000 €" },
      { label: "+ Морская доставка (прибл.)", value: "2 200 €" },
      { label: "+ Пошлина 6,5% от CIF", value: "2 743 €" },
      { label: "+ НДС 21% от (CIF + пошлина)", value: "9 450 €" },
      { label: "+ Омологация + ITV + сборы", value: "~3 000 €" },
    ],
    costBuildupTotalLabel: "Итого ориентировочно",
    costBuildupTotalValue: "~57 400 €",
    costBuildupNote: "Пример для ориентира. Используйте калькулятор для своего случая.",
    processHeading: "Процесс импорта из Дубая",
    processSteps: [
      {
        title: "Найдите и купите авто в ОАЭ",
        desc:
          "Ищите на Dubizzle, Cars.co или у местных дилеров. Убедитесь, что у авто есть европейская спецификация или возможна омологация.",
        time: "1–4 недели",
      },
      {
        title: "Закажите морскую перевозку ro-ro",
        desc:
          "Из порта Джебель-Али (Дубай) в испанский порт. Транзит 20–35 дней. Обязательная транспортная страховка.",
        time: "20–35 дней",
      },
      {
        title: "Таможенная очистка в Испании",
        desc:
          "По прибытии таможенный агент оформляет: пошлину (6,5%) и НДС (21%). Документы: счёт-фактура, упаковочный лист, коносамент (B/L).",
        time: "3–7 дней",
      },
      {
        title: "Индивидуальная омологация",
        desc:
          "Везите авто в орган контроля (IDIADA, INTA…) для индивидуальной омологации. Стоимость: 800–4 000 € в зависимости от модели.",
        time: "2–8 недель",
      },
      {
        title: "ITV и финальная регистрация",
        desc:
          "С омологацией пройдите испанский ITV. Оплатите регистрационный налог в Hacienda и подайте заявку на номера в DGT.",
        time: "1–2 недели",
      },
    ],
    comparisonHeading: "Дубай vs. Германия — что выгоднее?",
    comparisonHeaderFactor: "Фактор",
    comparisonHeaderDubai: "🇦🇪 Дубай",
    comparisonHeaderGermany: "🇩🇪 Германия",
    comparisonRows: [
      { label: "Пошлина", dubai: "6,5% CIF", alemania: "0%", dubaiBad: true },
      { label: "НДС при импорте", dubai: "21%", alemania: "0%", dubaiBad: true },
      { label: "Омологация", dubai: "800–4 000€", alemania: "Включено (COC)", dubaiBad: true },
      { label: "Транспорт", dubai: "1 600–2 800€", alemania: "500–1 200€", dubaiBad: true },
      { label: "Эксклюзивные модели", dubai: "✅ F-150, Yukon…", alemania: "❌ Недоступны", dubaiGood: true },
      { label: "Б/у премиум-сегмент", dubai: "✅ Очень активен", alemania: "⚠️ Меньше выбор", dubaiGood: true },
      { label: "Общее время", dubai: "3–4 месяца", alemania: "4–8 недель", dubaiBad: true },
    ],
    comparisonNote:
      "Импорт из Германии обычно дешевле, если только не нужна модель, которой нет в Европе.",
    modelsHeading: "Популярные модели из Дубая",
    popularModels: [
      { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Без рег. налога" },
      { name: "Lamborghini Urus", emoji: "🏎️", note: "Возможная экономия" },
      { name: "Rolls-Royce Ghost", emoji: "👑", note: "Б/у рынок" },
      { name: "Dodge Challenger", emoji: "🇺🇸", note: "Только в ОАЭ" },
      { name: "GMC Yukon", emoji: "🚙", note: "Нет в ЕС" },
      { name: "Ford F-150", emoji: "🛻", note: "Эксклюзивный пикап" },
    ],
    watchOutHeading: "На что обратить внимание перед импортом",
    watchOutItems: [
      "Убедитесь, что модель имеет европейскую спецификацию или возможна омологация — некоторые ОАЭ-версии нельзя омологировать в Испании.",
      "Авто должно пройти испанский ITV и соответствовать нормам WLTP/Euro 6.",
      "Запросите историю авто (Carfax или аналог) — рынок Дубая имеет высокую оборачиваемость.",
      "Курс AED/EUR влияет на итоговую цену. Зафиксируйте цену и стоимость доставки письменно.",
      "Наймите специализированного брокера для оформления импорта вне ЕС.",
    ],
    faqHeading: "Частые вопросы — импорт из Дубая",
    faqItems: [
      {
        question: "Сколько составляет пошлина при импорте авто из Дубая в Испанию?",
        answer:
          "Авто из стран не-ЕС облагаются пошлиной 6,5% от стоимости CIF (цена авто + страховка + фрахт). Сверху начисляется НДС 21% на (CIF + пошлина). Для авто 40 000 € с транспортом 3 000 € дополнительные таможенные расходы около 12 500 €.",
      },
      {
        question: "Нужна ли омологация для импорта авто из Дубая?",
        answer:
          "Да. У авто, продаваемых в ОАЭ, нет европейской омологации. Нужна индивидуальная омологация, подтверждающая соответствие испанским и европейским нормам. Стоимость 800–4 000 € в зависимости от модели. Для авто с европейской спецификацией (многие Mercedes, BMW, VW в ОАЭ) процесс проще.",
      },
      {
        question: "Сколько занимает морская доставка из Дубая в Испанию?",
        answer:
          "Транзит из порта Джебель-Али в Испанию — 20–35 дней в зависимости от порта назначения: Валенсия 25–30, Барселона 22–28, Альхесирас 20–25 дней. Стоимость доставки 1 600–2 800 €.",
      },
      {
        question: "Платят ли электрокары из Дубая регистрационный налог?",
        answer:
          "Нет. Полные электромобили (0 г/км CO2) освобождены от регистрационного налога Испании независимо от страны происхождения. Однако пошлина (6,5%) и НДС (21%) при ввозе в ЕС остаются.",
      },
      {
        question: "В Дубае руль слева?",
        answer:
          "Да. В ОАЭ движение правостороннее, руль слева — как в Испании и континентальной Европе. Не нужно переделывать руль, в отличие от британских или японских авто.",
      },
      {
        question: "Какие марки в Дубае дешевле, чем в Испании?",
        answer:
          "В Дубае часто дешевле: некоторые американские модели (Cadillac, Dodge, GMC), пикапы (Ford F-150, RAM 1500), особые версии европейских марок и б/у премиум — Rolls-Royce, Bentley, Lamborghini.",
      },
    ],
    linkBlogTitle: "Полное руководство: Дубай → Испания 2026",
    linkBlogDesc: "Процесс пошагово с реальными примерами",
    linkCountryTitle: "Гид: импорт из ОАЭ",
    linkCountryDesc: "Страна происхождения, документы, советы",
  },
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Import aus Dubai",
    guideBadge: "Import-Leitfaden 2026",
    heroTitle: "Auto-Import aus Dubai nach Spanien",
    heroSubtitle:
      "Berechnen Sie Zoll (6,5%), MwSt. (21%), Zulassungssteuer, Einzelabnahme und Seetransport — in Sekunden.",
    trustBadges: ["✅ Kostenloser Rechner", "📋 Echte Daten 2026", "⚡ Sofortiges Ergebnis"],
    costTariffLabel: "Einfuhrzoll",
    costTariffSub: "vom CIF-Wert",
    costVatLabel: "Einfuhr-MwSt.",
    costVatSub: "auf CIF + Zoll",
    costTotalLabel: "Gesamtaufschlag",
    costTotalSub: "vom Fahrzeugpreis",
    costTotalValue: "~25–30%",
    warningTitle: "Wichtig:",
    warningText:
      "Beim Import aus Dubai fallen Zoll und MwSt. an, die bei EU-Importen entfallen. Nutzen Sie den Rechner, um die genauen Kosten vorab zu kennen.",
    calculatorHeading: "Rechner — Dubai nach Spanien",
    calculatorSubheading: "Voreingestellt für Importe aus den VAE.",
    calculatorLoading: "Rechner wird geladen...",
    costBuildupHeading: "Wie setzen sich die Gesamtkosten zusammen?",
    costBuildupRows: [
      { label: "Fahrzeugpreis (Beispiel)", value: "40.000 €" },
      { label: "+ Seetransport (ca.)", value: "2.200 €" },
      { label: "+ 6,5% Zoll auf CIF", value: "2.743 €" },
      { label: "+ 21% MwSt. auf (CIF + Zoll)", value: "9.450 €" },
      { label: "+ Einzelabnahme + ITV + Gebühren", value: "~3.000 €" },
    ],
    costBuildupTotalLabel: "Geschätzter Gesamtbetrag",
    costBuildupTotalValue: "~57.400 €",
    costBuildupNote: "Indikatives Beispiel. Nutzen Sie den Rechner für Ihren Fall.",
    processHeading: "Importprozess aus Dubai",
    processSteps: [
      {
        title: "Auto in den VAE finden und kaufen",
        desc:
          "Suchen Sie auf Dubizzle, Cars.co oder bei lokalen Händlern. Prüfen Sie europäische Spezifikation bzw. Machbarkeit der Einzelabnahme.",
        time: "1–4 Wochen",
      },
      {
        title: "Ro-Ro-Seetransport buchen",
        desc:
          "Vom Hafen Jebel Ali (Dubai) nach Spanien. Transit 20–35 Tage. Transportversicherung Pflicht.",
        time: "20–35 Tage",
      },
      {
        title: "Zollabwicklung in Spanien",
        desc:
          "Bei Ankunft erledigt ein Zollagent die Abwicklung: Zoll (6,5%) und MwSt. (21%). Dokumente: Rechnung, Packliste, Konnossement (B/L).",
        time: "3–7 Tage",
      },
      {
        title: "Einzelabnahme",
        desc:
          "Bringen Sie das Auto zu einer Prüfstelle (IDIADA, INTA…). Kosten: 800–4.000 € je nach Modell.",
        time: "2–8 Wochen",
      },
      {
        title: "ITV und endgültige Zulassung",
        desc:
          "Mit der Einzelabnahme passieren Sie die spanische ITV. Zulassungssteuer beim Finanzamt zahlen, Kennzeichen bei der DGT beantragen.",
        time: "1–2 Wochen",
      },
    ],
    comparisonHeading: "Dubai vs. Deutschland — was lohnt sich mehr?",
    comparisonHeaderFactor: "Faktor",
    comparisonHeaderDubai: "🇦🇪 Dubai",
    comparisonHeaderGermany: "🇩🇪 Deutschland",
    comparisonRows: [
      { label: "Zoll", dubai: "6,5% CIF", alemania: "0%", dubaiBad: true },
      { label: "Einfuhr-MwSt.", dubai: "21%", alemania: "0%", dubaiBad: true },
      { label: "Einzelabnahme", dubai: "800–4.000€", alemania: "COC inklusive", dubaiBad: true },
      { label: "Transport", dubai: "1.600–2.800€", alemania: "500–1.200€", dubaiBad: true },
      { label: "Exklusive Modelle", dubai: "✅ F-150, Yukon…", alemania: "❌ Nicht verfügbar", dubaiGood: true },
      { label: "Luxus-Gebrauchtmarkt", dubai: "✅ Sehr aktiv", alemania: "⚠️ Kleineres Angebot", dubaiGood: true },
      { label: "Gesamtdauer", dubai: "3–4 Monate", alemania: "4–8 Wochen", dubaiBad: true },
    ],
    comparisonNote:
      "Import aus Deutschland ist meist günstiger — außer Sie suchen ein Modell, das in Europa nicht erhältlich ist.",
    modelsHeading: "Beliebte Modelle aus Dubai",
    popularModels: [
      { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Steuerbefreit" },
      { name: "Lamborghini Urus", emoji: "🏎️", note: "Sparpotenzial" },
      { name: "Rolls-Royce Ghost", emoji: "👑", note: "Gebraucht" },
      { name: "Dodge Challenger", emoji: "🇺🇸", note: "Nur VAE" },
      { name: "GMC Yukon", emoji: "🚙", note: "Nicht in EU" },
      { name: "Ford F-150", emoji: "🛻", note: "Exklusiver Pickup" },
    ],
    watchOutHeading: "Worauf vor dem Import zu achten ist",
    watchOutItems: [
      "Prüfen Sie, ob das Modell europäische Spezifikation hat oder eine Einzelabnahme möglich ist — nicht alle VAE-Modelle lassen sich in Spanien zulassen.",
      "Das Auto muss die spanische ITV bestehen und WLTP/Euro 6 erfüllen.",
      "Fordern Sie die Fahrzeughistorie an (Carfax o. ä.) — der Dubai-Markt hat hohe Fluktuation.",
      "Der AED/EUR-Wechselkurs beeinflusst den Endpreis. Lassen Sie sich Preise und Versand schriftlich bestätigen.",
      "Beauftragen Sie einen Spezialisten für Nicht-EU-Importe für die Zollabwicklung.",
    ],
    faqHeading: "Häufige Fragen — Import aus Dubai",
    faqItems: [
      {
        question: "Wie hoch ist der Zoll für den Import eines Autos aus Dubai nach Spanien?",
        answer:
          "Fahrzeuge aus Nicht-EU-Ländern zahlen 6,5% Zoll auf den CIF-Wert (Auto + Versicherung + Fracht). Auf CIF + Zoll werden zusätzlich 21% MwSt. fällig. Für ein Auto von 40.000 € mit 3.000 € Transport kommen etwa 12.500 € an Zollkosten dazu.",
      },
      {
        question: "Brauche ich eine Einzelabnahme für mein Auto aus Dubai?",
        answer:
          "Ja. In den VAE verkaufte Autos haben keine europäische Typgenehmigung. Sie benötigen eine Einzelabnahme, die die Übereinstimmung mit spanischen und europäischen Vorschriften bestätigt. Kosten: 800–4.000 € je nach Modell. Bei Modellen mit Europa-Spezifikation (viele Mercedes, BMW, VW) ist es einfacher.",
      },
      {
        question: "Wie lange dauert der Seetransport von Dubai nach Spanien?",
        answer:
          "Vom Hafen Jebel Ali nach Spanien dauert es 20–35 Tage je nach Zielhafen: Valencia 25–30, Barcelona 22–28, Algeciras 20–25 Tage. Transportkosten: 1.600–2.800 €.",
      },
      {
        question: "Zahlen Elektroautos aus Dubai die Zulassungssteuer?",
        answer:
          "Nein. Reine Elektroautos (0 g/km CO2) sind unabhängig vom Herkunftsland von der spanischen Zulassungssteuer befreit. Zoll (6,5%) und MwSt. (21%) fallen bei der Einfuhr in die EU aber an.",
      },
      {
        question: "Sind Autos aus Dubai Linkslenker?",
        answer:
          "Ja. In den VAE herrscht Rechtsverkehr, die Autos sind Linkslenker — wie in Spanien und Kontinentaleuropa. Eine Lenkrad-Umrüstung entfällt, anders als bei britischen oder japanischen Importen.",
      },
      {
        question: "Welche Marken sind in Dubai günstiger als in Spanien?",
        answer:
          "Häufig günstiger in Dubai: bestimmte amerikanische Modelle (Cadillac, Dodge, GMC), Pickups (Ford F-150, RAM 1500), Sondervarianten europäischer Marken sowie der Luxus-Gebrauchtmarkt (Rolls-Royce, Bentley, Lamborghini).",
      },
    ],
    linkBlogTitle: "Komplettleitfaden: Dubai → Spanien 2026",
    linkBlogDesc: "Schritt-für-Schritt-Prozess mit Beispielen",
    linkCountryTitle: "Leitfaden: Import aus den VAE",
    linkCountryDesc: "Herkunftsland, Unterlagen, Tipps",
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Importer depuis Dubaï",
    guideBadge: "Guide d'importation 2026",
    heroTitle: "Importer une voiture de Dubaï vers l'Espagne",
    heroSubtitle:
      "Calculez les droits de douane (6,5%), la TVA (21%), la taxe d'immatriculation, l'homologation et le fret maritime — en quelques secondes.",
    trustBadges: ["✅ Calculatrice gratuite", "📋 Données réelles 2026", "⚡ Résultat immédiat"],
    costTariffLabel: "Droits de douane",
    costTariffSub: "de la valeur CIF",
    costVatLabel: "TVA à l'importation",
    costVatSub: "sur CIF + droits",
    costTotalLabel: "Surcoût total",
    costTotalSub: "du prix du véhicule",
    costTotalValue: "~25–30%",
    warningTitle: "Important :",
    warningText:
      "L'importation depuis Dubaï entraîne des droits de douane et de la TVA absents des importations UE. Utilisez la calculatrice pour connaître le coût exact avant l'achat.",
    calculatorHeading: "Calculatrice — Dubaï vers l'Espagne",
    calculatorSubheading: "Préconfigurée pour les importations depuis les EAU.",
    calculatorLoading: "Chargement de la calculatrice...",
    costBuildupHeading: "Comment se compose le coût total ?",
    costBuildupRows: [
      { label: "Prix de la voiture (exemple)", value: "40 000 €" },
      { label: "+ Fret maritime (env.)", value: "2 200 €" },
      { label: "+ Droits 6,5% sur CIF", value: "2 743 €" },
      { label: "+ TVA 21% sur (CIF + droits)", value: "9 450 €" },
      { label: "+ Homologation + ITV + frais", value: "~3 000 €" },
    ],
    costBuildupTotalLabel: "Total estimé",
    costBuildupTotalValue: "~57 400 €",
    costBuildupNote: "Exemple indicatif. Utilisez la calculatrice pour votre cas.",
    processHeading: "Processus d'importation depuis Dubaï",
    processSteps: [
      {
        title: "Trouver et acheter la voiture aux EAU",
        desc:
          "Cherchez sur Dubizzle, Cars.co ou chez les concessionnaires locaux. Vérifiez la spec européenne ou la faisabilité de l'homologation.",
        time: "1–4 semaines",
      },
      {
        title: "Réserver le fret maritime ro-ro",
        desc:
          "Du port de Jebel Ali (Dubaï) à un port espagnol. Transit 20–35 jours. Assurance transport obligatoire.",
        time: "20–35 jours",
      },
      {
        title: "Dédouanement en Espagne",
        desc:
          "À l'arrivée, un agent en douane gère le dédouanement : droits (6,5%) et TVA (21%). Documents : facture, liste de colisage, connaissement (B/L).",
        time: "3–7 jours",
      },
      {
        title: "Homologation individuelle",
        desc:
          "Amenez la voiture à un organisme de contrôle (IDIADA, INTA…). Coût : 800–4 000 € selon le modèle.",
        time: "2–8 semaines",
      },
      {
        title: "ITV et immatriculation finale",
        desc:
          "Avec l'homologation, passez l'ITV espagnole. Payez la taxe d'immatriculation au fisc et demandez les plaques à la DGT.",
        time: "1–2 semaines",
      },
    ],
    comparisonHeading: "Dubaï vs. Allemagne — lequel est le plus avantageux ?",
    comparisonHeaderFactor: "Facteur",
    comparisonHeaderDubai: "🇦🇪 Dubaï",
    comparisonHeaderGermany: "🇩🇪 Allemagne",
    comparisonRows: [
      { label: "Droits de douane", dubai: "6,5% CIF", alemania: "0%", dubaiBad: true },
      { label: "TVA importation", dubai: "21%", alemania: "0%", dubaiBad: true },
      { label: "Homologation", dubai: "800–4 000€", alemania: "COC incluse", dubaiBad: true },
      { label: "Transport", dubai: "1 600–2 800€", alemania: "500–1 200€", dubaiBad: true },
      { label: "Modèles exclusifs", dubai: "✅ F-150, Yukon…", alemania: "❌ Indisponibles", dubaiGood: true },
      { label: "Luxe d'occasion", dubai: "✅ Très actif", alemania: "⚠️ Offre réduite", dubaiGood: true },
      { label: "Délai total", dubai: "3–4 mois", alemania: "4–8 semaines", dubaiBad: true },
    ],
    comparisonNote:
      "Importer d'Allemagne est généralement moins cher, sauf pour un modèle introuvable en Europe.",
    modelsHeading: "Modèles populaires depuis Dubaï",
    popularModels: [
      { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Exonéré d'immat." },
      { name: "Lamborghini Urus", emoji: "🏎️", note: "Économie possible" },
      { name: "Rolls-Royce Ghost", emoji: "👑", note: "Occasion" },
      { name: "Dodge Challenger", emoji: "🇺🇸", note: "EAU uniquement" },
      { name: "GMC Yukon", emoji: "🚙", note: "Pas en UE" },
      { name: "Ford F-150", emoji: "🛻", note: "Pickup exclusif" },
    ],
    watchOutHeading: "À surveiller avant d'importer",
    watchOutItems: [
      "Vérifiez que le modèle a une spec européenne ou qu'une homologation est possible — certains modèles EAU ne s'homologuent pas en Espagne.",
      "La voiture doit passer l'ITV espagnole et respecter WLTP/Euro 6.",
      "Demandez l'historique du véhicule (Carfax ou équivalent) — le marché de Dubaï tourne vite.",
      "Le taux AED/EUR impacte le prix final. Confirmez prix et frais d'expédition par écrit.",
      "Engagez un courtier spécialisé en imports hors UE pour le dédouanement.",
    ],
    faqHeading: "Questions fréquentes — Importer depuis Dubaï",
    faqItems: [
      {
        question: "Quels sont les droits de douane pour importer une voiture de Dubaï en Espagne ?",
        answer:
          "Les véhicules hors UE paient 6,5% de droits sur la valeur CIF (prix + assurance + fret). À cela s'ajoute la TVA de 21% sur (CIF + droits). Pour une voiture à 40 000 € avec 3 000 € de transport, les frais de douane sont d'environ 12 500 €.",
      },
      {
        question: "Faut-il une homologation pour importer ma voiture de Dubaï ?",
        answer:
          "Oui. Les voitures vendues aux EAU n'ont pas d'homologation européenne. Il faut une homologation individuelle prouvant la conformité aux normes espagnoles et européennes. Coût : 800–4 000 € selon le modèle. C'est plus simple pour les voitures déjà en spec européenne (Mercedes, BMW, VW).",
      },
      {
        question: "Combien de temps prend le fret maritime de Dubaï à l'Espagne ?",
        answer:
          "Le transit du port de Jebel Ali à l'Espagne prend 20–35 jours selon le port d'arrivée : Valence 25–30, Barcelone 22–28, Algésiras 20–25 jours. Coût : 1 600–2 800 €.",
      },
      {
        question: "Les voitures électriques importées de Dubaï paient-elles la taxe d'immatriculation ?",
        answer:
          "Non. Les voitures 100% électriques (0 g/km CO2) sont exonérées de la taxe d'immatriculation espagnole, peu importe l'origine. Les droits (6,5%) et la TVA (21%) restent dus à l'entrée en UE.",
      },
      {
        question: "Les voitures de Dubaï sont-elles à conduite à gauche ?",
        answer:
          "Oui. Aux EAU on conduit à droite, donc le volant est à gauche — comme en Espagne et en Europe continentale. Pas de conversion du volant nécessaire, contrairement aux imports britanniques ou japonais.",
      },
      {
        question: "Quelles marques sont moins chères à Dubaï qu'en Espagne ?",
        answer:
          "Souvent moins chers à Dubaï : certains modèles américains (Cadillac, Dodge, GMC), pickups (Ford F-150, RAM 1500), versions spéciales de marques européennes, et le marché luxe d'occasion (Rolls-Royce, Bentley, Lamborghini).",
      },
    ],
    linkBlogTitle: "Guide complet : Dubaï → Espagne 2026",
    linkBlogDesc: "Processus pas à pas avec exemples réels",
    linkCountryTitle: "Guide : importer depuis les EAU",
    linkCountryDesc: "Pays d'origine, documents, conseils",
  },
};
