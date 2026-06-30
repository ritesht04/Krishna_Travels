"use client";

import { useState } from "react";

const faqs = [
  { q: "How can I book a taxi in Ujjain?", a: "You can easily book a taxi by calling us directly, sending a WhatsApp message, or filling out the enquiry form on our website." },
  { q: "Do you provide Ujjain local sightseeing taxis?", a: "Yes, we offer local sightseeing taxi packages for Mahakal Temple, Kal Bhairav, Harsiddhi Temple and other popular places." },
  { q: "Do you offer Indore airport pickup & drop service?", a: "Yes, we provide on-time Indore airport pickup and drop service with clean AC cabs and professional drivers." },
  { q: "What routes are available from Ujjain?", a: "Popular routes include Ujjain to Omkareshwar, Indore, Bhopal, Mandu, Maheshwar and Baglamukhi Temple." },
  { q: "Are your taxi fares affordable?", a: "Yes, we offer competitive and transparent pricing with no hidden charges. Contact us on call or WhatsApp for the latest fare." },
  { q: "What types of vehicles are available?", a: "We provide Sedan, SUV, Ertiga, Innova Crysta, Tempo Traveller and group travel vehicles." },
  { q: "Are drivers verified and professional?", a: "Yes, all our drivers are experienced, polite and verified for safe travel." },
  { q: "Why choose Krishna Tour & Travels?", a: "We offer clean cabs, best fares, on-time pickup, trusted drivers and 24/7 customer support for every journey." },
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