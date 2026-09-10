const values = [
  {
    title: "Praxisorientiert",
    text: "Lernen direkt aus realen Situationen.",
  },
  {
    title: "Individuell",
    text: "Passend zur jeweiligen Organisation.",
  },
  {
    title: "Nachhaltig",
    text: "Veränderung im Alltag statt Theorie.",
  },
  {
    title: "Kompetent",
    text: "Fundierte Ausbildung und Erfahrung.",
  },
];

export default function WhyKinavita() {
  return (
    <section className="section">
      <div className="section-header">
        <span>Warum Kinavita</span>
        <h2>Nachhaltig. Praxisnah. Menschlich.</h2>
      </div>

      <div className="grid">
        {values.map((value) => (
          <div className="card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
