import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "ZameenX found us a beautiful 10 marla house in Bahria Town within two weeks. Transparent dealing, no hidden charges — I recommend them to everyone.",
    name: "Ahmed Raza",
    detail: "Homeowner · Rawalpindi",
    initials: "AR",
  },
  {
    quote:
      "As an overseas Pakistani, I was nervous about investing back home. My dedicated advisor handled everything — verification, registry, even the video tours.",
    name: "Fatima Khan",
    detail: "Investor · Islamabad",
    initials: "FK",
  },
  {
    quote:
      "They sold my Clifton apartment above asking price in under a month. Professional photography, serious buyers, smooth paperwork. Worth every rupee.",
    name: "Bilal Sheikh",
    detail: "Seller · Karachi",
    initials: "BS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Client Stories</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Loved by Families Across Pakistan
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
            >
              <Quote size={28} className="text-gold-500" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-stone-600">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-900 font-display text-sm font-bold text-gold-400">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-emerald-950">{t.name}</span>
                  <span className="block text-xs text-stone-400">{t.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
