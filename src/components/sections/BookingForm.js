// "use client";

// import { useState } from "react";

// export default function BookingForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = `Hello Krishna Tour & Travels,%0A%0AI want to book a taxi.%0AName: ${formData.name}%0APhone: ${formData.phone}%0APickup: ${formData.pickup}%0ADrop: ${formData.drop}`;

//     window.open(`https://wa.me/9131691660?text=${message}`, "_blank");
//     setSubmitted(true);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <input
//         type="text"
//         name="name"
//         required
//         placeholder="Enter Your Name *"
//         value={formData.name}
//         onChange={handleChange}
//         className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//       />
//       <input
//         type="tel"
//         name="phone"
//         required
//         placeholder="Enter Phone Number *"
//         value={formData.phone}
//         onChange={handleChange}
//         className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//       />
//       <input
//         type="text"
//         name="pickup"
//         required
//         placeholder="Pickup Location *"
//         value={formData.pickup}
//         onChange={handleChange}
//         className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//       />
//       <input
//         type="text"
//         name="drop"
//         required
//         placeholder="Drop Location *"
//         value={formData.drop}
//         onChange={handleChange}
//         className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//       />

//       <button
//         type="submit"
//         className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-lg transition-colors"
//       >
//         Get Best Fare on WhatsApp
//       </button>

//       {submitted && (
//         <p className="text-accent text-sm text-center font-medium">
//           ✔ Redirecting to WhatsApp...
//         </p>
//       )}
//     </form>
//   );
// }
"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello Krishna Tour & Travels,\n\nI want to book a taxi.\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}`
    );

    window.open(`https://wa.me/9131691660?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" required placeholder="Enter Your Name *" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
      <input type="tel" name="phone" required placeholder="Enter Phone Number *" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
      <input type="text" name="pickup" required placeholder="Pickup Location *" value={formData.pickup} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
      <input type="text" name="drop" required placeholder="Drop Location *" value={formData.drop} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />

      <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-lg transition-colors">
        Get Best Fare on WhatsApp
      </button>

      {submitted && (
        <p className="text-accent text-sm text-center font-medium">✔ Redirecting to WhatsApp...</p>
      )}
    </form>
  );
}