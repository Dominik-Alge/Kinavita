const values = [
  {
    icon: "🌿",
    title: "Ressourcen statt Defizite",
    text: "Der Fokus liegt auf den vorhandenen Fähigkeiten von Mitarbeitenden und betreuten Menschen. Statt Defizite auszugleichen, werden Ressourcen gezielt wahrgenommen und genutzt.",
  },
  {
    icon: "🩺",
    title: "Gesundheit fördern",
    text: "Bewusstere Bewegungsabläufe können dazu beitragen, körperliche Belastungen im Pflege- und Betreuungsalltag zu reduzieren.",
  },
  {
    icon: "👥",
    title: "Mitarbeitende stärken",
    text: "Gesunde und kompetente Mitarbeitende bilden die Grundlage für stabile Teams und eine hohe Pflegequalität.",
  },
  {
    icon: "📈",
    title: "Nachhaltig wirksam",
    text: "Nicht einzelne Schulungstage, sondern Veränderung und Entwicklung im täglichen Arbeiten.",
  },
];

export default function WhyKinavita() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-emerald-700 font-semibold">
            Warum Kinavita
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Warum Institutionen mit Kinavita arbeiten
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Kinästhetik ist mehr als eine Schulung. Es geht darum,
            Mitarbeitende zu stärken, Belastungen zu reduzieren
            und Ressourcen langfristig nutzbar zu machen.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:-translate-y-2 transition"
            >

              <div className="text-5xl mb-4">
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {value.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
