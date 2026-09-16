import { site } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";

/** Frame shape tuned per-photo so nothing important gets cropped out. */
const FRAME_ASPECT = ["aspect-[3/4]", "aspect-square", "aspect-[4/3]"];

export function Gallery() {
  const { gallery } = site;
  return (
    <section id="in-action" className="scroll-mt-28 bg-paper-dim py-24 text-ink-900 sm:py-32">
      <div className="shell">
        <SectionHeading index="02" eyebrow={gallery.eyebrow} title={gallery.title} intro={gallery.intro} />

        <div className="grid gap-6 sm:grid-cols-3">
          {gallery.items.map((item, i) => (
            <Reveal key={item.caption} delay={i * 100}>
              <figure className="sticker-soft group relative overflow-hidden rounded-xl">
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  label="PHOTO"
                  className={`${FRAME_ASPECT[i % FRAME_ASPECT.length]} w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]`}
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-lg bg-ink-950/85 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
