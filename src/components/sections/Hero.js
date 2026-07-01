import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-secondary to-secondary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-primary/20 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">🛕 Trusted Taxi Service in Ujjain</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Comfortable Taxi Service for{" "}
            <span className="text-primary">Travels</span> 
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Krishna Tour & Travels offers comfortable cabs with experienced drivers for Ujjain sightseeing, airport transfers, temple visits, outstation trips, and pooja assistance.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
            {["Customizable Packages", "Best Price Guarantee", "Hotel + Cab + Sightseeing", "24x7 Travel Support"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-100 text-sm">
                <span className="text-accent font-bold">✔</span> {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="tel:9131691660" className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-center">📞 Call Now</a>
            <a href="https://wa.me/9131691660?text=Hello%20Krishna%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-center">💬 WhatsApp</a>
          </div>
        </div>

        <div id="booking" className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary mb-1">Get Your Taxi Booking Quote</h3>
          <p className="text-text-light text-sm mb-5">Fill the form, we'll call you back in minutes.</p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}