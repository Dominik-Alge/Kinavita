const groups = [
  {
    title: "Pflege & Betreuung",
    items: [
      "Körperliche Entlastung",
      "Förderung der Mobilität",
      "Erhaltung von Selbstständigkeit",
      "Höhere Pflegequalität",
    ],
  },
  {
    title: "Unternehmen & Industrie",
    items: [
      "Rückenbeschwerden reduzieren",
      "Ergonomisches Arbeiten fördern",
      "Fehlbelastungen erkennen",
      "Gesundheit stärken",
    ],
  },
  {
    title: "Privatpersonen",
    items: [
      "Bewegung im Alltag verbessern",
      "Angehörige unterstützen",
      "Ressourcen erhalten",
    ],
  },
];

export default function Problems() {
  return (
    <section className="section">
      <div className="section-header">
        <span>Herausforderungen</span>
        <h2>Die Probleme, die wir lösen</h2>
      </div>

      <div className="grid">
        {groups.map((group) => (
          <div className="card" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
