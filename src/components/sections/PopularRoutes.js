const popularRoutes = [
  { icon: "🛕", tag: "Temple Tour", title: "Ujjain to Omkareshwar", desc: "Same day Jyotirlinga darshan with private AC cab.", info: ["Full Day", "Return Trip", "AC Cab"] },
  { icon: "🙏", tag: "Darshan Trip", title: "Ujjain to Baglamukhi", desc: "Easy temple visit with safe and comfortable cab.", info: ["Full Day", "Temple Route", "AC Cab"] },
  { icon: "✈️", tag: "24/7 Service", title: "Indore Airport Pickup & Drop", desc: "On-time airport transfers with clean AC cabs.", info: ["Anytime", "Airport Ride", "AC Cab"] },
  { icon: "🏰", tag: "Heritage Tour", title: "Ujjain to Mandu", desc: "Comfortable ride for fort & palace sightseeing.", info: ["Full Day", "Return Trip", "AC Cab"] },
  { icon: "🌊", tag: "Temple Tour", title: "Ujjain to Maheshwar", desc: "Private cab for temple visit & riverside trip.", info: ["Full Day", "Return Trip", "AC Cab"] },
  { icon: "🏙️", tag: "Most Booked", title: "Ujjain Local Sightseeing", desc: "Mahakal, Kal Bhairav & top temples in one trip.", info: ["8 Hours", "6+ Spots", "AC Cab"] },
  { icon: "🚖", tag: "City Tour", title: "Ujjain to Indore", desc: "Fast city transfer & outstation route at best fare.", info: ["Flexible", "One Way", "AC Cab"] },
  { icon: "🏞️", tag: "Outstation", title: "Ujjain to Bhopal", desc: "One way & round trip cab with experienced drivers.", info: ["Flexible", "One Way", "AC Cab"] },
];

export default function PopularRoutes() {
  return (
    <section id="popular-routes" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Popular Routes</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Book Taxi Packages for Every Destination</h2>
          <p className="text-text-light max-w-xl mx-auto">Comfortable cabs with professional drivers for local sightseeing, airport transfer & outstation trips.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((r, i) => (
            <div key={i} className="bg-muted rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <div className="text-4xl mb-3">{r.icon}</div>
              <span className="text-primary text-xs font-bold uppercase tracking-wide mb-2">{r.tag}</span>
              <h3 className="text-lg font-bold text-secondary mb-2">{r.title}</h3>
              <p className="text-text-light text-sm mb-4 flex-1">{r.desc}</p>

              <div className="flex flex-wrap gap-2 text-[11px] text-text-light mb-5">
                {r.info.map((item) => (
                  <span key={item} className="bg-white px-2.5 py-1 rounded-full border border-gray-200">{item}</span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <a href="tel:9131691660" className="flex-1 text-center bg-secondary hover:bg-secondary-dark text-white text-xs font-semibold py-2.5 rounded-full transition-colors">Call Now</a>
                <a href="https://wa.me/9131691660" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-accent hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-full transition-colors">Get Fare</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}