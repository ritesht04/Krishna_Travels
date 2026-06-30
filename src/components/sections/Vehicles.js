// const vehicles = [
//   { tag: "Top Rated", name: "Aura", seats: "5 Seats", bags: "5 Bags", desc: "Premium SUV for family trips, airport transfers & comfortable outstation travel." },
//   { tag: "Popular", name: "Ertiga", seats: "7 Seats", bags: "4 Bags", desc: "Best MPV for local sightseeing, temple tours & group travel with comfort." },
//   { tag: "Budget", name: "Swift Dzire", seats: "4 Seats", bags: "2 Bags", desc: "Economical sedan perfect for daily rides, station pickup & city transfers." },
//   { tag: "Comfort", name: "Baleno", seats: "5 Seats", bags: "3 Bags", desc: "Stylish hatchback for smooth local rides, airport drop & city travel." },
//   { tag: "Group Tour", name: "Tempo Traveller", seats: "9-26 Seats", bags: "10 Bags", desc: "Ideal for weddings, family groups, pilgrim tours & long route journeys." },
//   { tag: "Mini Bus", name: "Winger", seats: "9-15 Seats", bags: "4-8 Bags", desc: "Best option for staff transport, group tours & short distance travel." },
// ];

// export default function Vehicles() {
//   return (
//     <section id="vehicles" className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Vehicles</span>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Choose Ride For Every Journey</h2>
//           <p className="text-text-light max-w-xl mx-auto">Premium taxi options for airport, local sightseeing & outstation trips.</p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vehicles.map((v) => (
//             <div key={v.name} className="bg-muted rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100">
//               <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">{v.tag}</span>
//               <h3 className="text-xl font-bold text-secondary mb-2">{v.name}</h3>
//               <div className="flex gap-4 text-sm text-text-light mb-3">
//                 <span>👤 {v.seats}</span>
//                 <span>🧳 {v.bags}</span>
//                 <span>❄️ AC</span>
//               </div>
//               <p className="text-text-light text-sm mb-5">{v.desc}</p>
//               <div className="flex gap-3">
//                 <a href="tel:+919999999999" className="flex-1 text-center bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold py-2.5 rounded-full transition-colors">Call Now</a>
//                 <a href="https://wa.me9131691660" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-accent hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-full transition-colors">Book Now</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const vehicles = [
  { tag: "Top Rated", name: "Aura", seats: "5 Seats", desc: "Premium Sedan for family trips, airport transfers & comfortable outstation travel.", img: "/images/Aura.png" },
  { tag: "Popular", name: "Ertiga", seats: "7 Seats", desc: "Best MPV for local sightseeing, temple tours & group travel with comfort.", img: "/images/Ertiga.JPEG " },
  { tag: "Budget", name: "Swift Dzire", seats: "4 Seats", desc: "Economical sedan perfect for daily rides, station pickup & city transfers.", img: "/images/swift-dzire.JPEG" },
  { tag: "Comfort", name: "Baleno", seats: "5 Seats", desc: "Stylish hatchback for smooth local rides, airport drop & city travel.", img: "/images/baleno.JPEG" },
  { tag: "Group Tour", name: "Tempo Traveller", seats: "9-26 Seats", desc: "Ideal for weddings, family groups, pilgrim tours & long route journeys.", img: "/images/tempo-traveller.JPEG" },
  { tag: "Mini Bus", name: "Winger", seats: "9-15 Seats", desc: "Best option for staff transport, group tours & short distance travel.", img: "/images/Winger.JPEG" },
];

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Vehicles</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mt-2 mb-3">Choose Ride For Every Journey</h2>
          <p className="text-text-light max-w-xl mx-auto">Premium taxi options for airport, local sightseeing & outstation trips.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div key={v.name} className="bg-muted rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative w-full h-48">
                <Image
                  src={v.img}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={i < 3}
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {v.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{v.name}</h3>
                <div className="flex gap-4 text-sm text-text-light mb-3">
                  <span>👤 {v.seats}</span>
                  <span>🧳 {v.bags}</span>
                  <span>❄️ AC</span>
                </div>
                <p className="text-text-light text-sm mb-5">{v.desc}</p>
                <div className="flex gap-3">
                  <a href="tel:+919999999999" className="flex-1 text-center bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold py-2.5 rounded-full transition-colors">Call Now</a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-accent hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-full transition-colors">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}