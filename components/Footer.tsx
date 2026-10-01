import { Home, Globe, Share2, AtSign, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold-400">
                <Home size={20} strokeWidth={2.2} />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Zameen<span className="text-gold-400">X</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Pakistan&apos;s premium real estate agency — verified houses, flats, plots and
              commercial properties across Lahore, Islamabad, Karachi and Rawalpindi.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Globe, label: "Website" },
                { Icon: Share2, label: "Share" },
                { Icon: AtSign, label: "Social" },
                { Icon: Send, label: "Contact" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold-500 hover:text-emerald-950"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Home", "#home"],
                ["Listings", "#listings"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-gold-400">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Top Searches</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Houses in DHA Lahore</li>
              <li>Flats in E-11 Islamabad</li>
              <li>Plots in Bahria Town</li>
              <li>Commercial in Blue Area</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs sm:flex-row">
          <p>© 2026 ZameenX. All rights reserved.</p>
          <p className="text-emerald-100/40">
            Demo website crafted by{" "}
            <a
              href="https://akclnt.com"
              target="_blank"
              rel="noopener"
              className="underline-offset-4 transition-colors hover:text-emerald-100/70 hover:underline"
            >
              AKCLNT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
