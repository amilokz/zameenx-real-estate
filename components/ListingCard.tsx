"use client";

import { Home, Building2, LandPlot, Store, MapPin, BedDouble, Bath, Ruler, ArrowRight } from "lucide-react";
import { formatPKR, type Listing } from "@/data/listings";

export function typeIcon(type: Listing["type"], size = 44) {
  const cls = "text-white/90";
  switch (type) {
    case "House": return <Home size={size} className={cls} strokeWidth={1.4} />;
    case "Flat": return <Building2 size={size} className={cls} strokeWidth={1.4} />;
    case "Plot": return <LandPlot size={size} className={cls} strokeWidth={1.4} />;
    case "Commercial": return <Store size={size} className={cls} strokeWidth={1.4} />;
  }
}

export default function ListingCard({ listing, onView }: { listing: Listing; onView: (l: Listing) => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${listing.gradient}`}>
        <div className="transition-transform duration-300 group-hover:scale-110">
          {typeIcon(listing.type)}
        </div>
        {listing.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-950">
            {listing.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-900 backdrop-blur">
          {listing.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xl font-bold text-gold-600">{formatPKR(listing.price)}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-emerald-950">
          {listing.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-stone-500">
          <MapPin size={14} className="text-emerald-700" />
          {listing.area}, {listing.city}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-4 text-sm text-stone-600">
          {listing.beds !== null && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} className="text-emerald-800" /> {listing.beds} Beds
            </span>
          )}
          {listing.baths !== null && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} className="text-emerald-800" /> {listing.baths} Baths
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Ruler size={16} className="text-emerald-800" /> {listing.size}
          </span>
        </div>

        <button
          onClick={() => onView(listing)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-900 px-4 py-2.5 text-sm font-semibold text-emerald-900 transition-all hover:bg-emerald-900 hover:text-white"
        >
          View Details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}
