const routes = [
  { from: "Ujjain", to: "Omkareshwar", popular: true },
  { from: "Ujjain", to: "Baglamukhi", popular: true },
  { from: "Ujjain", to: "Indore Airport (Drop)", popular: true },
  { from: "Indore Airport", to: "Ujjain (Pickup)", popular: false },
  { from: "Ujjain", to: "Maheshwar", popular: true },
  { from: "Ujjain", to: "Mandu", popular: true },
  { from: "Ujjain", to: "Dewas", popular: false },
  { from: "Ujjain", to: "Indore City", popular: true },
  { from: "Ujjain", to: "Bhopal", popular: true },
  { from: "Ujjain", to: "Dhar", popular: false },
  { from: "Ujjain", to: "Mandsaur", popular: false },
  { from: "Ujjain", to: "Ratlam", popular: false },
  { from: "Ujjain", to: "Jaora", popular: false },
  { from: "Ujjain", to: "Agar Malwa", popular: false },
  { from: "Ujjain", to: "Shajapur", popular: false },
  { from: "Ujjain", to: "Khargone", popular: false },
  { from: "Ujjain", to: "Indore + Omkareshwar (Same Day)", popular: true },
  { from: "Ujjain Local", to: "8 Hours / 80 KM", popular: true },
  { from: "Ujjain Local", to: "Full Day Package", popular: false },
  { from: "Ujjain ", to: "Savariya Seth", popular: true },
  { from: "Ujjain", to: "Other City", popular: false },
];

export default function Routes() {
  return (
    <section id="routes" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Routes</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Taxi Routes from Ujjain</h2>
          <p className="text-text-light max-w-xl mx-auto">Comfortable cabs with professional drivers for local sightseeing, airport transfer & outstation trips.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-5 flex items-center justify-between border border-gray-100 hover:shadow-md transition-shadow">
              <div>
                {r.popular && (
                  <span className="inline-block bg-primary/10 text-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2">Popular</span>
                )}
                <p className="font-semibold text-secondary text-sm sm:text-base">
                  {r.from} <span className="text-primary">→</span> {r.to}
                </p>
              </div>
              <a href="https://wa.me/9131691660" target="_blank" rel="noopener noreferrer" className="shrink-0 ml-3 text-accent text-xl" aria-label="Enquire on WhatsApp">💬</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}