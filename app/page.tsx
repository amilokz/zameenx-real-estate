"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero, { type Filters } from "@/components/Hero";
import ListingsSection from "@/components/ListingsSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const DEFAULT_FILTERS: Filters = { city: "All", type: "All", maxPrice: 150000000 };

export default function Home() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  return (
    <>
      <Navbar />
      <main>
        <Hero filters={filters} onChange={setFilters} />
        <ListingsSection filters={filters} onReset={() => setFilters(DEFAULT_FILTERS)} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
