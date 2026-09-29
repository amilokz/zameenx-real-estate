"use client";

import { useMemo, useState } from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { LISTINGS, formatPKR, type Listing } from "@/data/listings";
import type { Filters } from "./Hero";
import ListingCard from "./ListingCard";
import ListingModal from "./ListingModal";

export default function ListingsSection({ filters, onReset }: { filters: Filters; onReset: () => void }) {
  const [selected, setSelected] = useState<Listing | null>(null);

  const results = useMemo(
    () =>
      LISTINGS.filter(
        (l) =>
          (filters.city === "All" || l.city === filters.city) &&
          (filters.type === "All" || l.type === filters.type) &&
          l.price <= filters.maxPrice
      ),
    [filters]
  );

  const hasActiveFilters = filters.city !== "All" || filters.type !== "All" || filters.maxPrice < 150000000;

  return (
    <section id="listings" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Handpicked For You</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-3 text-stone-500">
            {results.length} {results.length === 1 ? "property" : "properties"} found
            {filters.city !== "All" && <> in <span className="font-semibold text-emerald-900">{filters.city}</span></>}
            {filters.type !== "All" && <> · <span className="font-semibold text-emerald-900">{filters.type}</span></>}
            <> · up to <span className="font-semibold text-emerald-900">{formatPKR(filters.maxPrice)}</span></>
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((l) => (
              <ListingCard key={l.id} listing={l} onView={setSelected} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
              <SearchX size={26} />
            </div>
            <h3 className="font-display text-xl font-semibold text-emerald-950">No properties match</h3>
            <p className="mt-2 text-sm text-stone-500">
              Try widening your price range or choosing a different city or type.
            </p>
            {hasActiveFilters && (
              <button
                onClick={onReset}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                <RotateCcw size={15} />
                Reset Filters
              </button>
            )}
          </div>
        )}
      </div>

      {selected && <ListingModal listing={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
