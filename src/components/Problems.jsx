import { useState } from "react";

const challenges = [
  {
    icon: "🩺",
    title: "Körperliche Belastung",
    text: "Rücken- und Bewegungsbeschwerden gehören zu den häufigsten Belastungen im Pflege- und Betreuungsalltag.",
    details: "Hier kommt dein vertiefender Text hin: Welche genauen Belastungen treten auf? Welche Muskelgruppen sind betroffen? Warum führt falsches Heben langfristig zu Problemen?",
  },
  {
    icon: "📉",
    title: "Belastungsbedingte Ausfälle",
    text: "Jeder Ausfall belastet Mitarbeitende, Teams, Qualität und Organisation.",
    details: "Vertiefung zu Ausfällen: Wie wirkt sich ein Ausfall auf den Personalschlüssel aus? Welche wirtschaftlichen Folgen hat das für die Institution?",
  },
  {
    icon: "👥",
    title: "Fachkräftemangel",
    text: "Gesunde und langfristig arbeitsfähige Mitarbeitende werden immer wichtiger.",
    details: "Vertiefung zum Fachkräftemangel: Warum ist die Mitarbeiterbindung in der Pflege heute der wichtigste Hebel? Wie hilft Prävention bei der Rekrutierung?",
  },
];

export default function Problems() {
  // Speichert den Index der aktuell geöffneten Karte (-1 bedeutet keine geöffnet)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-emerald-700 font-semibold">Herausforderungen</span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Die Herausforderungen im Pflegealltag
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Belastungen, Ausfälle und Fachkräftemangel gehören zu den grössten Herausforderungen vieler Institutionen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {challenges.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-white p-8 shadow-lg transition all duration-300 cursor-pointer border-2 ${
                  isOpen ? "border-emerald-600 shadow-xl" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  {/* Ein kleiner rotierender Pfeil als visueller Hinweis */}
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>

                {/* Das Untermenü / Die Vertiefung */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
                    {item.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

