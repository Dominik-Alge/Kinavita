export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-emerald-700 font-semibold">
            Das Team hinter Kinavita
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Persönlich. Praxisnah. Kompetent.
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Hinter Kinavita stehen Menschen mit fundierter Ausbildung
            und einer gemeinsamen Leidenschaft für Bewegung,
            Gesundheitsförderung und Kinaesthetics.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Rina */}
          <div className="bg-slate-50 rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/rina.jpg"
              alt="Alge Rina"
              class>
              
              <h3 className="text-3xl font-bold text-slate-900">
                Alge Rina
              </h3>

              <p className="mt-2 text-emerald-700 font-semibold">
                Spezialistin für angewandte Kinästhetik
                mit eidgenössischem Fachausweis
              </p>

              <div className="mt-6 space-y-2 text-slate-600">
                <p>✅ Ausbildung Stufe 1 Winterthur I 22</p>
                <p>✅ Ausbildung Stufe 2 Winterthur 25</p>
                <p>✅ Kurssprache: Deutsch</p>
              </div>

              <p className="mt-6 text-slate-600">
                Begleitet Institutionen, Teams und Einzelpersonen
                dabei, Bewegung bewusster wahrzunehmen und
                vorhandene Ressourcen gezielt zu nutzen.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.kinaesthetics.ch/trainerinnenliste.cfm?trainer_id=7781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-700 text-white rounded-xl"
                >
                  Kinaesthetics Profil
                </a>

                <a
                  href="https://www.linkedin.com/in/rina-alge-64511b386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-slate-300 rounded-xl hover:bg-slate-100"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* Barbara */}
          <div className="bg-slate-50 rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/barbara.jpg"
              alt="Barbara Morciano-Alvarez>

              <h3 className="text-3xl font-bold text-slate-900">
                Morciano-Alvarez Barbara
              </h3>

              <p className="mt-2 text-emerald-700 font-semibold">
                Spezialistin für angewandte Kinästhetik
                mit eidgenössischem Fachausweis
              </p>

              <div className="mt-6 space-y-2 text-slate-600">
                <p>✅ Ausbildung Stufe 1 Winterthur I 22</p>
                <p>✅ Ausbildung Stufe 2 Winterthur 25</p>
                <p>✅ Deutsch</p>
                <p>✅ Italienisch</p>
                <p>✅ Spanisch</p>
              </div>

              <p className="mt-6 text-slate-600">
                Unterstützt Menschen und Organisationen dabei,
                Bewegungskompetenz aufzubauen und
                gesundheitsfördernde Bewegungsstrategien
                im Alltag zu integrieren.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.kinaesthetics.ch/trainerinnenliste.cfm?trainer_id=7801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-700 text-white rounded-xl"
                >
                  Kinaesthetics Profil
                </a>

                <a
                  href="https://www.linkedin.com/in/barbara-morciano-alvarez-0872451b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-slate-300 rounded-xl hover:bg-slate-100"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
