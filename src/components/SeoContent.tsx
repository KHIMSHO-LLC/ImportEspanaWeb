"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Calculator, Info } from "lucide-react";

export const SeoContent = () => {
  const { language } = useLanguage();

  switch (language) {
    case "es":
      return <ContentES />;
    case "de":
      return <ContentDE />;
    case "fr":
      return <ContentFR />;
    case "ru":
      return <ContentRU />;
    case "en":
    default:
      return <ContentEN />;
  }
};

const ContentES = () => (
  <article className="mt-16">
    <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Calculator className="text-[var(--brand-blue)]" size={20} />
          ¿Cómo calcular el Impuesto de Matriculación en España?
        </h2>
        <p className="mb-4">
          Importar un coche a España implica varios trámites y costes, siendo el
          <strong> Impuesto de Matriculación</strong> (IEDMT) uno de los más
          importantes. Nuestra calculadora gratuita te permite estimar con
          precisión cuánto tendrás que pagar para matricular tu vehículo
          extranjero.
        </p>
        <p>
          El cálculo se basa en las tablas oficiales publicadas anualmente en el
          <strong> BOE (Boletín Oficial del Estado)</strong>, que determinan el
          valor fiscal del vehículo según su marca, modelo y antigüedad. A este
          valor se le aplica un tipo impositivo que varía según las emisiones de
          CO2 del coche.
        </p>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Info className="text-[var(--brand-blue)]" size={20} />
          Tramos del Impuesto de Matriculación 2024
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">0% (Exento)</span>
              Para emisiones menores o iguales a 120 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">4,75%</span>
              Para emisiones entre 121 y 159 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">9,75%</span>
              Para emisiones entre 160 y 199 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">14,75%</span>
              Para emisiones mayores o iguales a 200 g/km de CO2.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BookOpen className="text-[var(--brand-blue)]" size={20} />
          Pasos para Matricular un Coche Extranjero
        </h2>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li>
            <span className="font-bold text-[var(--text-primary)]">Pasar la ITV:</span> Es
            obligatorio pasar la Inspección Técnica de Vehículos para obtener la
            Ficha Técnica española.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Pagar Impuestos:</span>{" "}
            Deberás liquidar el Impuesto de Matriculación (Modelo 576) y, en
            algunos casos, el Impuesto de Transmisiones Patrimoniales (ITP).
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">
              Impuesto de Circulación:
            </span>{" "}
            Abonar el IVTM en tu ayuntamiento.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">
              Matriculación en la DGT:
            </span>{" "}
            Presentar toda la documentación en la Dirección General de Tráfico
            para obtener el permiso de circulación y las placas nuevas.
          </li>
        </ol>
      </section>
    </div>
  </article>
);

const ContentEN = () => (
  <article className="mt-16">
    <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Calculator className="text-[var(--brand-blue)]" size={20} />
          How to Calculate Car Import Tax in Spain?
        </h2>
        <p className="mb-4">
          Importing a car to Spain involves several procedures and costs, with
          the <strong>Registration Tax</strong> (Impuesto de Matriculación)
          being one of the most significant. Our free calculator allows you to
          accurately estimate how much you will have to pay to register your
          foreign vehicle.
        </p>
        <p>
          The calculation is based on official tables published annually in the
          <strong> BOE (Official State Gazette)</strong>, which determine the
          fiscal value of the vehicle based on its brand, model, and age. A tax
          rate is applied to this value based on the car's CO2 emissions.
        </p>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Info className="text-[var(--brand-blue)]" size={20} />
          Registration Tax Brackets 2024
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">0% (Exempt)</span>
              For emissions ≤ 120 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">4.75%</span>
              For emissions between 121 and 159 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">9.75%</span>
              For emissions between 160 and 199 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">14.75%</span>
              For emissions ≥ 200 g/km CO2.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BookOpen className="text-[var(--brand-blue)]" size={20} />
          Steps to Register a Foreign Car
        </h2>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li>
            <span className="font-bold text-[var(--text-primary)]">Pass the ITV:</span> It is
            mandatory to pass the Technical Vehicle Inspection to obtain the
            Spanish Technical Sheet.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Pay Taxes:</span> You must
            pay the Registration Tax (Form 576) and, in some cases, the Transfer
            Tax (ITP).
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Road Tax (IVTM):</span>{" "}
            Pay the annual circulation tax at your local town hall.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Register at DGT:</span>{" "}
            Submit all documentation to the Traffic Department to obtain the
            circulation permit and new license plates.
          </li>
        </ol>
      </section>
    </div>
  </article>
);

