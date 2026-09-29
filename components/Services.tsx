import { KeyRound, Handshake, Building2, TrendingUp } from "lucide-react";

const SERVICES = [
  {
    icon: <KeyRound size={26} />,
    title: "Buy",
    text: "From first homes to luxury villas — we shortlist verified properties that match your budget and lifestyle, and negotiate the best deal.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Sell",
    text: "Professional valuation, premium marketing and qualified buyers. We sell your property faster and at the right price.",
  },
  {
    icon: <Building2 size={26} />,
    title: "Rent",
    text: "Verified rental listings for families and corporates, with transparent agreements and end-to-end move-in support.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Investment Advisory",
    text: "Data-backed guidance on high-growth areas, rental yields and off-plan projects across Pakistan's major cities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">What We Do</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-stone-500">
            Complete real-estate services under one roof — whether you&apos;re buying your first home or building a portfolio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-stone-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-900/20 hover:shadow-xl hover:shadow-emerald-950/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-900 text-gold-400 transition-colors group-hover:bg-emerald-800">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-emerald-950">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
