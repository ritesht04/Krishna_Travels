import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://krishnatourtravels.com"),
  title: "Krishna Tour & Travels Ujjain | Trusted Taxi Service",
  description:
    "Krishna Tour & Travels offers trusted taxi services in Ujjain & Indore. Book cabs for Omkareshwar, Bhopal, Baglamukhi, Mandu, Maheshwar, local sightseeing, airport pickup-drop & outstation travel.",
  keywords:
    "taxi service in ujjain, cab service ujjain, ujjain to omkareshwar taxi, ujjain to indore cab, ujjain to bhopal taxi, indore airport taxi, ujjain outstation cab, Ujjain, Ujjain tours, Ujjain travels, Ujjain places, Mahakaleshwar, Harsiddhi, Omkareshwar, Chintaman Ganesh",
  verification: {
    google: "zegv5UgWN477wc-eWFmIAK2RS7CVMPY8QLz7q9NR1do",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}