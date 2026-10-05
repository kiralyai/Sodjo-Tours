import Link from "next/link";
import { type Locale } from "@/lib/site-data";

export default async function IslandPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const nl = locale === "nl";
  return <main>
    <section className="island-page-hero"><div className="shell">
      <p className="eyebrow light">Sodjo Island · {nl ? "Brokopondo-stuwmeer" : "Brokopondo Reservoir"}</p>
      <h1>{nl ? "Je uitvalsbasis midden in Brokopondo." : "Your base in the middle of Brokopondo."}</h1>
      <p>{nl ? "Een privé-eiland van de familie, vlak bij het Libi Da Wai-gebied. We delen de locatie alleen op een manier die past bij een kleinschalige trip." : "A family/private island close to the Libi Da Wai area. Location details are shared only in a way that suits a small-scale trip."}</p>
    </div></section>
    <section className="section shell island-page-copy"><div><p className="eyebrow">{nl ? "Tussen het vissen door" : "Between casts"}</p><h2>{nl ? "Meer dan alleen een plek om te slapen." : "More than a place to sleep."}</h2></div><div><p className="lead">{nl ? "Sodjo Island is het hart van de expeditie. Hang je hangmat op, eet samen, zie het licht over het water schuiven en laat de stad ver achter je." : "Sodjo Island anchors the expedition. Set up a hammock, eat together, watch light move across the water and let the city feel far away."}</p><p>{nl ? "De exacte locatie blijft privé. De kaart hieronder toont daarom alleen het bredere Brokopondo-gebied." : "Exact location details remain private. The map below deliberately shows the broader Brokopondo area only."}</p></div></section>
    <section className="shell map-card"><div><span>{nl ? "Brokopondo-stuwmeer" : "Brokopondo Reservoir"}</span><small>{nl ? "Alleen de globale regio" : "Approximate region only"}</small></div><div className="map-lines"/></section>
    <section className="closing-cta"><div className="shell"><p className="eyebrow">{nl ? "Blijf dicht bij het water" : "Stay close to the water"}</p><h2>{nl ? "Beleef het eiland als onderdeel van de expeditie." : "See the island as part of the expedition."}</h2><Link className="button" href={`/${locale}/book`}>{nl ? "Beschikbaarheid aanvragen" : "Request availability"}</Link></div></section>
  </main>;
}
