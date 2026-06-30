export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Contact Us</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Get In Touch With Us</h2>
          <p className="text-text-light max-w-xl mx-auto">Reach out for bookings, queries or custom travel packages — available 24x7.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4 bg-muted rounded-2xl p-5">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-secondary text-sm mb-1">Phone</p>
                <a href="tel:+919999999999" className="text-text-light text-sm hover:text-primary">+91 99999 99999</a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted rounded-2xl p-5">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold text-secondary text-sm mb-1">Email</p>
                <a href="mailto:info@krishnatourtravels.com" className="text-text-light text-sm hover:text-primary">info@krishnatourtravels.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted rounded-2xl p-5">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-secondary text-sm mb-1">Address</p>
                <p className="text-text-light text-sm">Your Office Address, Ujjain, Madhya Pradesh</p>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <a href="tel:9131691660" className="flex-1 text-center bg-secondary hover:bg-secondary-dark text-white font-semibold py-3.5 rounded-full transition-colors">📞 Call Now</a>
              <a href="https://wa.me/9131691660" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-accent hover:bg-green-700 text-white font-semibold py-3.5 rounded-full transition-colors">💬 WhatsApp</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-full min-h-[320px]">
            <iframe
              title="Krishna Tour & Travels Location"
              src="https://www.google.com/maps?q=Ujjain,Madhya+Pradesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}