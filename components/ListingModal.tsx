"use client";

import { useEffect } from "react";
import { X, MapPin, BedDouble, Bath, Ruler, Check, MessageCircle } from "lucide-react";
import { formatPKR, whatsappLink, type Listing } from "@/data/listings";
import { typeIcon } from "./ListingCard";

export default function ListingModal({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-emerald-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${listing.gradient} sm:h-52`}>
          <div className="scale-125">{typeIcon(listing.type, 52)}</div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-emerald-950 backdrop-blur transition hover:bg-white"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
          <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-900 backdrop-blur">
            {listing.type} · {listing.size}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-display text-2xl font-bold text-gold-600">{formatPKR(listing.price)}</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-emerald-950 sm:text-3xl">
            {listing.title}
          </h2>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-stone-500">
            <MapPin size={15} className="text-emerald-700" />
            {listing.area}, {listing.city}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "Bedrooms", value: listing.beds ?? "—", icon: <BedDouble size={17} /> },
              { label: "Bathrooms", value: listing.baths ?? "—", icon: <Bath size={17} /> },
              { label: "Area", value: listing.size, icon: <Ruler size={17} /> },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-emerald-50/70 px-3 py-3 text-center">
                <div className="mx-auto mb-1 w-fit text-emerald-800">{s.icon}</div>
                <p className="text-sm font-bold text-emerald-950">{s.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-stone-400">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-relaxed text-stone-600">{listing.description}</p>

          <h3 className="mt-6 font-display text-lg font-semibold text-emerald-950">Key Features</h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {listing.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <Check size={12} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(listing)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1faa53] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#178a42]"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="rounded-xl border-2 border-stone-200 px-6 py-3.5 text-sm font-semibold text-stone-600 transition hover:border-stone-300 hover:text-stone-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
