export type PropertyType = "House" | "Flat" | "Plot" | "Commercial";
export type City = "Lahore" | "Islamabad" | "Karachi" | "Rawalpindi";

export interface Listing {
  id: number;
  title: string;
  city: City;
  area: string;
  type: PropertyType;
  /** price in PKR (numeric, for filtering) */
  price: number;
  beds: number | null;
  baths: number | null;
  size: string;
  description: string;
  features: string[];
  /** tailwind gradient classes for the card art */
  gradient: string;
  badge?: string;
}

export const WHATSAPP_NUMBER = "923001234567";

export function formatPKR(n: number): string {
  if (n >= 1e7) {
    const cr = n / 1e7;
    const s = Number.isInteger(cr) ? cr.toString() : cr.toFixed(2).replace(/0$/, "");
    return `PKR ${s} Crore`;
  }
  const lakh = n / 1e5;
  const s = Number.isInteger(lakh) ? lakh.toString() : lakh.toFixed(1);
  return `PKR ${s} Lakh`;
}

export function whatsappLink(listing: Listing): string {
  const text = encodeURIComponent(
    `Assalam-o-Alaikum! I'm interested in "${listing.title}" (${listing.city}) listed at ${formatPKR(listing.price)} on ZameenX. Please share details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const CITIES: City[] = ["Lahore", "Islamabad", "Karachi", "Rawalpindi"];
export const TYPES: PropertyType[] = ["House", "Flat", "Plot", "Commercial"];

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Designer 1 Kanal House",
    city: "Lahore",
    area: "DHA Phase 6",
    type: "House",
    price: 85000000,
    beds: 5,
    baths: 6,
    size: "1 Kanal",
    description:
      "A stunning designer residence in the heart of DHA Phase 6, Lahore. Double-height lobby, imported fittings, lush lawn and a rooftop terrace with city views — built for luxury family living.",
    features: ["5 spacious bedrooms with attached baths", "Double-height drawing & dining", "Imported kitchen with pantry", "Rooftop terrace + BBQ area", "Powder room & store", "CCTV & gated community security"],
    gradient: "from-emerald-950 via-emerald-800 to-teal-700",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Modern 10 Marla House",
    city: "Rawalpindi",
    area: "Bahria Town, Phase 8",
    type: "House",
    price: 32000000,
    beds: 4,
    baths: 4,
    size: "10 Marla",
    description:
      "Brand-new solid construction 10 marla house in Bahria Town Phase 8. Spanish elevation, marble flooring and a mumty with terrace — ideal for a growing family.",
    features: ["4 bedrooms with attached baths", "Spanish-style elevation", "Marble + wooden flooring", "Mumty with open terrace", "Car porch for 2 cars", "Near school & commercial"],
    gradient: "from-teal-900 via-emerald-800 to-emerald-600",
  },
  {
    id: 3,
    title: "Sea-Facing 3 Bed Apartment",
    city: "Karachi",
    area: "Clifton, Block 5",
    type: "Flat",
    price: 25000000,
    beds: 3,
    baths: 3,
    size: "2,100 sq.ft",
    description:
      "Wake up to sea breeze in this elegant 3-bedroom apartment in Clifton Block 5. West-open corner unit with large balconies, servant quarter and 24/7 standby generator.",
    features: ["3 bedrooms, 3 baths", "West-open corner apartment", "2 large balconies", "Servant quarter", "Standby generator", "Covered parking"],
    gradient: "from-cyan-900 via-teal-800 to-emerald-700",
    badge: "Hot",
  },
  {
    id: 4,
    title: "Prime 1 Kanal Residential Plot",
    city: "Lahore",
    area: "DHA Phase 9 Town",
    type: "Plot",
    price: 48000000,
    beds: null,
    baths: null,
    size: "1 Kanal",
    description:
      "Level, solid 1 kanal residential plot in a developed block of DHA Phase 9 Town. Clear title, all dues paid — ready for immediate construction or solid investment.",
    features: ["Level solid land", "Developed block", "All dues clear", "Boundary wall nearby plots", "Ideal for construction", "High appreciation zone"],
    gradient: "from-amber-800 via-yellow-700 to-gold-500",
  },
  {
    id: 5,
    title: "Luxury 2 Bed Flat",
    city: "Islamabad",
    area: "E-11/3",
    type: "Flat",
    price: 16500000,
    beds: 2,
    baths: 2,
    size: "1,350 sq.ft",
    description:
      "Sunlit 2-bedroom flat in the serene E-11 sector with Margalla Hills views. Smart locks, modern kitchen and a peaceful family environment minutes from F-11 Markaz.",
    features: ["2 bedrooms, 2 baths", "Margalla Hills view", "Smart door locks", "Modern fitted kitchen", "Family park nearby", "Secure gated block"],
    gradient: "from-emerald-900 via-teal-800 to-cyan-700",
  },
  {
    id: 6,
    title: "Corporate Plaza — Blue Area",
    city: "Islamabad",
    area: "Blue Area, Jinnah Avenue",
    type: "Commercial",
    price: 120000000,
    beds: null,
    baths: 4,
    size: "6,000 sq.ft",
    description:
      "Prestigious commercial floor on Jinnah Avenue, Blue Area. High footfall, dedicated parking and corporate-grade finishing — a trophy asset for investors and brands.",
    features: ["Main Jinnah Avenue frontage", "6,000 sq.ft floor plate", "Dedicated basement parking", "Corporate finishing", "High rental yield", "Ideal for bank / brand"],
    gradient: "from-stone-900 via-emerald-950 to-emerald-800",
    badge: "Premium",
  },
  {
    id: 7,
    title: "Cozy 5 Marla House",
    city: "Lahore",
    area: "Johar Town, Block H",
    type: "House",
    price: 19000000,
    beds: 3,
    baths: 3,
    size: "5 Marla",
    description:
      "Well-maintained 3-bedroom 5 marla house in Johar Town Block H. Tiled flooring, solid woodwork and a lovely little lawn — perfect first home near Emporium Mall.",
    features: ["3 bedrooms with attached baths", "Tiled flooring", "Solid woodwork", "Small lawn", "Near Emporium Mall", "Clear title"],
    gradient: "from-lime-900 via-emerald-800 to-teal-600",
  },
  {
    id: 8,
    title: "Skyline Penthouse",
    city: "Karachi",
    area: "DHA Phase 8, Creek Marina",
    type: "Flat",
    price: 65000000,
    beds: 4,
    baths: 5,
    size: "3,800 sq.ft",
    description:
      "Breathtaking penthouse with panoramic creek views in DHA Phase 8. Private terrace, home theatre lounge and concierge living at Karachi's most coveted address.",
    features: ["4 bedrooms, 5 baths", "Panoramic creek view", "Private rooftop terrace", "Home theatre lounge", "Concierge service", "3 reserved parkings"],
    gradient: "from-indigo-950 via-emerald-900 to-teal-800",
    badge: "Luxury",
  },
  {
    id: 9,
    title: "8 Marla Commercial Plot",
    city: "Islamabad",
    area: "Gulberg Greens",
    type: "Plot",
    price: 37500000,
    beds: null,
    baths: null,
    size: "8 Marla",
    description:
      "High-visibility 8 marla commercial plot on a main boulevard of Gulberg Greens. Perfect for plaza development with excellent rental prospects as the area matures.",
    features: ["Main boulevard facing", "Ideal for plaza", "Developed sector", "High rental potential", "All NOCs available", "Investor favourite"],
    gradient: "from-yellow-800 via-amber-700 to-gold-400",
  },
];
