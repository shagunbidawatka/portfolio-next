"use client";

import HomePage from "@/components/HomePage";
import "../styles/globals.css";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import PortfolioSEO from "@/components/PortfolioSEO";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <SpeedInsights />
      <Analytics />
      <PortfolioSEO />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <HomePage />
      </div>
      <About />
      <Experience />
      <Blogs />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
