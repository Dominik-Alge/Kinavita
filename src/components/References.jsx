import { useState } from "react";

const experience = [
  {
    icon: "🏥",
    title: "Pflege & Betreuung",
    text: "Erfahrung in der Begleitung von Mitarbeitenden und Teams im Pflege- und Betreuungsalltag.",
    leader: {
      name: "Alge Rina",
      role: "Spezialistin für angewandte Kinästhetik mit eidgenössischem Fachausweis",
      bullets: [
        "Ausbildung Stufe 1 Winterthur I 22",
        "Ausbildung Stufe 2 Winterthur 25",
        "Kurssprache: Deutsch",
        "Praxiserfahrung Altersheim Geserhus",
      ],
      description: "Begleitet Institutionen, Teams und Einzelpersonen dabei, Bewegung bewusster wahrzunehmen und vorhandene Ressourcen gezielt zu nutzen.",
      kinaestheticsUrl: "#",
      linkedinUrl: "#",
    }
  },
  {
    icon: "🏡",
    title: "Langzeitpflege",
    text: "Praxisnahe Erfahrung in Alterszentren und Institutionen mit Fokus auf Ressourcen und Selbstständigkeit.",
    // Verweist auf das gleiche Profil
    leader: {
      name: "Alge Rina",
      role: "Spezialistin für angewandte Kinästhetik mit eidgenössischem Fachausweis",
      bullets: [
        "Ausbildung Stufe 1 Winterthur I 22",
        "Ausbildung Stufe 2 Winterthur 25",
        "Kurssprache: Deutsch",
        "Praxiserfahrung Altersheim Geserhus",
      ],
      description: "Begleitet Institutionen, Teams und Einzelpersonen dabei, Bewegung bewusster wahrzunehmen und vorhandene Ressourcen gezielt zu nutzen.",
      kinaestheticsUrl: "#",
      linkedinUrl: "#",
    }
  },
  {
    icon: "🩺",
    title: "Gesundheitswesen",
    text: "Gesundheitsförderung, Bewegungslernen und nachhaltige Entwicklung von Handlungskompetenzen.",
    leader: {
      name: "Morciano-Alvarez Barbara",
      role: "Spezialistin für angewandte Kinästhetik mit eidgenössischem Fachausweis",
      bullets: [
        "Ausbildung Stufe 1 Winterthur I 22",
        "Ausbildung Stufe 2 Winterthur 25",
        "Deutsch, Italienisch, Spanisch",
        "Dipl. Pflegefachfrau, Spitex Sarganserland",
      ],
      description: "Unterstützt Menschen und Organisationen dabei, Bewegungskompetenz aufzubauen und gesundheitsfördernde Bewegungsstrategien im Alltag zu integrar.",
      kinaestheticsUrl: "#",
      linkedinUrl: "#",
    }
  },
  {
    icon: "👩‍⚕️",
    title: "Ambulante Pflege",
    text: "Praxiserfahrung in der Spitex und im häuslichen Umfeld von betreuten Menschen.",
    leader: {
      name: "Morciano-Alvarez Barbara",
      role: "Spezialistin für angewandte Kinästhetik mit eidgenössischem Fachausweis",
      bullets: [
        "Ausbildung Stufe 1 Winterthur I 22",
        "Ausbildung Stufe 2 Winterthur 25",
        "Deutsch, Italienisch, Spanisch",
        "Dipl. Pflegefachfrau, Spitex Sarganserland",
      ],
      description: "Unterstützt Menschen und Organisationen dabei, Bewegungskompetenz aufzubauen und gesundheitsfördernde Bewegungsstrategien im Alltag zu integrieren.",
      kinaestheticsUrl: "#",
      linkedinUrl: "#",
    }
  },
];

// HIER KANNST DU SPÄTER DEINE REFERENZ-PARTNER EINTRAGEN
const institutions = [
  { name: "Altersheim Geserhus", location: "Schweiz" },
  { name: "Spitex Sarganserland", location: "Schweiz" },
  // Einfach weitere Objekte hinzufügen, wenn neue Partner dazukommen!
];

export default function References() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-emerald-700 font-semibold">Erfahrung</span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">Vertrauen durch Erfahrung</h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Unsere Erfahrung basiert auf Tätigkeiten in Pflege, Betreuung, Gesundheitswesen, Langzeitpflege und Gesundheitsförderung.
          </p>
        </div>

        {/* Die 4 Hauptkarten */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experience.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  isOpen ? "border-emerald-600 shadow-xl" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600 text-sm">{item.text}</p>

                {/* Integriertes Untermenü für die Gruppenleiterinnen */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-left bg-slate-50 p-5 rounded-2xl text-slate-800">
                    <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                      Zuständige Expertin
                    </span>
                    <h4 className="text-xl font-bold text-slate-900">{item.leader.name}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-tight">{item.leader.role}</p>
                    
                    <ul className="mt-4 space-y-1.5 text-sm border-y border-slate-200/60 py-3 my-3">
                      {item.leader.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>✅ {bullet}</li>
                      ))}
                    </ul>

                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      "{item.leader.description}"
                    </p>

                    <div className="mt-4 flex gap-3 text-xs font-semibold">
                      <a href={item.leader.kinaestheticsUrl} className="text-emerald-700 hover:underline">
                        ➔ Kinaesthetics Profil
                      </a>
                      <a href={item.leader.linkedinUrl} className="text-blue-700 hover:underline">
                        ➔ LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LANGFRISTIGER BEREICH: Institutionen & Arbeitgeber */}
        {institutions.length > 0 && (
          <div className="mt-24 pt-12 border-t border-slate-200">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
              Einige unserer Praxisstationen & Partner
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-8 items-center opacity-70">
              {institutions.map((inst, idx) => (
                <div key={idx} className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 text-slate-700 font-medium">
                  {inst.name} <span className="text-xs text-slate-400">({inst.location})</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
