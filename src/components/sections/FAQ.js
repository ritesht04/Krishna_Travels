"use client";

import { useState } from "react";

const faqs = [
  { q: "How can I book a taxi in Ujjain?", a: "You can easily book a taxi by calling us directly, sending a WhatsApp message, or filling out the enquiry form on our website. We respond within minutes." },
  { q: "Do you provide cab service for Mahakaleshwar darshan in Ujjain?", a: "Yes, we offer dedicated cab service for Mahakaleshwar darshan including early morning Bhasma Aarti pickups. We cover all Ujjain temples — Kal Bhairav, Harsiddhi Mata, Mangalnath, Ram Ghat, Chintaman Ganesh, Sandipani Ashram and Navgrah Mandir." },
  { q: "Do you provide Ujjain local sightseeing taxis?", a: "Yes, we offer local sightseeing taxi packages for Mahakal Temple, Kal Bhairav, Harsiddhi Temple, Ram Ghat, Mangalnath, Chintaman Ganesh, Sandipani Ashram, Bhartrihari Caves, Gadkalika Temple and all popular places in Ujjain." },
  { q: "Do you offer Indore airport pickup & drop service?", a: "Yes, we provide on-time Indore airport (Devi Ahilya Bai Holkar Airport) pickup and drop service from Ujjain with clean AC cabs and professional drivers, available 24 hours a day." },
  { q: "What routes are available from Ujjain?", a: "Popular routes include Ujjain to Omkareshwar, Ujjain to Indore, Ujjain to Bhopal, Ujjain to Mandu, Ujjain to Maheshwar, Ujjain to Baglamukhi Temple, Ujjain to Dewas, Ujjain to Dhar, Ujjain to Ratlam and Ujjain to Mandsaur." },
  { q: "What is the fare for Ujjain to Omkareshwar taxi?", a: "Our Ujjain to Omkareshwar taxi fare depends on the vehicle type (Sedan, Ertiga, Innova). Contact us on WhatsApp for the latest and most affordable price. We offer AC cabs with a full-day return trip option." },
  { q: "Do you provide early morning Bhasma Aarti cab service in Ujjain?", a: "Yes, we provide early morning cab service for Bhasma Aarti at Mahakaleshwar Temple. Our drivers pick you up at any hour — 3 AM, 4 AM or whenever your darshan is scheduled." },
  { q: "Do you provide service during Simhastha Kumbh Mela in Ujjain?", a: "Yes, Krishna Tour & Travels provides reliable cab and taxi services during Simhastha Kumbh Mela in Ujjain. We handle pilgrim transportation, group travel and outstation trips during the Kumbh period." },
  { q: "Are your taxi fares affordable?", a: "Yes, we offer competitive and transparent pricing with no hidden charges. We provide best-price cabs in Ujjain for temple tours, outstation trips and airport transfers. Contact us on call or WhatsApp for the latest fare." },
  { q: "What types of vehicles are available?", a: "We provide a variety of vehicles: Sedan (Swift Dzire, Honda Amaze), Ertiga (6-seater), Innova Crysta (7-seater), Tempo Traveller (12-seater) for group travel and other options to suit your budget and group size." },
  { q: "Do you offer one-day trip packages from Ujjain?", a: "Yes! Popular one-day trips from Ujjain include Ujjain to Omkareshwar & back, Ujjain to Maheshwar, Ujjain to Mandu, and combined Indore + Omkareshwar same-day tours." },
  { q: "Can I book a cab from Ujjain to Indore city?", a: "Yes, we provide affordable Ujjain to Indore city transfer. Our cabs depart at your chosen time and drop you anywhere in Indore city — railway station, bus stand, airport or hotel." },
  { q: "Do you offer Ram Ghat taxi service in Ujjain?", a: "Yes, we provide cab service to Ram Ghat for evening Aarti and early morning holy dips. Ram Ghat is one of the most visited places in Ujjain and we ensure on-time pickup and drop." },
  { q: "Are drivers verified and professional?", a: "Yes, all our drivers are experienced, verified and polite. They know all Ujjain temples, roads and routes very well. Your safety and comfort are our top priority." },
  { q: "Why choose Krishna Tour & Travels?", a: "We offer clean AC cabs, best fares in Ujjain, on-time pickup, experienced & trusted drivers, 24/7 customer support, pooja assistance, and customised tour packages for pilgrims and tourists visiting Ujjain." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-text-light">Taxi service in Ujjain – common questions answered.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4">
                <span className="font-semibold text-secondary text-sm sm:text-base">{faq.q}</span>
                <span className={`shrink-0 text-primary text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-text-light text-sm px-5 pb-4">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}