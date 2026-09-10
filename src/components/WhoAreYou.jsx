export default function WhoAreYou() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Für wen suchen Sie Unterstützung?
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Jede Situation bringt andere Herausforderungen mit sich.
            Wählen Sie den Bereich, der zu Ihnen passt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
            <div className="text-5xl mb-4">🏥</div>

            <h3 className="text-2xl font-bold">
              Institutionen & Stiftungen
            </h3>

            <p className="mt-4 text-slate-600">
              Mitarbeitende entlasten,
              Ausfälle reduzieren und
              Pflegequalität stärken.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
            <div className="text-5xl mb-4">👩‍⚕️</div>

            <h3 className="text-2xl font-bold">
              Mitarbeitende
            </h3>

            <p className="mt-4 text-slate-600">
              Gesund arbeiten,
              den Körper schonen und
              Bewegung besser verstehen.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
            <div className="text-5xl mb-4">🏡</div>

            <h3 className="text-2xl font-bold">
              Angehörige
            </h3>

            <p className="mt-4 text-slate-600">
              Menschen sicher begleiten,
              Kompetenzen aufbauen und
              Selbstständigkeit erhalten.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
