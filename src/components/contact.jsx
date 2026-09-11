export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <span className="text-emerald-700 font-semibold">
          Kontakt
        </span>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Lassen Sie uns ins Gespräch kommen
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Sie möchten mehr über Kinavita erfahren oder eine
          unverbindliche Anfrage stellen?
          Wir freuen uns auf Ihre Kontaktaufnahme.
        </p>

        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg max-w-md mx-auto">
          <p className="text-2xl font-bold text-slate-900">
            Alge Rina
          </p>

          <div className="mt-6 space-y-3 text-lg text-slate-600">
            <p>
              📧{' '}
              <a href="mailto:rina.alge@kinaesthetics-net.ch" className="hover:text-emerald-700 transition">
                rina.alge@kinaesthetics-net.ch
              </a>
            </p>
            <p>
              📱{' '}
              <a href="tel:+41797096559" className="hover:text-emerald-700 transition">
                +41 79 709 65 59
              </a>
            </p>
          </div>

          <div className="mt-8">
            <a
              href="mailto:rina.alge@kinaesthetics-net.ch"
              className="inline-block w-full sm:w-auto rounded-xl bg-emerald-700 px-6 py-4 text-white font-semibold hover:bg-emerald-800 transition"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
