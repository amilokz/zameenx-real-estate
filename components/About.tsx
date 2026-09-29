"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Award, Users } from "lucide-react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 1200, suffix: "+", label: "Properties Sold" },
  { value: 850, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "", label: "Cities Served" },
];

const POINTS = [
  { icon: <ShieldCheck size={20} />, title: "100% Verified Listings", text: "Every property is physically verified with clear documentation before it goes live." },
  { icon: <Award size={20} />, title: "15+ Years of Trust", text: "A team of seasoned consultants who know every block of DHA, Bahria and Clifton." },
  { icon: <Users size={20} />, title: "Dedicated Advisor", text: "One point of contact from first visit to final registry — no chasing, no confusion." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-emerald-950 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              The Name Pakistan Trusts with Property
            </h2>
            <p className="mt-4 leading-relaxed text-emerald-100/75">
              Since 2010, ZameenX has helped thousands of families find homes and investors
              find growth across Lahore, Islamabad, Karachi and Rawalpindi. We combine
              old-school relationship values with modern, transparent processes —
              so every deal feels safe, fair and simple.
            </p>
            <div className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-emerald-100/65">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-emerald-100/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
