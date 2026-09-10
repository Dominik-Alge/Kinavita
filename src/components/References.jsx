const experience = [
  {
    icon: "🏥",
    title: "Pflege & Betreuung",
    text: "Erfahrung in der Begleitung von Mitarbeitenden und Teams im Pflege- und Betreuungsalltag.",
  },
  {
    icon: "🏡",
    title: "Langzeitpflege",
    text: "Praxisnahe Erfahrung in Alterszentren und Institutionen mit Fokus auf Ressourcen und Selbstständigkeit.",
  },
  {
    icon: "🩺",
    title: "Gesundheitswesen",
    text: "Gesundheitsförderung, Bewegungslernen und nachhaltige Entwicklung von Handlungskompetenzen.",
  },
  {
    icon: "👩‍⚕️",
    title: "Ambulante Pflege",
    text: "Praxiserfahrung in der Spitex und im häuslichen Umfeld von betreuten Menschen.",
  },
];

export default function References() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-emerald-700 font-semibold">
            Erfahrung
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Vertrauen durch Erfahrung
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Unsere Erfahrung basiert auf Tätigkeiten
            in Pflege, Betreuung, Gesundheitswesen,
            Langzeitpflege und Gesundheitsförderung.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {experience.map((item) => (
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
