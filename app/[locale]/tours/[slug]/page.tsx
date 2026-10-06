import { MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { FieldGallery } from "@/components/field-gallery";
import { dictionary, species, tours, type Locale } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/links";

export default async function TourPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();
  const nl = locale === "nl";
  const t = dictionary[locale];
  const copy = nl ? {
    eyebrow: "Visexpeditie · Brokopondo, Suriname", name: "Brokopondo Visexpeditie", duration: "Vanaf 2 dagen / 1 nacht", difficulty: "Makkelijk tot gemiddeld",
    expedition: "De expeditie", title: "Meer tijd op het stuwmeer.", intro: "De reis begint bij je accommodatie en ontvouwt zich rustig: van de weg naar het water, van het water naar het eiland en van het eiland naar de ochtend. Vissen is een belangrijk deel van de ervaring, maar een vangst kunnen we nooit beloven.",
    itinerary: "Vanaf twee dagen, afgestemd op het seizoen.", price: "Prijs op aanvraag", request: "Vraag je data aan.", side: "We bevestigen beschikbaarheid en de definitieve details persoonlijk.", species: "Vissoorten", bring: "Neem mee wat je buiten prettig vindt.", safety: "Reddingsvesten, weerplanning en noodvoorzieningen zijn onderdelen die we per trip bevestigen.",
  } : {
    eyebrow: "Fishing expedition · Brokopondo, Suriname", name: tour.name, duration: "From 2 days / 1 night", difficulty: "Easy to moderate",
    expedition: "The expedition", title: "More time on the reservoir.", intro: "The journey begins at your accommodation and unfolds slowly: road to water, water to island, island to dawn. Fishing is part of the story, not a promise of a particular catch.",
    itinerary: "From two days, shaped by the season.", price: "Price on request", request: "Request your dates.", side: "We confirm availability and final package details personally.", species: "Fish species", bring: "Bring a little practical comfort.", safety: "Life jackets, weather planning and emergency considerations are confirmed for each departure.",
  };
  const highlights = nl ? ["Vissen op het Brokopondo-stuwmeer", "Overnachten op een privé-eiland", "Lokale gids op het water", "Wakker worden aan het stuwmeer", "Kleinschalige ervaring"] : tour.highlights;
  const bring = nl ? ["Lichte kleding", "Lange broek", "Zwemkleding", "Zonbescherming", "Muggenmiddel", "Toiletartikelen", "Kleine rugzak", "Waterdichte telefoonhoes", "Powerbank", "Camera", "Dichte schoenen of goede sandalen", "Persoonlijke medicatie"] : ["Lightweight clothing", "Long trousers", "Swimwear", "Sun protection", "Mosquito repellent", "Personal toiletries", "Small backpack", "Waterproof phone protection", "Power bank", "Camera", "Closed shoes or suitable sandals", "Personal medication"];
  return <main className="tour-page">
    <section className="tour-hero"><div className="tour-hero-image"/><div className="shell tour-hero-content"><p className="eyebrow light">{copy.eyebrow}</p><h1>{copy.name}</h1><p>{t.tour.summary}</p></div></section>
    <section className="shell tour-overview"><div className="overview-grid"><div><span>{t.tour.location}</span></div><div><span>{copy.duration}</span></div><div><span>{t.tour.level}</span></div><div><span>{copy.difficulty}</span></div></div>
      <div className="tour-layout"><div className="tour-body"><p className="eyebrow">{copy.expedition}</p><h2>{copy.title}</h2><p className="lead">{copy.intro}</p><div className="highlight-grid">{highlights.map((item) => <div key={item}>{item}</div>)}</div>
        <section className="tour-section"><p className="eyebrow">{t.tour.itinerary}</p><h2>{copy.itinerary}</h2><p className="quiet">{t.tour.itineraryNote}</p><div className="itinerary">{tour.itinerary.map((day) => <article key={day.day}><span>{day.day}</span><h3>{day.title}</h3><ul>{day.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
        <section className="tour-section two-column"><div><p className="eyebrow">{t.tour.included}</p><ul className="check-list">{tour.included.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">{t.tour.excluded}</p><ul className="check-list muted-list">{tour.excluded.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section className="species-section"><p className="eyebrow">{copy.species}</p><h2>{t.tour.species}</h2><p>{t.tour.speciesCopy}</p><div className="species-grid">{species.map((item) => <article key={item.name}><h3>{item.name}</h3><span>{item.alt}</span><p>{item.note}</p></article>)}</div></section>
        <section className="prepare-section"><p className="eyebrow">{t.tour.prepare}</p><h2>{copy.bring}</h2><p>{t.tour.prepareCopy}</p><div className="bring-list">{bring.map((item) => <span key={item}>{item}</span>)}</div><div className="safety-note"><p>{copy.safety}</p></div></section>
      </div><aside className="booking-card"><p className="eyebrow">{copy.price}</p><h3>{copy.request}</h3><p>{copy.side}</p><BookingForm t={t} compact/><a className="whatsapp-link" href={whatsappUrl(nl ? "Hallo Fun Island Tours, ik wil graag meer informatie over de Brokopondo-visexpeditie." : "Hi Fun Island Tours, I'm interested in the Brokopondo Fishing Expedition. I'd like more information about availability.")}><MessageCircle size={17}/>{t.tour.whatsapp}</a></aside></div>
    </section><FieldGallery locale={locale}/>
  </main>;
}
