import { team } from "../data/content";

export default function Team() {
  return (
    <section className="section">

      <h2>Das Team hinter Kinavita</h2>

      <div className="team-grid">

        {team.map((person) => (
          <div className="team-card" key={person.id}>

            <div className="portrait">
              Foto
            </div>

            <h3>{person.name}</h3>

            <p>{person.role}</p>

            <p>{person.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}
