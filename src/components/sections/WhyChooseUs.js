const features = [
  { icon: "🚿", title: "Clean & Sanitized Cabs" },
  { icon: "📞", title: "24/7 Booking Support" },
  { icon: "🧑‍✈️", title: "Professional Drivers" },
  { icon: "💰", title: "Affordable & Transparent Fare" },
  { icon: "⏰", title: "On Time Pickup & Drop" },
  { icon: "🛡️", title: "Safe & Comfortable Journey" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Why Choose Krishna Tour & Travels
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Reliable taxi service in Ujjain & Indore with clean cabs,
            professional drivers and affordable fares for every journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors border border-white/10"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="text-white font-semibold text-base">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}