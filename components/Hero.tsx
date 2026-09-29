"use client";

import { Search, MapPin, Building2, Wallet } from "lucide-react";
import { CITIES, TYPES, formatPKR, type City, type PropertyType } from "@/data/listings";

export interface Filters {
  city: City | "All";
  type: PropertyType | "All";
  maxPrice: number; // in PKR
}

interface HeroProps {
  filters: Filters;
  onChange: (f: Filters) => void;
}

const PRICE_STEPS = [20000000, 50000000, 100000000, 150000000];

export default function Hero({ filters, onChange }: HeroProps) {
  const scrollToListings = () => {
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-emerald-950">
      {/* decorative pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            Pakistan&apos;s Trusted Property Portal
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Home <br className="hidden sm:block" /> in{" "}
            <span className="text-gold-400">Pakistan</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-emerald-100/80 sm:text-lg">
            Verified houses, flats, plots and commercial properties across Lahore,
            Islamabad, Karachi and Rawalpindi — handpicked by experts you can trust.
          </p>
        </div>

        {/* Search / filter bar */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-4 shadow-2xl shadow-black/30 sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
              <MapPin size={18} className="shrink-0 text-emerald-800" />
              <span className="w-full">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-stone-400">City</span>
                <select
                  value={filters.city}
                  onChange={(e) => onChange({ ...filters, city: e.target.value as Filters["city"] })}
                  className="w-full bg-transparent text-sm font-semibold text-emerald-950 outline-none"
                >
                  <option value="All">All Cities</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </span>
            </label>

            <label className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
              <Building2 size={18} className="shrink-0 text-emerald-800" />
              <span className="w-full">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-stone-400">Property Type</span>
                <select
                  value={filters.type}
                  onChange={(e) => onChange({ ...filters, type: e.target.value as Filters["type"] })}
                  className="w-full bg-transparent text-sm font-semibold text-emerald-950 outline-none"
                >
                  <option value="All">All Types</option>
                  {TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </span>
            </label>

            <label className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
              <Wallet size={18} className="shrink-0 text-emerald-800" />
              <span className="w-full">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                  Max Price · <span className="text-emerald-800">{formatPKR(filters.maxPrice).replace("PKR ", "")}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={PRICE_STEPS.length - 1}
                  step={1}
                  value={PRICE_STEPS.indexOf(filters.maxPrice) === -1 ? PRICE_STEPS.length - 1 : PRICE_STEPS.indexOf(filters.maxPrice)}
                  onChange={(e) => onChange({ ...filters, maxPrice: PRICE_STEPS[Number(e.target.value)] })}
                  className="w-full accent-emerald-800"
                  aria-label="Maximum price"
                />
              </span>
            </label>

            <button
              onClick={scrollToListings}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-800"
            >
              <Search size={17} />
              Search
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-stone-400">
            Filters apply instantly to the listings below
          </p>
        </div>
      </div>
    </section>
  );
}
