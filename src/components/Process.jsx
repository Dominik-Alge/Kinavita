const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Kostenloses Erstgespräch.",
  },
  {
    number: "02",
    title: "Analyse",
    text: "Gemeinsame Betrachtung der Situation.",
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Praxisnahe Schulung und Begleitung.",
  },
  {
    number: "04",
    title: "Nachhaltigkeit",
    text: "Transfer und Verankerung im Alltag.",
  },
];

export default function Process() {
  return (
    <section className="section">
      <div className="section-header">
        <span>Ablauf</span>
        <h2>So läuft die Zusammenarbeit ab</h2>
      </div>

      <div className="grid">
        {steps.map((step) => (
          <div className="card" key={step.number}>
            <h3>{step.number}</h3>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
