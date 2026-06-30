export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-extrabold mb-3">
            Krishna <span className="text-primary">Tour & Travels</span>
          </h3>
          <p className="text-sm text-gray-400">
            Trusted taxi service in Ujjain & Indore for sightseeing, airport
            transfers, temple visits and outstation trips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#overview" className="hover:text-primary">Overview</a></li>
            <li><a href="#routes" className="hover:text-primary">Routes</a></li>
            <li><a href="#popular-routes" className="hover:text-primary">Popular Routes</a></li>
            <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Local Sightseeing</li>
            <li>Airport Transfers</li>
            <li>Outstation Trips</li>
            <li>Temple Darshan Taxi</li>
            <li>Hotel + Cab Booking</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>📞 <a href="tel:9131691660" className="hover:text-primary">9131691660</a></li>
            <li>✉️ <a href="mailto:info@krishnatourtravels.com" className="hover:text-primary">info@krishnatourtravels.com</a></li>
            <li>📍 Ujjain, Madhya Pradesh</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-5">
        <p className="text-center text-xs text-gray-500">
          © {year} Krishna Tour & Travels. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}