const ContentDE = () => (
  <article className="mt-16">
    <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Calculator className="text-[var(--brand-blue)]" size={20} />
          Wie berechnet man die Zulassungssteuer in Spanien?
        </h2>
        <p className="mb-4">
          Der Import eines Autos nach Spanien ist mit verschiedenen Verfahren
          und Kosten verbunden, wobei die
          <strong> Zulassungssteuer</strong> (Impuesto de Matriculación) eine
          der wichtigsten ist. Unser kostenloser Rechner ermöglicht es Ihnen,
          genau abzuschätzen, wie viel Sie für die Zulassung Ihres ausländischen
          Fahrzeugs zahlen müssen.
        </p>
        <p>
          Die Berechnung basiert auf den offiziellen Tabellen, die jährlich im
          <strong> BOE (Amtsblatt)</strong> veröffentlicht werden und den
          Steuerwert des Fahrzeugs je nach Marke, Modell und Alter bestimmen.
          Auf diesen Wert wird ein Steuersatz angewendet, der von den
          CO2-Emissionen abhängt.
        </p>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Info className="text-[var(--brand-blue)]" size={20} />
          Steuersätze der Zulassungssteuer 2024
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">
                0% (Befreit)
              </span>
              Für Emissionen ≤ 120 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">4,75%</span>
              Für Emissionen zwischen 121 und 159 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">9,75%</span>
              Für Emissionen zwischen 160 und 199 g/km CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">14,75%</span>
              Für Emissionen ≥ 200 g/km CO2.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BookOpen className="text-[var(--brand-blue)]" size={20} />
          Schritte zur Zulassung eines Importfahrzeugs
        </h2>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li>
            <span className="font-bold text-[var(--text-primary)]">TÜV (ITV):</span> Es ist
            obligatorisch, die technische Inspektion zu bestehen, um das
            spanische technische Datenblatt zu erhalten.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Steuern zahlen:</span> Sie
            müssen die Zulassungssteuer (Formular 576) und in einigen Fällen die
            Grunderwerbsteuer (ITP) zahlen.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Kfz-Steuer (IVTM):</span>{" "}
            Zahlung der jährlichen Verkehrssteuer bei Ihrem Rathaus.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Anmeldung bei DGT:</span>{" "}
            Einreichung aller Unterlagen beim Verkehrsamt, um die Zulassung und
            neue Kennzeichen zu erhalten.
          </li>
        </ol>
      </section>
    </div>
  </article>
);

