import "./globals.css";

const siteName = "Krishna Tour & Travels";
const siteUrl = "https://krishnatourtravels.com";
const title = "Krishna Tour & Travels Ujjain | Best Taxi & Cab Service for Mahakaleshwar, Temples & Outstation Trips";
const description =
  "Krishna Tour & Travels – Ujjain's most trusted taxi & cab service. Book cabs for Mahakaleshwar darshan, Kal Bhairav, Harsiddhi, Chintaman Ganesh, Omkareshwar, Ram Ghat, Mangalnath, Sandipani Ashram & all Ujjain temples. Also covers Ujjain to Indore, Bhopal, Mandu, Maheshwar, Baglamukhi. 24/7 service. Call or WhatsApp: 9131691660.";
const keywords = [
  // --- Core Service Keywords ---
  "taxi service in ujjain",
  "cab service ujjain",
  "cab booking ujjain",
  "taxi booking ujjain",
  "best taxi service ujjain",
  "ujjain taxi",
  "ujjain cab",
  "ujjain car rental",
  "ujjain tour and travels",
  "ujjain travels",
  "taxi in ujjain",
  "cab in ujjain",
  "auto booking ujjain",
  "ola uber alternative ujjain",
  // --- Mahakaleshwar & Jyotirlinga ---
  "mahakaleshwar taxi",
  "mahakaleshwar cab service",
  "mahakaleshwar darshan taxi ujjain",
  "taxi for mahakaleshwar temple ujjain",
  "cab for mahakaleshwar",
  "jyotirlinga tour ujjain",
  "12 jyotirlinga tour from ujjain",
  "ujjain mahakal taxi",
  "mahakal mandir taxi ujjain",
  "mahakaleshwar temple tour ujjain",
  // --- Ujjain Temples & Religious Places ---
  "kal bhairav taxi ujjain",
  "harsiddhi mata taxi ujjain",
  "chintaman ganesh taxi ujjain",
  "ram ghat taxi ujjain",
  "mangalnath temple taxi ujjain",
  "sandipani ashram cab ujjain",
  "gadkalika temple taxi",
  "navgrah mandir ujjain taxi",
  "bhartrihari caves ujjain taxi",
  "kal bhairav mandir cab",
  "ujjain sightseeing taxi",
  "ujjain darshan taxi",
  "ujjain temple tour",
  "ujjain religious tour taxi",
  "ujjain pilgrimage taxi",
  "ujjain pilgrim cab",
  "ujjain puja taxi",
  "ujjain bhasma aarti taxi",
  "ujjain bhasma aarti darshan cab",
  // --- Ujjain Local Sightseeing ---
  "ujjain local sightseeing",
  "ujjain sightseeing package",
  "ujjain local taxi package",
  "ujjain full day taxi",
  "ujjain 8 hour taxi",
  "ujjain tourist places taxi",
  "ujjain places to visit cab",
  "ujjain city tour taxi",
  // --- Outstation Routes from Ujjain ---
  "ujjain to omkareshwar taxi",
  "ujjain to omkareshwar cab",
  "omkareshwar jyotirlinga taxi from ujjain",
  "ujjain to bhopal taxi",
  "ujjain to bhopal cab",
  "ujjain to indore taxi",
  "ujjain to indore cab",
  "ujjain to mandu taxi",
  "ujjain to maheshwar taxi",
  "ujjain to maheshwar cab",
  "ujjain to baglamukhi taxi",
  "ujjain to baglamukhi cab",
  "ujjain to dewas taxi",
  "ujjain to dhar taxi",
  "ujjain to ratlam taxi",
  "ujjain to mandsaur taxi",
  "ujjain to shajapur taxi",
  "ujjain to agar malwa taxi",
  "ujjain to khargone taxi",
  "ujjain to jaora taxi",
  "ujjain outstation cab",
  "outstation taxi from ujjain",
  "one way cab from ujjain",
  "round trip cab ujjain",
  // --- Indore Airport Service ---
  "indore airport taxi",
  "indore airport cab",
  "indore airport to ujjain taxi",
  "ujjain to indore airport cab",
  "indore airport pickup ujjain",
  "indore airport drop ujjain",
  "devi ahilya bai airport taxi",
  // --- Simhastha / Kumbh Mela ---
  "simhastha ujjain taxi",
  "kumbh mela ujjain cab",
  "simhastha kumbh taxi",
  "ujjain kumbh mela transport",
  // --- Route Combos ---
  "ujjain omkareshwar indore same day tour",
  "ujjain omkareshwar one day trip",
  "one day trip from ujjain",
  "ujjain to maheshwar mandu taxi",
  // --- General Travel ---
  "Madhya Pradesh taxi service",
  "MP taxi booking",
  "ac cab ujjain",
  "innova crysta ujjain",
  "ertiga cab ujjain",
  "tempo traveller ujjain",
  "group taxi ujjain",
  "affordable cab ujjain",
  "cheap taxi ujjain",
  "safe taxi ujjain",
  "24 hour taxi ujjain",
  "24x7 cab service ujjain",
  "krishna tour and travels ujjain",
  "krishna travels ujjain",
].join(", ");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": siteUrl,
      name: siteName,
      url: siteUrl,
      telephone: "+919131691660",
      email: "info@krishnatourtravels.com",
      description: description,
      image: `${siteUrl}/og-image.jpg`,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Online Transfer",
      areaServed: [
        "Ujjain", "Indore", "Bhopal", "Omkareshwar", "Maheshwar",
        "Mandu", "Baglamukhi", "Dewas", "Ratlam", "Mandsaur", "Madhya Pradesh"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ujjain",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.1765",
        longitude: "75.7885",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://wa.me/9131691660",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Taxi & Cab Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain Local Sightseeing Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mahakaleshwar Darshan Cab" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Omkareshwar Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Indore Airport Cab" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Bhopal Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Maheshwar Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Mandu Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ujjain to Baglamukhi Taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab from Ujjain" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I book a taxi in Ujjain?",
          acceptedAnswer: { "@type": "Answer", text: "Call or WhatsApp Krishna Tour & Travels at 9131691660, or fill out the enquiry form on our website. We respond within minutes." },
        },
        {
          "@type": "Question",
          name: "Do you provide cab service for Mahakaleshwar darshan in Ujjain?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, we offer dedicated cab service for Mahakaleshwar darshan, Bhasma Aarti visits, and all Ujjain temple tours including Kal Bhairav, Harsiddhi, Mangalnath, Ram Ghat and more." },
        },
        {
          "@type": "Question",
          name: "What is the fare for Ujjain to Omkareshwar taxi?",
          acceptedAnswer: { "@type": "Answer", text: "Fares for Ujjain to Omkareshwar depend on vehicle type. Contact us on WhatsApp for the latest rate. We offer AC cabs with experienced drivers." },
        },
        {
          "@type": "Question",
          name: "Do you offer Indore airport pickup and drop from Ujjain?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, we provide 24/7 Indore airport (Devi Ahilya Bai Airport) pickup and drop service from Ujjain with clean AC cabs." },
        },
      ],
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName} Ujjain`,
  },
  description,
  keywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Krishna Tour & Travels – Trusted Taxi Service in Ujjain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
  verification: {
    google: "zegv5UgWN477wc-eWFmIAK2RS7CVMPY8QLz7q9NR1do",
  },
  category: "travel",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}