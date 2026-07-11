import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Vehicles from "@/components/sections/Vehicles";
import Routes from "@/components/sections/Routes";
import PopularRoutes from "@/components/sections/PopularRoutes";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vehicles />
        <Routes />
        <PopularRoutes />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Contact />

        {/* SEO Content Section */}
        <section className="py-16 bg-muted border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-6 text-center">
              Taxi & Cab Service in Ujjain – Serving All Temples, Pilgrims & Travellers
            </h2>

            <div className="prose prose-sm max-w-none text-text-light space-y-5 text-sm leading-relaxed">
              <p>
                <strong>Krishna Tour & Travels</strong> is Ujjain&apos;s most trusted taxi and cab booking service,
                catering to pilgrims, tourists and outstation travellers. Whether you need a cab for{" "}
                <strong>Mahakaleshwar darshan</strong>, an early morning <strong>Bhasma Aarti</strong> pickup,
                or a comfortable ride to{" "}
                <strong>Kal Bhairav Mandir, Harsiddhi Mata Temple, Ram Ghat, Mangalnath Temple,
                Chintaman Ganesh, Sandipani Ashram, Gadkalika Temple</strong> or{" "}
                <strong>Navgrah Mandir</strong> — we are available 24 hours a day, 7 days a week.
              </p>

              <p>
                We offer <strong>Ujjain local sightseeing packages</strong> covering 6+ top tourist spots
                in 8 hours — perfect for first-time visitors to Ujjain. Our cab service covers every
                important spot in the city, from the sacred{" "}
                <strong>Shipra River (Ram Ghat)</strong> to the ancient{" "}
                <strong>Bhartrihari Caves</strong> and the astronomical{" "}
                <strong>Vedha Shala (Jantar Mantar, Ujjain)</strong>.
              </p>

              <h3 className="text-lg font-bold text-secondary pt-2">
                Outstation Taxi Routes from Ujjain
              </h3>
              <p>
                Our outstation cab service from Ujjain covers all major destinations in Madhya Pradesh.
                Book a taxi for <strong>Ujjain to Omkareshwar</strong> (Jyotirlinga same-day darshan),{" "}
                <strong>Ujjain to Maheshwar</strong> (Narmada riverside temple town),{" "}
                <strong>Ujjain to Mandu</strong> (heritage fort & palaces),{" "}
                <strong>Ujjain to Baglamukhi Temple (Nalkheda)</strong>,{" "}
                <strong>Ujjain to Indore</strong>,{" "}
                <strong>Ujjain to Bhopal</strong>,{" "}
                <strong>Ujjain to Dewas</strong>,{" "}
                <strong>Ujjain to Dhar</strong>,{" "}
                <strong>Ujjain to Ratlam</strong>,{" "}
                <strong>Ujjain to Mandsaur</strong>, and more.
                We also offer same-day return tours like <strong>Ujjain + Omkareshwar + Indore</strong>.
              </p>

              <h3 className="text-lg font-bold text-secondary pt-2">
                Indore Airport Taxi from Ujjain
              </h3>
              <p>
                Need to catch a flight from <strong>Devi Ahilya Bai Holkar Airport, Indore</strong>?
                We provide reliable, on-time <strong>Indore airport pickup and drop from Ujjain</strong>.
                Our drivers track your flight and adjust pickup times accordingly. Available for early morning,
                late night, and all odd-hour flights. AC cabs only — Sedan, Ertiga, and Innova Crysta available.
              </p>

              <h3 className="text-lg font-bold text-secondary pt-2">
                Simhastha Kumbh Mela & Special Occasions
              </h3>
              <p>
                Ujjain hosts the grand <strong>Simhastha Kumbh Mela</strong> every 12 years — one of the
                largest religious gatherings in the world. Krishna Tour & Travels has experience managing
                pilgrim transportation during Simhastha, Kartik Mela, and other major festivals at{" "}
                <strong>Mahakaleshwar, Ram Ghat and Harsiddhi Mata</strong>. We offer group bookings,
                Tempo Traveller hire and customised itineraries for large groups.
              </p>

              <h3 className="text-lg font-bold text-secondary pt-2">
                Why Book Taxi with Krishna Tour & Travels in Ujjain?
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>✅ Trusted & verified drivers with deep knowledge of Ujjain temples and routes</li>
                <li>✅ Clean, well-maintained AC cabs — Sedan, Ertiga, Innova, Tempo Traveller</li>
                <li>✅ Best and transparent prices — no hidden charges</li>
                <li>✅ 24/7 availability — including 3 AM Bhasma Aarti pickups</li>
                <li>✅ Quick booking via WhatsApp or Call — response within minutes</li>
                <li>✅ Pooja assistance and customised pilgrimage itineraries available</li>
                <li>✅ Serving Ujjain, Indore, Bhopal, Omkareshwar, Maheshwar, Mandu & all MP destinations</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}