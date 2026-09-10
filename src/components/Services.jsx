export default function Services() {
  return (
    <section id="angebote" className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-emerald-700 font-semibold">
            Angebote
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Unsere Angebote
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition bg-emerald-50">
            <h3 className="text-2xl font-bold mb-4">
              Pflege & Betreuung
            </h3>

            <ul className="space-y-2">
              <li>Grundkurse</li>
              <li>Aufbaukurse</li>
              <li>Refresher</li>
              <li>Hilfsmittelanwendung</li>
              <li>Praxisbegleitung</li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition bg-amber-50">
            <h3 className="text-2xl font-bold mb-4">
              Unternehmen & Industrie
            </h3>

            <ul className="space-y-2">
              <li>Ergonomie</li>
              <li>Arbeitsplatzanalysen</li>
              <li>Workshops</li>
              <li>Gesundheitstage</li>
              <li>Rückentraining</li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition bg-slate-50">
            <h3 className="text-2xl font-bold mb-4">
              Alltag & Angehörige
            </h3>

            <ul className="space-y-2">
              <li>Beratungen</li>
              <li>Bewegung im Alltag</li>
              <li>Unterstützung zuhause</li>
              <li>Individuelle Begleitung</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}