const ContentFR = () => (
  <article className="mt-16">
    <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Calculator className="text-[var(--brand-blue)]" size={20} />
          Comment calculer la taxe d'immatriculation en Espagne ?
        </h2>
        <p className="mb-4">
          Importer une voiture en Espagne implique plusieurs démarches et coûts,
          dont la <strong>Taxe d'Immatriculation</strong> (Impuesto de
          Matriculación) est l'une des plus importantes. Notre calculateur
          gratuit vous permet d'estimer avec précision combien vous devrez payer
          pour immatriculer votre véhicule étranger.
        </p>
        <p>
          Le calcul est basé sur les tableaux officiels publiés annuellement
          dans le
          <strong> BOE (Bulletin Officiel de l'État)</strong>, qui déterminent
          la valeur fiscale du véhicule selon sa marque, son modèle et son âge.
          Un taux d'imposition est appliqué à cette valeur en fonction des
          émissions de CO2.
        </p>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Info className="text-[var(--brand-blue)]" size={20} />
          Tranches de la Taxe d'Immatriculation 2024
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">
                0% (Exonéré)
              </span>
              Pour les émissions ≤ 120 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">4,75%</span>
              Pour les émissions entre 121 et 159 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">9,75%</span>
              Pour les émissions entre 160 et 199 g/km de CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">14,75%</span>
              Pour les émissions ≥ 200 g/km de CO2.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BookOpen className="text-[var(--brand-blue)]" size={20} />
          Étapes pour immatriculer une voiture étrangère
        </h2>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li>
            <span className="font-bold text-[var(--text-primary)]">Passer l'ITV :</span> Il
            est obligatoire de passer le contrôle technique pour obtenir la
            Fiche Technique espagnole.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Payer les Taxes :</span>{" "}
            Vous devez payer la Taxe d'Immatriculation (Modèle 576) et, dans
            certains cas, la Taxe de Transfert (ITP).
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">
              Taxe de Circulation :
            </span>{" "}
            Payer l'IVTM annuel à votre mairie.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">
              Immatriculation à la DGT :
            </span>{" "}
            Soumettre tous les documents à la Direction Générale du Trafic pour
            obtenir la carte grise et les nouvelles plaques.
          </li>
        </ol>
      </section>
    </div>
  </article>
);

const ContentRU = () => (
  <article className="mt-16">
    <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Calculator className="text-[var(--brand-blue)]" size={20} />
          Как рассчитать налог на регистрацию в Испании?
        </h2>
        <p className="mb-4">
          Импорт автомобиля в Испанию включает несколько процедур и расходов, из
          которых <strong>Налог на регистрацию</strong> (Impuesto de
          Matriculación) является одним из самых значительных. Наш бесплатный
          калькулятор позволяет точно оценить, сколько вам придется заплатить за
          регистрацию вашего иностранного автомобиля.
        </p>
        <p>
          Расчет основан на официальных таблицах, ежегодно публикуемых в
          <strong> BOE (Официальный государственный вестник)</strong>, которые
          определяют фискальную стоимость автомобиля в зависимости от марки,
          модели и возраста. К этой стоимости применяется налоговая ставка,
          зависящая от выбросов CO2.
        </p>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Info className="text-[var(--brand-blue)]" size={20} />
          Ставки налога на регистрацию 2024
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">
                0% (Освобожден)
              </span>
              Для выбросов ≤ 120 г/км CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">4,75%</span>
              Для выбросов между 121 и 159 г/км CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">9,75%</span>
              Для выбросов между 160 и 199 г/км CO2.
            </div>
          </li>
          <li className="p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] shrink-0 mt-1.5" />
            <div>
              <span className="font-bold block text-[var(--text-primary)]">14,75%</span>
              Для выбросов ≥ 200 г/км CO2.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="heading-section text-xl md:text-2xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <BookOpen className="text-[var(--brand-blue)]" size={20} />
          Шаги для регистрации иностранного авто
        </h2>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li>
            <span className="font-bold text-[var(--text-primary)]">Пройти ITV:</span>{" "}
            Обязательно пройти техосмотр для получения испанского технического
            паспорта.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Оплатить налоги:</span> Вы
            должны оплатить налог на регистрацию (форма 576) и, в некоторых
            случаях, налог на передачу прав (ITP).
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Дорожный налог:</span>{" "}
            Оплатить ежегодный налог IVTM в мэрии.
          </li>
          <li>
            <span className="font-bold text-[var(--text-primary)]">Регистрация в DGT:</span>{" "}
            Подать все документы в дорожную инспекцию для получения разрешения и
            новых номеров.
          </li>
        </ol>
      </section>
    </div>
  </article>
);
