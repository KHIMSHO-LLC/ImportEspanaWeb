import type { Language } from "@/constants/translations";

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_DATA: Record<Language, FAQItem[]> = {
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
  en: [
    // Costs
    {
      question: "How much is the registration tax in Spain?",
      answer:
        "Registration tax depends on CO2 emissions: 0% for under 120 g/km, 4.75% from 120–159 g/km, 9.75% from 160–199 g/km, and 14.75% above 200 g/km. Our calculator uses the official BOE tables to determine the exact fiscal value of your model.",
    },
    {
      question: "What costs are involved in importing a car to Spain?",
      answer:
        "Main costs: 1) Registration Tax (IEDMT) on BOE fiscal value; 2) ITP (4–8% of value if buying privately); 3) Import ITV (€150–300); 4) DGT fees (~€100); 5) License plates (~€50); and 6) Agency (€200–400, optional but recommended). Total typically €1,500–5,000 depending on the car's value.",
    },
    {
      question: "Do electric cars pay the registration tax?",
      answer:
        "Pure EVs (BEV) are exempt from the registration tax with 0 g/km CO2. You'll still pay ITV, DGT and plates. Plug-in hybrids (PHEV) with over 40 km electric range can also be exempt in some cases.",
    },
    {
      question: "Can I bring my car to Spain via Cambio de Residencia?",
      answer:
        "Yes — apply for the registration-tax exemption by change of residence. You must have owned the car at least 6 months before moving to Spain and apply within 60 days of arriving. Filed at the Tax Agency.",
    },
    {
      question: "How much does it cost to ship a car from Germany to Spain?",
      answer:
        "Shipping a car from Germany to Spain costs €800–1,500 depending on distance, transport type (open or enclosed) and the company. Munich–Madrid runs €1,000–1,200 on an open trailer. Sea freight from Northern European ports can be slightly cheaper.",
    },
    {
      question: "What is the tax base for the registration tax?",
      answer:
        "The tax base is the car's value per BOE (Official State Gazette) tables, adjusted by a depreciation coefficient based on the vehicle's age. It's not the purchase price but a reference fiscal value. Our calculator finds it automatically from brand, model and year.",
    },
    // Process
    {
      question: "What are the steps to register a foreign car in Spain?",
      answer:
        "5 steps: 1) Special import ITV with technical sheet; 2) Pay registration tax at Tax Agency (Form 576); 3) Pay ITP if buying privately (Form 600); 4) Pay IVTM (sticker) at the Town Hall; 5) DGT appointment for the registration permit. Full process usually 4–8 weeks.",
    },
    {
      question: "What documents do I need to import a car?",
      answer:
        "You'll need: Certificate of Conformity (COC) from the manufacturer, technical sheet from the country of origin, sales contract or invoice, buyer's DNI/NIE, proof of tax payment (Forms 576 and 600 as applicable), passed import ITV, and the foreign registration certificate. From outside the EU, you also need the DUA (Single Customs Declaration).",
    },
    {
      question: "How long does registering an imported car take?",
      answer:
        "The full process typically takes 4–8 weeks depending on region and DGT load. ITV can be done in 1–2 weeks. Tax payment is immediate. The DGT appointment is usually 2–4 weeks. Hiring an agency speeds it up significantly.",
    },
    {
      question: "Do I need an agency (gestoría) to import a car?",
      answer:
        "Not mandatory, but highly recommended. An agency knows the procedures, deadlines and forms — fewer mistakes, less time. Cost is €200–400, reasonable for the weeks of paperwork it can save.",
    },
    {
      question: "What is the import ITV and where do I take it?",
      answer:
        "The import ITV is a special technical inspection for foreign-registered vehicles. It's done at any authorised ITV station in Spain. Bring the technical sheet from the country of origin. If it passes, you receive the certificate needed to continue with registration.",
    },
    {
      question: "Is there a deadline to register my imported car?",
      answer:
        "Yes. If you reside in Spain and have imported the car, you have 30 days from the vehicle's entry into the country to start registration. Missing the deadline can result in penalties. For Cambio de Residencia, the deadline is 60 days from arrival in Spain.",
    },
    // Vehicles
    {
      question: "Is it profitable to import a car from Germany to Spain?",
      answer:
        "Yes — it's often profitable to import mid-to-high-end cars (Audi, BMW, Mercedes) from Germany. Larger supply, better condition and lower prices than Spain. Savings range €2,000–10,000 even after taxes. Models 3–6 years old are usually most profitable.",
    },
    {
      question: "Which cars are cheapest to import from Germany to Spain?",
      answer:
        "Most profitable from Germany: BMW 3/5 series, Mercedes C/E, Audi A4/A6, Volkswagen Golf/Passat and EVs like the BMW i3 or Volkswagen ID.3. EVs have the extra advantage of being exempt from the registration tax.",
    },
    {
      question: "How do I find my imported car's CO2 figure?",
      answer:
        "CO2 is on the Certificate of Conformity (COC) or technical sheet. You can also find it on the manufacturer's website using the VIN. For German cars, TÜV records and the Zulassungsbescheinigung also contain this info.",
    },
    {
      question: "Can I import a hybrid or EV from outside the EU?",
      answer:
        "Yes — you can import hybrids and EVs from outside the EU (e.g. UAE, USA), but the process is more complex. On top of VAT (21%) and customs duty (10% for non-EU), you'll need individual homologation, costing €1,000–3,000. EVs are still exempt from the registration tax.",
    },
    {
      question: "What happens if my imported car fails the ITV?",
      answer:
        "If the import ITV is failed, you'll get a defect report. Repair them and resubmit. Minor faults ('Desfavorable Leve') let you drive for a limited time to fix things. Serious faults ('Negativa') prevent driving until repaired.",
    },
    // Regional
    {
      question: "Which Spanish region has the lowest ITP?",
      answer:
        "Madrid, Andalusia, Aragón, Murcia, Navarre, the Basque Country and La Rioja have Spain's lowest ITP for used vehicles at 4%. Canary Islands, Ceuta and Melilla are special cases: no ITP (they use IGIC or IPSI). At the high end: Asturias, Cantabria and Galicia at 8%. Difference can be hundreds of euros depending on car value.",
    },
    {
      question: "What is the ITP in Madrid, Barcelona and Valencia?",
      answer:
        "ITP rates: Madrid (Comunidad de Madrid): 4%, Barcelona (Catalonia): 6%, Valencia (Valencia region): 6%. On a €20,000 used car bought privately, you'd pay €800 in Madrid, €1,200 in Barcelona and €1,200 in Valencia. Bigger gaps for higher-value cars.",
    },
    {
      question: "Where is it best to register an imported car?",
      answer:
        "You must register the car in the region where you have habitual residence — you can't pick freely to pay less ITP. If you can legally change residence, Madrid (4%), Andalusia (4%) and Aragón (4%) are the most favourable peninsular regions. The Canary Islands have no ITP but use IGIC.",
    },
    {
      question: "Is it better to buy from a dealer or private seller when importing?",
      answer:
        "From a dealer: you pay VAT at origin (already included in the German price), no ITP in Spain, but base price is higher. From a private seller: lower base price, but you pay ITP (4–8%) on registration in Spain. For high-value cars, dealer purchases are usually cheaper in total taxes.",
    },
    // Dubai
    {
      question: "Can I import a car from Dubai to Spain?",
      answer:
        "Yes, importing cars from Dubai (UAE) to Spain is legal, though more complex than EU imports. You'll pay customs duty (10% of car value), import VAT (21%), the registration tax (per CO2), and individual homologation costs (mandatory for cars not homologated in the EU). Sea freight from the UAE can run €1,500–3,000.",
    },
    {
      question: "What customs duties apply when importing a car from Dubai?",
      answer:
        "Importing from Dubai (non-EU) you'll pay: customs duty: 10% on CIF value (cost + insurance + freight), the EU general tariff (TARIC 8703); import VAT: 21% on CIF + duty; registration tax: per CO2 (0–14.75%); individual homologation: €1,000–3,000 by model. Some FTA countries (Japan, South Korea, UK) may have reduced or 0% duty.",
    },
    {
      question: "Is it worth importing a luxury car from Dubai?",
      answer:
        "It can pay off for very specific luxury cars unavailable in Europe or much pricier here — certain Lamborghini, Ferrari or American cars like the Dodge Challenger. But extra costs (10% duty on CIF, 21% VAT, individual homologation €1,500–3,000, transport €1,500–3,000) are significant — calculate carefully before deciding.",
    },
    {
      question: "What is individual homologation and when is it needed?",
      answer:
        "Individual homologation is a process where a technical body certifies the vehicle complies with Spanish and EU safety and emissions rules. Mandatory for cars imported from outside the EU without European (EC) type approval. Cost: €800–3,000 depending on model and required adaptations.",
    },
    {
      question: "Are Dubai cars right-hand drive?",
      answer:
        "No — in Dubai and the UAE driving is on the right, so cars are left-hand drive, same as Spain. This eases the import. However, the UAE market includes many American or Japanese cars whose specs may differ from European ones, complicating or increasing homologation cost.",
    },
    {
      question: "Can I import an EV from the UAE?",
      answer:
        "Yes — EVs can be imported from the UAE. Tesla is common there. Being electric (0 g/km CO2), you're exempt from the registration tax. You still pay duty (10%), VAT (21%) and possibly homologation. For Tesla models already type-approved in the EU, the process is simpler.",
    },
    {
      question: "How much does sea freight from Dubai to Spain cost?",
      answer:
        "Shipping a car from Dubai (Jebel Ali) to Spain (Valencia, Barcelona or Algeciras) costs €1,500–3,000, with 20–35 days transit. Transport insurance is mandatory and adds 1–2% of the vehicle value. Customs clearance in Spain is €200–400 extra.",
    },
  ],
  ru: [
    // Расходы
    {
      question: "Сколько стоит регистрационный налог в Испании?",
      answer:
        "Налог зависит от выбросов CO2: 0% до 120 г/км, 4,75% при 120–159 г/км, 9,75% при 160–199 г/км и 14,75% выше 200 г/км. Калькулятор использует официальные таблицы BOE для точной налоговой стоимости вашей модели.",
    },
    {
      question: "Какие расходы при импорте авто в Испанию?",
      answer:
        "Основные расходы: 1) Регистрационный налог (IEDMT) от налоговой стоимости BOE; 2) ITP (4–8% при покупке у частника); 3) Импортный ITV (150–300 €); 4) Сборы DGT (~100 €); 5) Номера (~50 €); 6) Гестория (200–400 €, по желанию). Итого 1 500–5 000 € в зависимости от стоимости авто.",
    },
    {
      question: "Платят ли электромобили регистрационный налог?",
      answer:
        "Полные BEV освобождены от регистрационного налога (0 г/км CO2). Остаются ITV, сборы DGT и номера. PHEV с электрозапасом более 40 км в ряде случаев тоже освобождены.",
    },
    {
      question: "Можно ли ввезти авто в Испанию по смене резидентства?",
      answer:
        "Да, можно подать на освобождение от регистрационного налога по смене резидентства. Нужно владеть авто не менее 6 месяцев до переезда и подать заявку в первые 60 дней после прибытия в Испанию. Подаётся в налоговую.",
    },
    {
      question: "Сколько стоит транспорт авто из Германии в Испанию?",
      answer:
        "800–1 500 € в зависимости от расстояния, типа транспорта (открытый/закрытый) и компании. Мюнхен–Мадрид обычно 1 000–1 200 € открытым автовозом. Морская доставка из портов севера Европы может быть чуть дешевле.",
    },
    {
      question: "Что такое налоговая база регистрационного налога?",
      answer:
        "Налоговая база — стоимость авто по таблицам BOE с поправкой на коэффициент амортизации по возрасту. Это не цена покупки, а эталонная налоговая стоимость. Калькулятор определяет её автоматически по марке, модели и году.",
    },
    // Процесс
    {
      question: "Какие шаги для регистрации иностранного авто в Испании?",
      answer:
        "5 шагов: 1) Импортный ITV по техпаспорту; 2) Оплата регистрационного налога в налоговой (форма 576); 3) Оплата ITP при покупке у частника (форма 600); 4) Оплата IVTM (наклейка) в мэрии; 5) Запись в DGT для разрешения на движение. Полный процесс 4–8 недель.",
    },
    {
      question: "Какие документы нужны для импорта авто?",
      answer:
        "Понадобятся: COC производителя, техпаспорт страны вылета, договор/счёт-фактура, DNI/NIE покупателя, подтверждения оплаты налогов (формы 576 и 600 при необходимости), пройденный импортный ITV и иностранный техпаспорт. Из вне ЕС — также DUA.",
    },
    {
      question: "Сколько занимает регистрация импортного авто?",
      answer:
        "Полный процесс 4–8 недель в зависимости от региона и нагрузки DGT. ITV — 1–2 недели. Налоги — сразу. Запись DGT — 2–4 недели. Гестория значительно ускоряет процесс.",
    },
    {
      question: "Нужна ли гестория для импорта авто?",
      answer:
        "Не обязательна, но крайне желательна. Гестория знает процедуры, сроки и формы — меньше ошибок и времени. Стоит 200–400 €, что разумно с учётом сэкономленных недель.",
    },
    {
      question: "Что такое импортный ITV и где его пройти?",
      answer:
        "Импортный ITV — техосмотр для иностранно зарегистрированных авто. Делается на любой авторизованной станции ITV. Нужен техпаспорт страны вылета. После прохождения выдают сертификат для дальнейшей регистрации.",
    },
    {
      question: "Есть ли срок для регистрации импортного авто?",
      answer:
        "Да. Резидент Испании, ввезя авто, должен начать регистрацию в течение 30 дней с момента ввоза. Просрочка — штрафы. Для смены резидентства срок — 60 дней с прибытия в Испанию.",
    },
    // Авто
    {
      question: "Выгодно ли импортировать авто из Германии в Испанию?",
      answer:
        "Да, особенно средний и премиум-сегмент (Audi, BMW, Mercedes). Шире выбор, лучше состояние и цены ниже, чем в Испании. Экономия 2 000–10 000 € даже после налогов. Самые выгодные — модели 3–6 лет.",
    },
    {
      question: "Какие авто выгоднее всего импортировать из Германии?",
      answer:
        "Лучше всего: BMW 3/5 серии, Mercedes C/E, Audi A4/A6, Volkswagen Golf/Passat и электромобили (BMW i3, VW ID.3). У электрокаров бонус — освобождение от регистрационного налога.",
    },
    {
      question: "Как узнать выбросы CO2 у моего импортного авто?",
      answer:
        "CO2 указан в COC или техпаспорте. Можно посмотреть на сайте производителя по VIN. Для немецких авто эти данные есть в TÜV и Zulassungsbescheinigung.",
    },
    {
      question: "Можно ли ввезти гибрид или электромобиль из вне ЕС?",
      answer:
        "Да, можно ввозить гибриды и электромобили из вне ЕС (например, ОАЭ, США), но процесс сложнее. Помимо НДС (21%) и пошлины (10% для не-ЕС), нужна индивидуальная омологация (1 000–3 000 €). Электромобили освобождены от регистрационного налога.",
    },
    {
      question: "Что если авто не пройдёт ITV?",
      answer:
        "Получите отчёт с дефектами. Исправляете и приходите снова. Лёгкие дефекты ('Desfavorable Leve') позволяют ездить ограниченное время для ремонта. Серьёзные ('Negativa') — езда запрещена до устранения.",
    },
    // Регионы
    {
      question: "В каком регионе самый низкий ITP в Испании?",
      answer:
        "Самый низкий ITP (4%) в Мадриде, Андалусии, Арагоне, Мурсии, Наварре, Стране Басков и Ла-Риохе для подержанных авто. Канары, Сеута и Мелилья — без ITP (используют IGIC или IPSI). На максимуме (8%): Астурия, Кантабрия и Галисия. Разница может составить сотни евро.",
    },
    {
      question: "Какой ITP в Мадриде, Барселоне и Валенсии?",
      answer:
        "Ставки ITP: Мадрид: 4%, Барселона (Каталония): 6%, Валенсия: 6%. Для авто 20 000 € у частника: 800 € в Мадриде, 1 200 € в Барселоне и 1 200 € в Валенсии. Для дорогих авто разница ещё больше.",
    },
    {
      question: "Где лучше регистрировать импортное авто?",
      answer:
        "Регистрация — в регионе вашего фактического проживания, нельзя выбрать произвольно ради меньшего ITP. Если можно легально сменить резидентство — Мадрид (4%), Андалусия (4%) и Арагон (4%) — самые выгодные на полуострове. На Канарах ITP нет, но действует IGIC.",
    },
    {
      question: "Что лучше при импорте: дилер или частник?",
      answer:
        "У дилера: НДС в стране-производителе уже в цене, ITP в Испании не платится, но базовая цена выше. У частника: цена ниже, но платится ITP (4–8%). Для дорогих авто покупка у дилера часто выгоднее по сумме налогов.",
    },
    // Дубай
    {
      question: "Можно ли импортировать авто из Дубая в Испанию?",
      answer:
        "Да, импорт авто из Дубая (ОАЭ) законен, но сложнее, чем из ЕС. Платятся пошлина (10% от стоимости авто), импортный НДС (21%), регистрационный налог (по CO2) и индивидуальная омологация (обязательна для не-ЕС-авто). Морская доставка из ОАЭ — 1 500–3 000 €.",
    },
    {
      question: "Какие пошлины при импорте авто из Дубая?",
      answer:
        "Из Дубая (вне ЕС): пошлина 10% от стоимости CIF (цена + страховка + фрахт), общая ставка ЕС (TARIC 8703); импортный НДС 21% от (CIF + пошлина); регистрационный налог по CO2 (0–14,75%); индивидуальная омологация 1 000–3 000 €. У стран с FTA с ЕС (Япония, Корея, UK) пошлина может быть снижена или 0%.",
    },
    {
      question: "Стоит ли импортировать люкс-авто из Дубая?",
      answer:
        "Может быть выгодно для специфических люкс-моделей, недоступных в Европе или дороже здесь — некоторые Lamborghini, Ferrari, американские модели (Dodge Challenger). Но дополнительные расходы (10% пошлины с CIF, 21% НДС, омологация 1 500–3 000 €, транспорт 1 500–3 000 €) значительны. Считайте на калькуляторе.",
    },
    {
      question: "Что такое индивидуальная омологация и когда она нужна?",
      answer:
        "Индивидуальная омологация — процесс подтверждения техническим органом соответствия авто испанским и европейским нормам безопасности и выбросов. Обязательна для авто из вне ЕС без европейского одобрения типа (EC). Стоимость 800–3 000 € по модели и адаптациям.",
    },
    {
      question: "В Дубае праворульные авто?",
      answer:
        "Нет — в ОАЭ движение правостороннее, руль слева, как в Испании. Это упрощает импорт. Но рынок ОАЭ включает много американских и японских авто с другими спецификациями, что усложняет/удорожает омологацию.",
    },
    {
      question: "Можно ли импортировать электромобиль из ОАЭ?",
      answer:
        "Да, электромобили можно ввозить из ОАЭ. Tesla там распространены. Электрокар (0 г/км CO2) — без регистрационного налога. Пошлина (10%), НДС (21%) и возможная омологация остаются. У моделей Tesla с европейским одобрением процесс проще.",
    },
    {
      question: "Сколько стоит морская доставка из Дубая в Испанию?",
      answer:
        "Из Дубая (Джебель-Али) в Испанию (Валенсия, Барселона, Альхесирас) — 1 500–3 000 €, транзит 20–35 дней. Страховка обязательна, ещё 1–2% стоимости авто. Таможенное оформление в Испании — 200–400 €.",
    },
  ],
  de: [
    // Kosten
    {
      question: "Wie hoch ist die Zulassungssteuer in Spanien?",
      answer:
        "Die Zulassungssteuer hängt von den CO2-Emissionen ab: 0% unter 120 g/km, 4,75% bei 120–159 g/km, 9,75% bei 160–199 g/km und 14,75% über 200 g/km. Unser Rechner nutzt die offiziellen BOE-Tabellen für den exakten Steuerwert Ihres Modells.",
    },
    {
      question: "Welche Kosten fallen beim Auto-Import nach Spanien an?",
      answer:
        "Hauptkosten: 1) Zulassungssteuer (IEDMT) auf BOE-Steuerwert; 2) ITP (4–8% bei Privatkauf); 3) Import-ITV (150–300 €); 4) DGT-Gebühren (~100 €); 5) Kennzeichen (~50 €); 6) Gestoría (200–400 €, optional). Insgesamt 1.500–5.000 € je nach Fahrzeugwert.",
    },
    {
      question: "Zahlen Elektroautos die Zulassungssteuer?",
      answer:
        "Reine BEV sind mit 0 g/km CO2 von der Zulassungssteuer befreit. ITV, DGT und Kennzeichen fallen weiterhin an. Plug-in-Hybride mit über 40 km elektrischer Reichweite können in Einzelfällen ebenfalls befreit sein.",
    },
    {
      question: "Kann ich mein Auto bei Wohnsitzwechsel nach Spanien bringen?",
      answer:
        "Ja — Sie können die Befreiung über Cambio de Residencia beantragen. Sie müssen das Auto mindestens 6 Monate vor dem Umzug besessen haben und den Antrag innerhalb von 60 Tagen nach Ankunft stellen. Bei der Steuerbehörde einzureichen.",
    },
    {
      question: "Was kostet der Transport eines Autos von Deutschland nach Spanien?",
      answer:
        "Der Transport kostet 800–1.500 € je nach Distanz, Transportart (offen/geschlossen) und Anbieter. München–Madrid liegt meist bei 1.000–1.200 € auf offenem LKW. Seetransport aus nordeuropäischen Häfen kann etwas günstiger sein.",
    },
    {
      question: "Was ist die Bemessungsgrundlage der Zulassungssteuer?",
      answer:
        "Die Bemessungsgrundlage ist der Fahrzeugwert nach BOE-Tabellen, angepasst um einen Abschreibungsfaktor je nach Alter. Es ist nicht der Kaufpreis, sondern ein steuerlicher Referenzwert. Unser Rechner ermittelt ihn automatisch aus Marke, Modell und Jahr.",
    },
    // Prozess
    {
      question: "Welche Schritte zur Zulassung eines ausländischen Autos in Spanien?",
      answer:
        "5 Schritte: 1) Spezielles Import-ITV mit Fahrzeugschein; 2) Zahlung der Zulassungssteuer beim Finanzamt (Formular 576); 3) Zahlung der ITP bei Privatkauf (Formular 600); 4) IVTM (Aufkleber) im Rathaus; 5) DGT-Termin für die Zulassung. Gesamtprozess 4–8 Wochen.",
    },
    {
      question: "Welche Unterlagen brauche ich für den Auto-Import?",
      answer:
        "Sie benötigen: Konformitätsbescheinigung (COC) des Herstellers, ausländischen Fahrzeugschein, Kaufvertrag/Rechnung, DNI/NIE des Käufers, Steuerzahlungsnachweise (Formulare 576 und 600), bestandenes Import-ITV, ausländischer Zulassungsschein. Bei Nicht-EU-Importen zusätzlich DUA (Einheitliche Zollanmeldung).",
    },
    {
      question: "Wie lange dauert die Zulassung eines importierten Autos?",
      answer:
        "Insgesamt 4–8 Wochen, je nach Region und DGT-Auslastung. ITV in 1–2 Wochen, Steuerzahlung sofort, DGT-Termin 2–4 Wochen. Eine Gestoría beschleunigt den Prozess deutlich.",
    },
    {
      question: "Brauche ich eine Gestoría für den Auto-Import?",
      answer:
        "Nicht zwingend, aber sehr empfehlenswert. Die Gestoría kennt Verfahren, Fristen und Formulare — weniger Fehler, weniger Zeit. Kosten 200–400 €, vertretbar angesichts gesparter Wochen.",
    },
    {
      question: "Was ist die Import-ITV und wo wird sie gemacht?",
      answer:
        "Die Import-ITV ist eine spezielle technische Inspektion für ausländisch zugelassene Fahrzeuge. Sie erfolgt an jeder zugelassenen ITV-Station in Spanien mit dem Fahrzeugschein des Herkunftslandes. Bei Bestehen erhalten Sie das Zertifikat für die weitere Zulassung.",
    },
    {
      question: "Gibt es eine Frist für die Zulassung meines importierten Autos?",
      answer:
        "Ja. Wenn Sie in Spanien wohnen und das Auto importiert haben, müssen Sie die Zulassung innerhalb von 30 Tagen ab Einfuhr beginnen — sonst drohen Sanktionen. Bei Cambio de Residencia: 60 Tage ab Ankunft.",
    },
    // Fahrzeuge
    {
      question: "Lohnt sich ein Auto-Import aus Deutschland nach Spanien?",
      answer:
        "Ja — vor allem in der Mittel- und Oberklasse (Audi, BMW, Mercedes). Größeres Angebot, oft besserer Zustand und niedrigere Preise als in Spanien. Ersparnis 2.000–10.000 € auch nach Steuern. Am rentabelsten meist Modelle 3–6 Jahre alt.",
    },
    {
      question: "Welche Autos sind aus Deutschland am günstigsten zu importieren?",
      answer:
        "Am rentabelsten: BMW 3/5er, Mercedes C/E, Audi A4/A6, Volkswagen Golf/Passat und E-Autos wie BMW i3 oder VW ID.3. E-Autos sind zudem von der Zulassungssteuer befreit.",
    },
    {
      question: "Wie finde ich den CO2-Wert meines importierten Autos?",
      answer:
        "Der CO2-Wert steht in der COC oder im Fahrzeugschein. Auch über die Hersteller-Webseite via VIN. Bei deutschen Autos auch in TÜV-Daten und Zulassungsbescheinigung.",
    },
    {
      question: "Kann ich Hybrid oder E-Auto aus Nicht-EU importieren?",
      answer:
        "Ja — Hybrid und E-Autos können aus Nicht-EU (z. B. VAE, USA) importiert werden, das Verfahren ist aber komplexer. Zusätzlich zur MwSt. (21%) und Zoll (10% für Nicht-EU) brauchen Sie eine Einzelabnahme (1.000–3.000 €). E-Autos sind weiterhin von der Zulassungssteuer befreit.",
    },
    {
      question: "Was passiert, wenn mein importiertes Auto die ITV nicht besteht?",
      answer:
        "Sie erhalten einen Mängelbericht. Mängel beheben und erneut vorführen. Leichte Mängel ('Desfavorable Leve') erlauben begrenztes Fahren zur Reparatur. Schwere Mängel ('Negativa') verbieten das Fahren bis zur Reparatur.",
    },
    // Regional
    {
      question: "Welche Region hat die niedrigste ITP Spaniens?",
      answer:
        "Madrid, Andalusien, Aragonien, Murcia, Navarra, Baskenland und La Rioja haben mit 4% Spaniens niedrigste ITP für Gebrauchtwagen. Kanaren, Ceuta und Melilla: keine ITP (sondern IGIC oder IPSI). Spitzenwerte (8%): Asturien, Kantabrien und Galicien. Hunderte Euro Unterschied je nach Fahrzeugwert.",
    },
    {
      question: "Wie hoch ist die ITP in Madrid, Barcelona und Valencia?",
      answer:
        "ITP-Sätze: Madrid: 4%, Barcelona (Katalonien): 6%, Valencia: 6%. Bei einem 20.000-€-Gebrauchtwagen vom Privatverkäufer: 800 € in Madrid, 1.200 € in Barcelona, 1.200 € in Valencia. Bei höheren Werten wird der Unterschied deutlicher.",
    },
    {
      question: "Wo lohnt es sich, ein importiertes Auto zuzulassen?",
      answer:
        "Sie müssen das Auto in Ihrer tatsächlichen Wohnregion zulassen — keine freie Wahl zugunsten niedrigerer ITP. Falls legal Wohnsitzwechsel möglich: Madrid (4%), Andalusien (4%) und Aragonien (4%) sind die günstigsten Festlandregionen. Kanaren erheben keine ITP, dafür IGIC.",
    },
    {
      question: "Kauf vom Händler oder Privat beim Import?",
      answer:
        "Beim Händler: MwSt. im Ursprungsland enthalten (im deutschen Preis), keine ITP in Spanien, aber Basispreis höher. Privat: niedriger Basispreis, aber ITP (4–8%) bei Zulassung in Spanien. Bei wertvollen Autos ist der Händlerkauf oft steuerlich günstiger insgesamt.",
    },
    // Dubai
    {
      question: "Kann ich ein Auto aus Dubai nach Spanien importieren?",
      answer:
        "Ja, der Import aus Dubai (VAE) nach Spanien ist legal, aber komplexer als aus der EU. Sie zahlen Zoll (10% des Fahrzeugwerts), Einfuhr-MwSt. (21%), Zulassungssteuer (CO2-abhängig) und Einzelabnahme (Pflicht für nicht in der EU homologierte Autos). Seetransport aus den VAE: 1.500–3.000 €.",
    },
    {
      question: "Welche Zölle fallen beim Auto-Import aus Dubai an?",
      answer:
        "Aus Dubai (Nicht-EU): Zoll 10% auf CIF-Wert (Kosten + Versicherung + Fracht), allgemeiner EU-Tarif (TARIC 8703); Einfuhr-MwSt. 21% auf CIF + Zoll; Zulassungssteuer nach CO2 (0–14,75%); Einzelabnahme 1.000–3.000 € je Modell. Länder mit EU-FTA (Japan, Südkorea, UK) können reduzierten oder 0% Zoll haben.",
    },
    {
      question: "Lohnt sich der Import eines Luxusautos aus Dubai?",
      answer:
        "Kann sich für sehr spezifische Luxusautos lohnen, die in Europa nicht oder nur viel teurer verfügbar sind — bestimmte Lamborghini, Ferrari oder amerikanische Modelle (Dodge Challenger). Zusatzkosten (10% Zoll auf CIF, 21% MwSt., Einzelabnahme 1.500–3.000 €, Transport 1.500–3.000 €) sind aber erheblich — vor der Entscheidung sorgfältig kalkulieren.",
    },
    {
      question: "Was ist die Einzelabnahme und wann ist sie nötig?",
      answer:
        "Die Einzelabnahme ist ein Verfahren, in dem eine technische Stelle bestätigt, dass das Fahrzeug spanischen und europäischen Sicherheits- und Emissionsvorschriften entspricht. Pflicht für Nicht-EU-Importe ohne europäische (EC) Typgenehmigung. Kosten 800–3.000 € je nach Modell und nötigen Anpassungen.",
    },
    {
      question: "Sind Autos aus Dubai Rechtslenker?",
      answer:
        "Nein — in Dubai/den VAE herrscht Rechtsverkehr, die Autos sind Linkslenker, wie in Spanien. Das erleichtert den Import. Allerdings enthält der VAE-Markt viele amerikanische oder japanische Autos mit anderen Spezifikationen — was die Einzelabnahme erschweren oder verteuern kann.",
    },
    {
      question: "Kann ich ein E-Auto aus den VAE importieren?",
      answer:
        "Ja — E-Autos können aus den VAE importiert werden. Tesla ist dort verbreitet. Mit 0 g/km CO2 sind Sie von der Zulassungssteuer befreit. Zoll (10%), MwSt. (21%) und ggf. Einzelabnahme bleiben. Bei in der EU bereits typgenehmigten Tesla-Modellen ist der Prozess einfacher.",
    },
    {
      question: "Was kostet der Seetransport von Dubai nach Spanien?",
      answer:
        "Vom Hafen Jebel Ali nach Spanien (Valencia, Barcelona oder Algeciras) kostet 1.500–3.000 €, Transit 20–35 Tage. Transportversicherung Pflicht, zusätzlich 1–2% des Fahrzeugwertes. Zollabwicklung in Spanien: 200–400 € extra.",
    },
  ],
  fr: [
    // Coûts
    {
      question: "Combien coûte la taxe d'immatriculation en Espagne ?",
      answer:
        "La taxe dépend des émissions de CO2 : 0% sous 120 g/km, 4,75% de 120 à 159 g/km, 9,75% de 160 à 199 g/km, et 14,75% au-delà de 200 g/km. Notre calculatrice utilise les tables officielles du BOE pour la valeur fiscale exacte de votre modèle.",
    },
    {
      question: "Quels coûts pour importer une voiture en Espagne ?",
      answer:
        "Coûts principaux : 1) Taxe d'immatriculation (IEDMT) sur la valeur fiscale BOE ; 2) ITP (4–8% si achat à un particulier) ; 3) ITV import (150–300 €) ; 4) Frais DGT (~100 €) ; 5) Plaques (~50 €) ; 6) Gestoría (200–400 €, optionnel). Total typique 1 500–5 000 € selon la valeur.",
    },
    {
      question: "Les voitures électriques paient-elles la taxe d'immatriculation ?",
      answer:
        "Les VE purs (BEV) sont exonérés de la taxe d'immatriculation à 0 g/km CO2. Vous payez tout de même ITV, DGT et plaques. Les hybrides rechargeables (PHEV) avec plus de 40 km d'autonomie électrique peuvent aussi être exonérés dans certains cas.",
    },
    {
      question: "Puis-je amener ma voiture en Espagne par changement de résidence ?",
      answer:
        "Oui — demandez l'exonération de la taxe d'immatriculation pour Cambio de Residencia. Vous devez avoir possédé la voiture au moins 6 mois avant le déménagement et faire la demande dans les 60 jours suivant l'arrivée. Auprès de l'agence fiscale.",
    },
    {
      question: "Combien coûte le transport d'une voiture d'Allemagne en Espagne ?",
      answer:
        "Le transport coûte 800–1 500 € selon la distance, le type de transport (ouvert ou fermé) et l'entreprise. Munich–Madrid : 1 000–1 200 € en remorque ouverte. Le fret maritime depuis le nord de l'Europe peut être un peu moins cher.",
    },
    {
      question: "Quelle est la base imposable de la taxe d'immatriculation ?",
      answer:
        "La base imposable est la valeur de la voiture selon les tables BOE, ajustée par un coefficient de dépréciation selon l'âge. Ce n'est pas le prix d'achat mais une valeur fiscale de référence. Notre calculatrice la trouve automatiquement à partir de la marque, du modèle et de l'année.",
    },
    // Processus
    {
      question: "Quelles étapes pour immatriculer une voiture étrangère en Espagne ?",
      answer:
        "5 étapes : 1) ITV spéciale d'importation avec la fiche technique ; 2) Paiement de la taxe d'immatriculation à l'agence fiscale (Formulaire 576) ; 3) Paiement ITP si achat particulier (Formulaire 600) ; 4) IVTM (vignette) à la mairie ; 5) Rendez-vous DGT pour le permis de circulation. Total 4–8 semaines.",
    },
    {
      question: "Quels documents pour importer une voiture ?",
      answer:
        "Vous aurez besoin de : Certificat de Conformité (COC) du fabricant, fiche technique du pays d'origine, contrat/facture, DNI/NIE de l'acheteur, justificatifs de paiement des taxes (576 et 600 le cas échéant), ITV d'importation passée, et certificat d'immatriculation étranger. Hors UE : aussi DUA (déclaration douanière unique).",
    },
    {
      question: "Combien de temps prend l'immatriculation d'une voiture importée ?",
      answer:
        "4–8 semaines selon la région et la charge DGT. ITV en 1–2 semaines, taxes immédiates, rendez-vous DGT 2–4 semaines. Une gestoría accélère significativement le processus.",
    },
    {
      question: "Faut-il une gestoría pour importer une voiture ?",
      answer:
        "Pas obligatoire mais très recommandée. Une gestoría connaît les démarches, délais et formulaires — moins d'erreurs, moins de temps. 200–400 €, raisonnable pour les semaines économisées.",
    },
    {
      question: "Qu'est-ce que l'ITV d'importation et où la passer ?",
      answer:
        "L'ITV d'importation est un contrôle technique spécial pour les véhicules immatriculés à l'étranger. Elle se fait dans toute station ITV agréée en Espagne, avec la fiche technique du pays d'origine. Si la voiture la passe, vous obtenez le certificat nécessaire pour l'immatriculation.",
    },
    {
      question: "Y a-t-il un délai pour immatriculer ma voiture importée ?",
      answer:
        "Oui. Si vous résidez en Espagne et avez importé la voiture, vous avez 30 jours dès l'entrée du véhicule dans le pays pour démarrer l'immatriculation. Au-delà : sanctions. Pour Cambio de Residencia : 60 jours dès l'arrivée en Espagne.",
    },
    // Véhicules
    {
      question: "Est-il rentable d'importer une voiture d'Allemagne en Espagne ?",
      answer:
        "Oui — souvent rentable pour le milieu et haut de gamme (Audi, BMW, Mercedes). Offre plus large, meilleur état et prix plus bas qu'en Espagne. Économie 2 000–10 000 € même après taxes. Les modèles 3–6 ans sont en général les plus rentables.",
    },
    {
      question: "Quelles voitures sont les moins chères à importer d'Allemagne ?",
      answer:
        "Les plus rentables d'Allemagne : BMW Série 3/5, Mercedes Classe C/E, Audi A4/A6, Volkswagen Golf/Passat et VE comme la BMW i3 ou la Volkswagen ID.3. Les VE bénéficient en plus de l'exonération de la taxe d'immatriculation.",
    },
    {
      question: "Comment trouver les émissions CO2 de ma voiture importée ?",
      answer:
        "Le CO2 est sur le Certificat de Conformité (COC) ou la fiche technique. Aussi sur le site du fabricant via le VIN. Pour les voitures allemandes, le TÜV et la Zulassungsbescheinigung contiennent aussi cette info.",
    },
    {
      question: "Puis-je importer un hybride ou un VE depuis hors UE ?",
      answer:
        "Oui — vous pouvez importer hybrides et VE depuis hors UE (EAU, États-Unis…), mais le processus est plus complexe. Outre la TVA (21%) et les droits de douane (10% pour hors UE), une homologation individuelle est nécessaire (1 000–3 000 €). Les VE restent exonérés de la taxe d'immatriculation.",
    },
    {
      question: "Que se passe-t-il si ma voiture importée échoue à l'ITV ?",
      answer:
        "Vous recevez un rapport de défauts. À réparer puis représenter. Les défauts mineurs ('Desfavorable Leve') permettent de circuler un temps limité pour réparer. Les défauts graves ('Negativa') interdisent la circulation jusqu'à réparation.",
    },
    // Régional
    {
      question: "Quelle région d'Espagne a l'ITP la plus basse ?",
      answer:
        "Madrid, Andalousie, Aragon, Murcie, Navarre, Pays basque et La Rioja ont l'ITP la plus basse d'Espagne pour les véhicules d'occasion à 4%. Canaries, Ceuta et Melilla : pas d'ITP (IGIC ou IPSI). Plus haut : Asturies, Cantabrie et Galice à 8%. Différence pouvant être de centaines d'euros.",
    },
    {
      question: "Quel est l'ITP à Madrid, Barcelone et Valence ?",
      answer:
        "Taux ITP : Madrid : 4%, Barcelone (Catalogne) : 6%, Valence : 6%. Pour une voiture d'occasion à 20 000 € auprès d'un particulier : 800 € à Madrid, 1 200 € à Barcelone et 1 200 € à Valence. Écart plus marqué pour les voitures plus chères.",
    },
    {
      question: "Où vaut-il mieux immatriculer une voiture importée ?",
      answer:
        "Vous devez immatriculer dans la région de votre résidence habituelle — pas de choix libre pour payer moins d'ITP. Si vous pouvez légalement changer de résidence : Madrid (4%), Andalousie (4%) et Aragon (4%) sont les régions péninsulaires les plus avantageuses. Les Canaries n'appliquent pas l'ITP mais l'IGIC.",
    },
    {
      question: "Vaut-il mieux acheter chez un concessionnaire ou un particulier pour importer ?",
      answer:
        "Concessionnaire : TVA payée à l'origine (incluse dans le prix allemand), pas d'ITP en Espagne, mais prix de base plus élevé. Particulier : prix d'achat plus bas, mais ITP (4–8%) à l'immatriculation en Espagne. Pour les voitures de valeur, l'achat en concession est souvent moins cher en taxes totales.",
    },
    // Dubaï
    {
      question: "Peut-on importer une voiture de Dubaï en Espagne ?",
      answer:
        "Oui, l'import depuis Dubaï (EAU) vers l'Espagne est légal, mais plus complexe qu'un import UE. Vous payez les droits de douane (10% de la valeur), la TVA d'importation (21%), la taxe d'immatriculation (selon CO2) et l'homologation individuelle (obligatoire pour voitures non homologuées en UE). Fret maritime depuis EAU : 1 500–3 000 €.",
    },
    {
      question: "Quels droits de douane à l'import depuis Dubaï ?",
      answer:
        "Depuis Dubaï (hors UE) : droits 10% sur la valeur CIF (coût + assurance + fret), tarif général UE (TARIC 8703) ; TVA d'importation 21% sur CIF + droits ; taxe d'immatriculation selon CO2 (0–14,75%) ; homologation individuelle 1 000–3 000 € selon le modèle. Les pays avec ALE UE (Japon, Corée du Sud, RU) peuvent avoir un taux réduit ou 0%.",
    },
    {
      question: "Cela vaut-il la peine d'importer une voiture de luxe de Dubaï ?",
      answer:
        "Cela peut être rentable pour des voitures de luxe très spécifiques indisponibles en Europe ou bien plus chères ici — certaines Lamborghini, Ferrari ou modèles américains (Dodge Challenger). Mais les coûts additionnels (10% sur CIF, 21% TVA, homologation 1 500–3 000 €, transport 1 500–3 000 €) sont importants — calculez avec soin avant de décider.",
    },
    {
      question: "Qu'est-ce que l'homologation individuelle et quand est-elle nécessaire ?",
      answer:
        "L'homologation individuelle est un processus où un organisme technique certifie que le véhicule respecte les normes espagnoles et européennes de sécurité et d'émissions. Obligatoire pour les imports hors UE sans homologation européenne (EC). Coût : 800–3 000 € selon le modèle et les adaptations.",
    },
    {
      question: "Les voitures de Dubaï sont-elles à conduite à droite ?",
      answer:
        "Non — à Dubaï/aux EAU on conduit à droite, donc les voitures sont à conduite à gauche, comme en Espagne. Cela facilite l'import. Le marché EAU comprend cependant beaucoup de voitures américaines ou japonaises avec des spécifications différentes des européennes — pouvant compliquer ou renchérir l'homologation.",
    },
    {
      question: "Peut-on importer un VE depuis les EAU ?",
      answer:
        "Oui — on peut importer des VE depuis les EAU. Tesla y est courante. Étant électrique (0 g/km CO2), exonération de la taxe d'immatriculation. Les droits (10%), la TVA (21%) et éventuellement l'homologation restent dus. Pour les Tesla déjà homologuées en UE, le processus est plus simple.",
    },
    {
      question: "Combien coûte le fret maritime de Dubaï à l'Espagne ?",
      answer:
        "Du port de Jebel Ali (Dubaï) vers l'Espagne (Valence, Barcelone ou Algésiras) : 1 500–3 000 €, transit 20–35 jours. L'assurance transport est obligatoire et représente 1–2% de la valeur du véhicule. Le dédouanement en Espagne : 200–400 € de plus.",
    },
  ],
};
