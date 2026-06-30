const reviews = [
  { name: "Rahul Sharma", rating: 5, text: "Excellent taxi service from Ujjain to Omkareshwar. Driver was punctual, polite and cab was very clean. Highly recommended." },
  { name: "Priya Verma", rating: 5, text: "Booked Indore airport pickup and drop. Smooth experience, affordable fare and on-time service. Very satisfied." },
  { name: "Amit Joshi", rating: 5, text: "Ujjain local sightseeing package was great. Covered Mahakal, Kal Bhairav and nearby temples comfortably." },
  { name: "Sneha Patel", rating: 5, text: "Clean cab, professional driver and transparent pricing. Best taxi provider in Ujjain." },
  { name: "Manoj Gupta", rating: 5, text: "Used their taxi + hotel support service. Everything was arranged properly. Great support team." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Customer Reviews</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">What Our Travelers Say</h2>
          <p className="text-text-light max-w-xl mx-auto">Trusted by hundreds of happy customers for taxi service in Ujjain & Indore.</p>
          <a href="https://www.google.com/search?q=krishna+tour+and+travels+ujjain+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-secondary hover:text-primary">⭐ See all reviews on Google</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-muted rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">{r.name}</p>
                  <div className="text-primary text-xs">{"★".repeat(r.rating)}</div>
                </div>
              </div>
              <p className="text-text-light text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}