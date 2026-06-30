// export default function WhatsAppButton() {
//   return (
//     <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
//       <a href="tel:9131691660" aria-label="Call Now" className="bg-secondary hover:bg-secondary-dark text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-transform hover:scale-110">📞</a>
//       <a href="https://wa.me/9131691660?text=Hello%20Krishna%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="bg-accent hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-transform hover:scale-110">💬</a>
//     </div>
//   );
// }
export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      <a href="tel:9131691660" aria-label="Call Now" className="bg-secondary hover:bg-secondary-dark text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.55.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.55 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
        </svg>
      </a>

      <a href="https://wa.me/9131691660?text=Hello%20Krishna%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="bg-[#25D366] hover:bg-[#1ebe5b] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.45 1.29 4.89L2 22l5.31-1.39a9.93 9.93 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2zm5.81 14.04c-.25.7-1.45 1.34-2 1.43-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.29.6-.36.8-.36h.58c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.16 1.03 2.13 1.36 2.43 1.51.3.15.47.13.65-.08.18-.21.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.74.82 2.03.97.29.15.49.22.56.34.07.13.07.74-.18 1.44z" />
        </svg>
      </a>
    </div>
  );
}