export type Language = "en" | "es" | "ru" | "de" | "fr";

export const translations = {
  en: {
    // Input Screen
    originCountry: "Origin Country",
    carPrice: "Car Price (€)",
    vehicleSearch: "Vehicle Search",
    brand: "Brand",
    model: "Model",
    yearOptional: "Vehicle Year (optional)",
    co2: "CO2 Emissions (g/km)",
    age: "Car Age",
    sellerType: "Seller Type",
    dealer: "Dealer",
    private: "Private",
    calculate: "Calculate Total Cost",
    // Hints & Errors
    privateSaleWarning: "⚠️ Private sales may incur 4% ITP tax.",
    evDetected: "⚡ Electric Vehicle Detected - CO2 = 0",
    priceError: "Enter a valid price",
    co2Error: "Enter CO2 emissions",
    fiscalError: "Select vehicle or enter fiscal value",
    manualEntryLink: "Can't find your car? Enter value manually →",
    manualEntryLabel: "Official Fiscal Value (€)",
    manualEntryHelp: "Enter the appraisal value according to tax table",
    confirmValue: "✓ Confirm Value",
    backToSearch: "Back to vehicle search",
    // Result Screen
    estimatedTotal: "ESTIMATED TOTAL COST",
    includes: "Includes Car Price + All Taxes & Fees",
    breakdown: "Cost Breakdown",
    taxesFees: "TAXES & FEES (Spain)",
    registrationTax: "Matriculation Tax",
    itp: "ITP (Transfer Tax)",
    dgt: "DGT Fee",
    itv: "ITV Inspection",
    plates: "Plates & Admin",
    totalImportCost: "Total Import Cost",
    calculationDetails: "Calculation Details",
    depreciation: "Depreciation Applied:",
    taxBase: "Tax Base:",
    taxRate: "Tax Rate:",
    saveDownload: "Save & Download PDF",
    watchAd: "📺 Watch a short ad to download",
    loadingAd: "(Loading...)",
    // Tooltips
    originCountryInfo:
      "The country where the vehicle is currently registered or coming from.",
    vehicleSearchInfo:
      "Find your exact vehicle model to get the official tax value.",
    yearInfo:
      "Filter models by year to find the correct version. Does not affect tax directly.",
    carPriceInfo:
      "The price you paid or will pay for the car (Purchase Price).",
    ageInfo:
      "The age of the car today. Used to calculate the depreciation (tax discount).",
    co2Info:
      "CO2 emissions in g/km found on the datasheet (Ficha Técnica). Affects the Registration Tax.",
    sellerTypeInfo:
      "Buying from a Dealer avoids ITP tax. Buying from a Private Seller incurs 4% ITP.",
    // PDF
    pdfTitle: "Import Cost Estimate",
    // Footer
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_about: "About Us",
    footer_howItWorks: "How It Works",
    footer_rights: "All rights reserved.",
    // Privacy Policy
    privacy_title: "Privacy Policy",
    privacy_intro:
      "We (ImportEspana) respect your privacy. This policy explains how we handle your data.",
    privacy_section1_title: "1. Data We Collect",
    privacy_section1_text:
      "We do not collect personal information like your name, email, or phone number directly. We do not require you to create an account. However, we use third-party services that may collect information used to identify you, specifically for advertising purposes.",
    privacy_section2_title: "2. Third-Party Services",
    privacy_section2_text:
      "We use Google AdSense (for web) and AdMob (for mobile) to display advertisements. These services may collect and use:",
    privacy_list_id: "Device identifiers (e.g., Advertising ID, IDFA)",
    privacy_list_usage: "Usage data (e.g., ad interactions, crash logs)",
    privacy_list_loc: "Approximate location",
    privacy_list_cookies: "Cookies for personalized advertising",
    privacy_contact_title: "Contact Us",
    privacy_contact_email: "info@importespana.com",
    // Terms
    terms_title: "Terms of Use",
    terms_last_updated: "Last updated: February 11, 2026",
    back_to_home: "← Back to Home",
    terms_section1_title: "1. Acceptance of Terms",
    terms_section1_text:
      "By accessing and using ImportEspana, you accept and agree to be bound by the terms and provision of this agreement.",
    terms_section2_title: "2. Disclaimer",
    terms_section2_text:
      "ImportEspana is a calculator tool designed to provide estimates. We cannot guarantee 100% precision due to legislation changes or data errors. Always consult a professional.",
    // About
    about_title: "About Us",
    about_text1:
      "Welcome to ImportEspana, the leading tool for calculating vehicle import taxes in Spain.",
    about_text2:
      "Our mission is to simplify the complex process of importing vehicles from Europe to Spain.",
    // How It Works
    hiw_title: "How ImportEspana Works",
    hiw_subtitle:
      "Understand the process of calculating import taxes for your vehicle in Spain.",
    hiw_step1_title: "1. Select Origin",
    hiw_step1_text:
      "Choose the country where you are importing the car from (e.g., Germany, France).",
    hiw_step2_title: "2. Enter Vehicle Details",
    hiw_step2_text:
      "Input the car's brand, model, age, and CO2 emissions to find the official Fiscal Value.",
    hiw_step3_title: "3. Instant Calculation",
    hiw_step3_text:
      "Our algorithm applies depreciation rates and calculates the Registration Tax based on CO2.",
    hiw_step4_title: "4. Get Total Cost",
    hiw_step4_text:
      "See a full breakdown including Registration Tax, ITV, DGT, Plates, and Fees.",
    hiw_cta_title: "Ready to calculate?",
    hiw_cta_text: "Get precise tax estimates in seconds.",
    hiw_cta_button: "Go to Calculator",
  },
  es: {
    originCountry: "País de Origen",
    carPrice: "Precio del Vehículo (€)",
    vehicleSearch: "Búsqueda de Vehículo",
    brand: "Marca",
    model: "Modelo",
    yearOptional: "Año del vehículo (opcional)",
    co2: "Emisiones CO2 (g/km)",
    age: "Antigüedad",
    sellerType: "Tipo de Vendedor",
    dealer: "Concesionario",
    private: "Particular",
    calculate: "Calcular Coste Total",
    privateSaleWarning:
      "⚠️ Las ventas entre particulares pueden estar sujetas a 4% de ITP.",
    evDetected: "⚡ Vehículo eléctrico detectado - CO2 = 0",
    priceError: "Introduce un precio válido",
    co2Error: "Introduce las emisiones de CO2",
    fiscalError: "Selecciona vehículo o introduce valor fiscal",
    manualEntryLink:
      "¿No encuentras tu vehículo? Introduce el valor manualmente →",
    manualEntryLabel: "Valor Fiscal Oficial (€)",
    manualEntryHelp:
      "Introduce el valor de tasación según la tabla de Hacienda",
    confirmValue: "✓ Confirmar Valor",
    backToSearch: "Volver a buscar vehículo",
    estimatedTotal: "COSTE TOTAL ESTIMADO",
    includes: "Incluye precio del vehículo + todos los impuestos",
    breakdown: "Desglose de Costes",
    taxesFees: "IMPUESTOS Y TASAS (España)",
    registrationTax: "Impuesto de Matriculación",
    itp: "ITP (Transmisiones)",
    dgt: "Tasa DGT",
    itv: "Inspección ITV",
    plates: "Placas y Gestión",
    totalImportCost: "Coste Total de Importación",
    calculationDetails: "Detalles del Cálculo",
    depreciation: "Depreciación Aplicada:",
    taxBase: "Base Imponible:",
    taxRate: "Tipo Impositivo:",
    saveDownload: "Guardar y Descargar PDF",
    watchAd: "📺 Mira un anuncio para descargar",
    loadingAd: "(Cargando...)",
    // Tooltips
    originCountryInfo:
      "El país donde el vehículo está registrado actualmente o de donde proviene.",
    vehicleSearchInfo:
      "Encuentra tu modelo exacto para obtener el valor fiscal oficial.",
    yearInfo:
      "Filtra modelos por año. No afecta directamente al impuesto, solo a la búsqueda.",
    carPriceInfo:
      "El precio que pagaste o pagarás por el coche (Precio de Compra).",
    ageInfo:
      "La antigüedad del coche hoy. Se usa para calcular la depreciación (descuento fiscal).",
    co2Info:
      "Emisiones CO2 en g/km (ver Ficha Técnica). Afecta al Impuesto de Matriculación.",
    sellerTypeInfo:
      "Comprar a un Concesionario evita el ITP. Comprar a un Particular conlleva un 4% de ITP.",
    pdfTitle: "Presupuesto de Importación",
    // Footer
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Uso",
    footer_about: "Sobre Nosotros",
    footer_howItWorks: "Cómo Funciona",
    footer_rights: "Todos los derechos reservados.",
    // Privacy Policy
    privacy_title: "Política de Privacidad",
    privacy_intro:
      "Nosotros (ImportEspana) respetamos tu privacidad. Esta política explica cómo manejamos tus datos.",
    privacy_section1_title: "1. Datos que Recopilamos",
    privacy_section1_text:
      "No recopilamos información personal como tu nombre o email directamente. Sin embargo, utilizamos servicios de terceros que pueden recopilar información para publicidad.",
    privacy_section2_title: "2. Servicios de Terceros",
    privacy_section2_text:
      "Utilizamos Google AdSense y AdMob para mostrar anuncios. Estos servicios pueden recopilar:",
    privacy_list_id: "Identificadores de dispositivo",
    privacy_list_usage: "Datos de uso y registros",
    privacy_list_loc: "Ubicación aproximada",
    privacy_list_cookies: "Cookies para publicidad personalizada",
    privacy_contact_title: "Contáctanos",
    privacy_contact_email: "info@importespana.com",
    // Terms
    terms_title: "Términos de Uso",
    terms_last_updated: "Última actualización: 11 de Febrero, 2026",
    back_to_home: "← Volver al Inicio",
    terms_section1_title: "1. Aceptación de Términos",
    terms_section1_text:
      "Al acceder a ImportEspana, aceptas estar sujeto a los términos de este acuerdo.",
    terms_section2_title: "2. Renuncia",
    terms_section2_text:
      "ImportEspana es una herramienta de cálculo. No garantizamos una precisión del 100% debido a cambios legislativos. Consulta siempre a un profesional.",
    // About
    about_title: "Sobre Nosotros",
    about_text1:
      "Bienvenido a ImportEspana, la herramienta líder para calcular impuestos de importación de vehículos en España.",
    about_text2:
      "Nuestra misión es simplificar el complejo proceso de importar vehículos a España.",
    // How It Works
    hiw_title: "Cómo Funciona ImportEspana",
    hiw_subtitle:
      "Entiende el proceso de cálculo de impuestos de importación para tu vehículo.",
    hiw_step1_title: "1. Selecciona Origen",
    hiw_step1_text:
      "Elige el país desde donde importas el coche (ej. Alemania, Francia).",
    hiw_step2_title: "2. Introduce Datos del Vehículo",
    hiw_step2_text:
      "Introduce marca, modelo, antigüedad y CO2 para encontrar el Valor Fiscal oficial.",
    hiw_step3_title: "3. Cálculo Instantáneo",
    hiw_step3_text:
      "Nuestro algoritmo aplica la depreciación y calcula el Impuesto de Matriculación basado en el CO2.",
    hiw_step4_title: "4. Obtén el Coste Total",
    hiw_step4_text:
      "Verás un desglose completo incluyendo Impuesto de Matriculación, ITV, DGT, Placas y Gestoría.",
    hiw_cta_title: "¿Listo para calcular?",
    hiw_cta_text: "Obtén estimaciones precisas en segundos.",
    hiw_cta_button: "Ir a la Calculadora",
  },
  ru: {
    originCountry: "Страна происхождения",
    carPrice: "Цена автомобиля (€)",
    vehicleSearch: "Поиск автомобиля",
    brand: "Марка",
    model: "Модель",
    yearOptional: "Год выпуска (необязательно)",
    co2: "Выбросы CO2 (г/км)",
    age: "Возраст авто",
    sellerType: "Тип продавца",
    dealer: "Дилер",
    private: "Частник",
    calculate: "Рассчитать стоимость",
    privateSaleWarning: "⚠️ Частные продажи могут облагаться налогом 4% ITP.",
    evDetected: "⚡ Электромобиль обнаружен - CO2 = 0",
    priceError: "Введите корректную цену",
    co2Error: "Введите выбросы CO2",
    fiscalError: "Выберите авто или введите налоговую стоимость",
    manualEntryLink: "Не нашли авто? Введите стоимость вручную →",
    manualEntryLabel: "Официальная налоговая стоимость (€)",
    manualEntryHelp: "Введите оценочную стоимость по таблице налоговой",
    confirmValue: "✓ Подтвердить",
    backToSearch: "Вернуться к поиску",
    estimatedTotal: "ОБЩАЯ СТОИМОСТЬ",
    includes: "Включая цену авто + все налоги и сборы",
    breakdown: "Детализация расходов",
    taxesFees: "НАЛОГИ И СБОРЫ (Испания)",
    registrationTax: "Налог на регистрацию",
    itp: "ITP (Налог на передачу)",
    dgt: "Сбор DGT",
    itv: "Техосмотр ITV",
    plates: "Номера и оформление",
    totalImportCost: "Общая стоимость импорта",
    calculationDetails: "Детали расчета",
    depreciation: "Амортизация:",
    taxBase: "Налоговая база:",
    taxRate: "Налоговая ставка:",
    saveDownload: "Сохранить и скачать PDF",
    watchAd: "📺 Посмотрите рекламу для скачивания",
    loadingAd: "(Загрузка...)",
    // Tooltips
    originCountryInfo:
      "Страна, где автомобиль зарегистрирован или откуда он прибывает.",
    vehicleSearchInfo:
      "Найдите точную модель, чтобы получить официальную налоговую стоимость.",
    yearInfo:
      "Фильтр моделей по году. Не влияет на налог напрямую, помогает найти версию.",
    carPriceInfo: "Цена, которую вы платите за автомобиль (Цена покупки).",
    ageInfo:
      "Возраст автомобиля на сегодня. Используется для расчета амортизации (скидки).",
    co2Info:
      "Выбросы CO2 в г/км (см. техпаспорт). Влияет на налог на регистрацию.",
    sellerTypeInfo:
      "Покупка у дилера освобождает от ITP. Покупка у частника облагается 4% ITP.",
    pdfTitle: "Смета импорта",
    // Footer
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_about: "О нас",
    footer_howItWorks: "Как это работает",
    footer_rights: "Все права защищены.",
    // Privacy Policy
    privacy_title: "Политика конфиденциальности",
    privacy_intro: "Мы (ImportEspana) уважаем вашу конфиденциальность.",
    privacy_section1_title: "1. Сбор данных",
    privacy_section1_text:
      "Мы не собираем личные данные напрямую. Однако мы используем сторонние сервисы для рекламы.",
    privacy_section2_title: "2. Сторонние сервисы",
    privacy_section2_text:
      "Мы используем Google AdSense и AdMob. Они могут собирать данные об устройстве и использовании.",
    privacy_list_id: "Идентификаторы устройства",
    privacy_list_usage: "Данные об использовании",
    privacy_list_loc: "Приблизительное местоположение",
    privacy_list_cookies: "Cookies для рекламы",
    privacy_contact_title: "Связаться с нами",
    privacy_contact_email: "info@importespana.com",
    // Terms
    terms_title: "Условия использования",
    terms_last_updated: "Последнее обновление: 11 февраля 2026",
    back_to_home: "← На главную",
    terms_section1_title: "1. Принятие условий",
    terms_section1_text:
      "Используя ImportEspana, вы соглашаетесь с этими условиями.",
    terms_section2_title: "2. Отказ от ответственности",
    terms_section2_text:
      "ImportEspana - это калькулятор. Мы не гарантируем 100% точность. Всегда консультируйтесь с профессионалами.",
    // About
    about_title: "О нас",
    about_text1:
      "Добро пожаловать в ImportEspana — ведущий инструмент для расчета налогов на импорт авто в Испанию.",
    about_text2:
      "Наша миссия — упростить сложный процесс импорта автомобилей из Европы.",
    // How It Works
    hiw_title: "Как работает ImportEspana",
    hiw_subtitle:
      "Поймите процесс расчета налогов на импорт вашего автомобиля.",
    hiw_step1_title: "1. Выберите страну",
    hiw_step1_text: "Выберите страну покупки (например, Германия, Франция).",
    hiw_step2_title: "2. Введите данные",
    hiw_step2_text:
      "Укажите марку, модель, возраст и CO2 для поиска налоговой стоимости.",
    hiw_step3_title: "3. Расчет",
    hiw_step3_text:
      "Наш алгоритм применяет амортизацию и рассчитывает налог на регистрацию.",
    hiw_step4_title: "4. Итоговая стоимость",
    hiw_step4_text: "Полная детализация, включая налоги, ITV, DGT и номера.",
    hiw_cta_title: "Готовы рассчитать?",
    hiw_cta_text: "Получите точную оценку за секунды.",
    hiw_cta_button: "Перейти к калькулятору",
  },
  de: {
    originCountry: "Herkunftsland",
    carPrice: "Fahrzeugpreis (€)",
    vehicleSearch: "Fahrzeugsuche",
    brand: "Marke",
    model: "Modell",
    yearOptional: "Baujahr (optional)",
    co2: "CO2-Emissionen (g/km)",
    age: "Fahrzeugalter",
    sellerType: "Verkäufertyp",
    dealer: "Händler",
    private: "Privat",
    calculate: "Gesamtkosten berechnen",
    privateSaleWarning: "⚠️ Bei Privatverkauf können 4% ITP anfallen.",
    evDetected: "⚡ Elektrofahrzeug erkannt - CO2 = 0",
    priceError: "Gültigen Preis eingeben",
    co2Error: "CO2-Emissionen eingeben",
    fiscalError: "Fahrzeug wählen oder Steuerwert eingeben",
    manualEntryLink: "Fahrzeug nicht gefunden? Wert manuell eingeben →",
    manualEntryLabel: "Offizieller Steuerwert (€)",
    manualEntryHelp: "Geben Sie den Schätzwert laut Steuertabelle ein",
    confirmValue: "✓ Wert bestätigen",
    backToSearch: "Zurück zur Suche",
    estimatedTotal: "GESAMTSCHÄTZUNG",
    includes: "Inklusive Fahrzeugpreis + alle Steuern",
    breakdown: "Kostenaufstellung",
    taxesFees: "STEUERN & GEBÜHREN (Spanien)",
    registrationTax: "Zulassungssteuer",
    itp: "ITP (Grunderwerbsteuer)",
    dgt: "DGT-Gebühr",
    itv: "ITV-Inspektion",
    plates: "Kennzeichen & Admin",
    totalImportCost: "Gesamte Importkosten",
    calculationDetails: "Berechnungsdetails",
    depreciation: "Angewandte Abschreibung:",
    taxBase: "Steuerbasis:",
    taxRate: "Steuersatz:",
    saveDownload: "Speichern & PDF herunterladen",
    watchAd: "📺 Werbung ansehen zum Herunterladen",
    loadingAd: "(Lädt...)",
    // Tooltips
    originCountryInfo:
      "Das Land, in dem das Fahrzeug derzeit zugelassen ist oder herkommt.",
    vehicleSearchInfo:
      "Finden Sie Ihr genaues Modell, um den offiziellen Steuerwert zu erhalten.",
    yearInfo:
      "Modelle nach Jahr filtern. Beeinflusst die Steuer nicht direkt, hilft bei der Suche.",
    carPriceInfo: "Der Preis, den Sie für das Auto zahlen (Kaufpreis).",
    ageInfo:
      "Das heutige Alter des Autos. Wird zur Berechnung der Abschreibung verwendet.",
    co2Info:
      "CO2-Emissionen in g/km (siehe Datenblatt). Beeinflusst die Zulassungssteuer.",
    sellerTypeInfo:
      "Kauf vom Händler vermeidet ITP-Steuer. Kauf von Privatperson: 4% ITP.",
    pdfTitle: "Importkostenvoranschlag",
    // Footer
    footer_privacy: "Datenschutz",
    footer_terms: "Nutzungsbedingungen",
    footer_about: "Über uns",
    footer_howItWorks: "Wie es funktioniert",
    footer_rights: "Alle Rechte vorbehalten.",
    // Privacy Policy
    privacy_title: "Datenschutzerklärung",
    privacy_intro: "Wir (ImportEspana) respektieren Ihre Privatsphäre.",
    privacy_section1_title: "1. Datenerfassung",
    privacy_section1_text:
      "Wir erfassen keine persönlichen Daten direkt. Wir nutzen jedoch Drittanbieter-Dienste.",
    privacy_section2_title: "2. Drittanbieter-Dienste",
    privacy_section2_text:
      "Wir nutzen Google AdSense und AdMob. Diese können Gerätedaten erfassen.",
    privacy_list_id: "Gerätekennungen",
    privacy_list_usage: "Nutzungsdaten",
    privacy_list_loc: "Ungefährer Standort",
    privacy_list_cookies: "Cookies für Werbung",
    privacy_contact_title: "Kontakt",
    privacy_contact_email: "info@importespana.com",
    // Terms
    terms_title: "Nutzungsbedingungen",
    terms_last_updated: "Zuletzt aktualisiert: 11. Februar 2026",
    back_to_home: "← Zurück zur Startseite",
    terms_section1_title: "1. Akzeptanz",
    terms_section1_text:
      "Durch die Nutzung von ImportEspana stimmen Sie diesen Bedingungen zu.",
    terms_section2_title: "2. Haftungsausschluss",
    terms_section2_text:
      "ImportEspana ist ein Berechnungstool. Wir garantieren keine 100%ige Genauigkeit.",
    // About
    about_title: "Über uns",
    about_text1:
      "Willkommen bei ImportEspana, dem führenden Tool zur Berechnung von Importsteuern in Spanien.",
    about_text2: "Unsere Mission ist es, den Importprozess zu vereinfachen.",
    // How It Works
    hiw_title: "Wie ImportEspana funktioniert",
    hiw_subtitle: "Verstehen Sie den Steuerberechnungsprozess.",
    hiw_step1_title: "1. Herkunft wählen",
    hiw_step1_text:
      "Wählen Sie das Herkunftsland (z.B. Deutschland, Frankreich).",
    hiw_step2_title: "2. Fahrzeugdaten eingeben",
    hiw_step2_text: "Geben Sie Marke, Modell, Alter und CO2 ein.",
    hiw_step3_title: "3. Sofortige Berechnung",
    hiw_step3_text:
      "Unser Algorithmus berechnet die Steuern basierend auf CO2 und Wert.",
    hiw_step4_title: "4. Gesamtkosten",
    hiw_step4_text: "Sehen Sie eine vollständige Aufschlüsselung aller Kosten.",
    hiw_cta_title: "Bereit?",
    hiw_cta_text: "Erhalten Sie präzise Schätzungen in Sekunden.",
    hiw_cta_button: "Zum Rechner",
  },
  fr: {
    originCountry: "Pays d'origine",
    carPrice: "Prix du véhicule (€)",
    vehicleSearch: "Recherche de véhicule",
    brand: "Marque",
    model: "Modèle",
    yearOptional: "Année (optionnel)",
    co2: "Émissions CO2 (g/km)",
    age: "Âge du véhicule",
    sellerType: "Type de vendeur",
    dealer: "Concessionnaire",
    private: "Particulier",
    calculate: "Calculer le coût total",
    privateSaleWarning:
      "⚠️ Les ventes privées peuvent encourir 4% de taxe ITP.",
    evDetected: "⚡ Véhicule électrique détecté - CO2 = 0",
    priceError: "Entrez un prix valide",
    co2Error: "Entrez les émissions de CO2",
    fiscalError: "Sélectionnez un véhicule ou entrez la valeur fiscale",
    manualEntryLink: "Véhicule introuvable ? Entrez la valeur manuellement →",
    manualEntryLabel: "Valeur Fiscale Officielle (€)",
    manualEntryHelp: "Entrez la valeur d'expertise selon le tableau fiscal",
    confirmValue: "✓ Confirmer la valeur",
    backToSearch: "Retour à la recherche",
    estimatedTotal: "COÛT TOTAL ESTIMÉ",
    includes: "Inclut le prix du véhicule + toutes les taxes",
    breakdown: "Détail des coûts",
    taxesFees: "TAXES ET FRAIS (Espagne)",
    registrationTax: "Taxe d'immatriculation",
    itp: "ITP (Taxe de transfert)",
    dgt: "Frais DGT",
    itv: "Inspection ITV",
    plates: "Plaques et administration",
    totalImportCost: "Coût total d'importation",
    calculationDetails: "Détails du calcul",
    depreciation: "Dépréciation appliquée :",
    taxBase: "Base imposable :",
    taxRate: "Taux d'imposition :",
    saveDownload: "Enregistrer et télécharger le PDF",
    watchAd: "📺 Regarder une pub pour télécharger",
    loadingAd: "(Chargement...)",
    // Tooltips
    originCountryInfo:
      "Le pays où le véhicule est actuellement immatriculé ou d'où il provient.",
    vehicleSearchInfo:
      "Trouvez votre modèle exact pour obtenir la valeur fiscale officielle.",
    yearInfo:
      "Filtrer les modèles par année. N'affecte pas directement la taxe.",
    carPriceInfo: "Le prix que vous payez pour la voiture (Prix d'achat).",
    ageInfo:
      "L'âge de la voiture aujourd'hui. Utilisé pour calculer la dépréciation.",
    co2Info:
      "Émissions de CO2 en g/km (voir fiche technique). Affecte la taxe d'immatriculation.",
    sellerTypeInfo:
      "L'achat chez un concessionnaire évite la taxe ITP. L'achat à un particulier encourt 4% d'ITP.",
    pdfTitle: "Devis d'importation",
    // Footer
    footer_privacy: "Politique de confidentialité",
    footer_terms: "Conditions d'utilisation",
    footer_about: "À propos",
    footer_howItWorks: "Comment ça marche",
    footer_rights: "Tous droits réservés.",
    // Privacy Policy
    privacy_title: "Politique de Confidentialité",
    privacy_intro: "Nous (ImportEspana) respectons votre vie privée.",
    privacy_section1_title: "1. Données collectées",
    privacy_section1_text:
      "Nous ne collectons pas de données personnelles directement. Cependant, nous utilisons des services tiers.",
    privacy_section2_title: "2. Services Tiers",
    privacy_section2_text:
      "Nous utilisons Google AdSense et AdMob. Ils peuvent collecter des données sur l'appareil.",
    privacy_list_id: "Identifiants d'appareil",
    privacy_list_usage: "Données d'utilisation",
    privacy_list_loc: "Localisation approximative",
    privacy_list_cookies: "Cookies publicitaires",
    privacy_contact_title: "Contactez-nous",
    privacy_contact_email: "info@importespana.com",
    // Terms
    terms_title: "Conditions d'utilisation",
    terms_last_updated: "Dernière mise à jour : 11 février 2026",
    back_to_home: "← Retour à l'accueil",
    terms_section1_title: "1. Acceptation",
    terms_section1_text:
      "En utilisant ImportEspana, vous acceptez ces conditions.",
    terms_section2_title: "2. Avertissement",
    terms_section2_text:
      "ImportEspana est un outil de calcul. Nous ne garantissons pas une précision à 100%.",
    // About
    about_title: "À propos",
    about_text1:
      "Bienvenue sur ImportEspana, l'outil leader pour le calcul des taxes d'importation.",
    about_text2:
      "Notre mission est de simplifier le processus d'importation en Espagne.",
    // How It Works
    hiw_title: "Comment fonctionne ImportEspana",
    hiw_subtitle: "Comprenez le processus de calcul des taxes.",
    hiw_step1_title: "1. Sélectionner l'origine",
    hiw_step1_text: "Choisissez le pays d'origine (ex: Allemagne, France).",
    hiw_step2_title: "2. Données du véhicule",
    hiw_step2_text: "Entrez la marque, le modèle, l'âge et le CO2.",
    hiw_step3_title: "3. Calcul instantané",
    hiw_step3_text: "Notre algorithme calcule la taxe d'immatriculation.",
    hiw_step4_title: "4. Coût total",
    hiw_step4_text: "Voyez le détail complet des coûts.",
    hiw_cta_title: "Prêt ?",
    hiw_cta_text: "Obtenez des estimations précises.",
    hiw_cta_button: "Aller à la calculatrice",
  },
};
