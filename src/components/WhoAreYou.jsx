import { useState } from "react";

export default function WhoAreYou() {
  const [selected, setSelected] = useState(null);

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

          <button
            onClick={() => setSelected("institution")}
            className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:-translate-y-2 transition text-left"
          >
            <div className="text-5xl mb-4">🏥</div>

            <h3 className="text-2xl font-bold">
              Institutionen & Stiftungen
            </h3>

            <p className="mt-4 text-slate-600">
              Mitarbeitende entlasten,
              Ausfälle reduzieren und
              Pflegequalität stärken.
            </p>
          </button>

          <button
            onClick={() => setSelected("mitarbeiter")}
            className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:-translate-y-2 transition text-left"
          >
            <div className="text-5xl mb-4">👩‍⚕️</div>

            <h3 className="text-2xl font-bold">
              Mitarbeitende
            </h3>

            <p className="mt-4 text-slate-600">
              Gesund arbeiten,
              den Körper schonen und
              Bewegung besser verstehen.
            </p>
          </button>

          <button
            onClick={() => setSelected("angehoerige")}
            className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:-translate-y-2 transition text-left"
          >
            <div className="text-5xl mb-4">🏡</div>

            <h3 className="text-2xl font-bold">
              Angehörige
            </h3>

            <p className="mt-4 text-slate-600">
              Menschen sicher begleiten,
              Kompetenzen aufbauen und
              Selbstständigkeit erhalten.
            </p>
          </button>

        </div>

        {selected === "institution" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border">

            <h3 className="text-3xl font-bold">
              Nutzen für Institutionen & Heimleitungen
            </h3>

            <ul className="mt-6 space-y-3">
              <li>✅ Voraussetzungen für weniger belastungsbedingte Ausfälle schaffen</li>
              <li>✅ Mitarbeitende langfristig gesund erhalten</li>
              <li>✅ Arbeitgeberattraktivität stärken</li>
              <li>✅ Pflegequalität fördern</li>
              <li>✅ Gesundheitsförderung nachhaltig verankern</li>
            </ul>

          </div>
        )}

        {selected === "mitarbeiter" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border">

            <h3 className="text-3xl font-bold">
              Nutzen für Mitarbeitende
            </h3>

            <ul className="mt-6 space-y-3">
              <li>✅ Rücken entlasten</li>
              <li>✅ Bewegungsabläufe besser verstehen</li>
              <li>✅ Gesünder arbeiten</li>
              <li>✅ Belastungen reduzieren</li>
              <li>✅ Langfristig arbeitsfähig bleiben</li>
            </ul>

          </div>
        )}

        {selected === "angehoerige" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border">

            <h3 className="text-3xl font-bold">
              Nutzen für Angehörige
            </h3>

            <ul className="mt-6 space-y-3">
              <li>✅ Sicherheit gewinnen</li>
              <li>✅ Kompetenzen aufbauen</li>
              <li>✅ Selbstständigkeit fördern</li>
              <li>✅ Unterstützung im Alltag erhalten</li>
              <li>✅ Bewegungen sicher begleiten</li>
            </ul>

          </div>
        )}

      </div>
    </section>
  );
}
