import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZameenX — Find Your Dream Home in Pakistan",
  description:
    "ZameenX is Pakistan's premium real estate agency. Browse verified houses, flats, plots and commercial properties in Lahore, Islamabad, Karachi and Rawalpindi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body className="bg-white font-sans text-stone-800">{children}</body>
    </html>
  );
}
