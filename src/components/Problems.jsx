const challenges = [
  {
    icon: "🩺",
    title: "Körperliche Belastung",
    text: "Rücken- und Bewegungsbeschwerden gehören zu den häufigsten Belastungen im Pflege- und Betreuungsalltag.",
  },
  {
    icon: "📉",
    title: "Belastungsbedingte Ausfälle",
    text: "Jeder Ausfall belastet Mitarbeitende, Teams, Qualität und Organisation.",
  },
  {
    icon: "👥",
    title: "Fachkräftemangel",
    text: "Gesunde und langfristig arbeitsfähige Mitarbeitende werden immer wichtiger.",
  },
];

export default function Problems() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-emerald-700 font-semibold">
            Herausforderungen
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Die Herausforderungen im Pflegealltag
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Belastungen, Ausfälle und Fachkräftemangel gehören zu den
            grössten Herausforderungen vieler Institutionen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
