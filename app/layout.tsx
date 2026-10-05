import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vistours-suriname.grassy-charm-7826.chatgpt.site"),
  title: "Sodjo Tours Suriname",
  description: "Multi-day fishing expeditions on Suriname's Brokopondo Reservoir.",
  applicationName: "Sodjo Tours",
  keywords: ["fishing Suriname", "Suriname fishing tour", "Brokopondo fishing", "Brokopondo fishing tour", "peacock bass Suriname", "toekanari fishing", "Suriname adventure tours", "Brokopondo tour", "fishing trip Suriname"],
  openGraph: { type: "website", siteName: "Sodjo Tours", title: "Sodjo Tours | Brokopondo fishing expeditions", description: "Multi-day fishing expeditions on Suriname's Brokopondo Reservoir." },
  twitter: { card: "summary", title: "Sodjo Tours", description: "Multi-day fishing expeditions on Suriname's Brokopondo Reservoir." },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "TouristTrip", name: "Brokopondo Fishing Expedition", description: "A multi-day fishing and island camping expedition on the Brokopondo Reservoir.", touristType: ["Adventure traveler", "Angler", "Nature enthusiast"], itinerary: { "@type": "ItemList", name: "Brokopondo Reservoir, Suriname" } }) }} />
      </body>
    </html>
  );
}
