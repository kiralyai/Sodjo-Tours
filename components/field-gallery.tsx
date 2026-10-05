import Image from "next/image";
import type { Locale } from "@/lib/site-data";

const images = [
  { src: "/images/field/expedition-01.jpg", alt: "Boat crossing Brokopondo Reservoir" },
  { src: "/images/field/expedition-02.jpg", alt: "Sodjo Tours expedition moment on the water" },
  { src: "/images/field/expedition-03.jpg", alt: "Landscape on a Sodjo Tours expedition" },
  { src: "/images/field/expedition-04.jpg", alt: "Fish caught during an expedition" },
];

export function FieldGallery({ locale }: { locale: Locale }) {
  const nl = locale === "nl";
  return <section className="field-gallery"><div className="shell"><div className="gallery-heading"><div><p className="eyebrow">{nl ? "Op pad met Sodjo" : "Out on the water"}</p><h2>{nl ? "Momenten van eerdere expedities." : "Moments from earlier expeditions."}</h2></div><p>{nl ? "Echte beelden uit Brokopondo. Geen beelden uit de hero, wel een inkijkje in het water, de boten en de vangst." : "Real moments from Brokopondo. Not hero imagery, just a closer look at the water, the boats and the catch."}</p></div><div className="gallery-grid">{images.map((image, index) => <figure key={image.src} className={`gallery-item item-${index + 1}`}><Image src={image.src} alt={image.alt} width={1200} height={1600} sizes="(max-width: 800px) 100vw, 33vw" /></figure>)}</div></div></section>;
}
