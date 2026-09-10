export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block rounded-full bg-white px-4 py-2 shadow text-sm font-medium text-emerald-700">
              Kinaesthetics & Gesundheitsförderung
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black text-slate-900">
              Mitarbeitende entlasten.
              <br />
              Pflegequalität stärken.
              <br />
              Gesundheit nachhaltig fördern.
            </h1>

            <p className="mt-6 text-xl text-emerald-700 font-medium">
              Über Bewegung im Dialog bleiben.
            </p>

            <p className="mt-8 text-lg text-slate-600 max-w-2xl">
              Kinavita unterstützt Pflegeheime, Institutionen,
              Stiftungen und Organisationen dabei, körperliche
              Belastungen zu reduzieren, Ressourcen gezielt zu
              nutzen und gesundes Arbeiten langfristig zu fördern.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-emerald-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-emerald-800 transition">
                Angebot entdecken
              </button>

              <button className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-2xl hover:bg-emerald-50 transition">
                Gespräch vereinbaren
              </button>

            </div>

          </div>

          <div>

            <div className="h-[500px] rounded-[40px] bg-gradient-to-br from-emerald-600 to-amber-300 shadow-2xl flex items-center justify-center">

              <div className="text-center text-white">

                <div className="text-7xl">
                  🌿
                 </div>

                <p className="mt-4 text-xl">
                  Bild folgt
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
