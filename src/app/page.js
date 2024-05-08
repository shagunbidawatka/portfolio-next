"use client";
import Image from "next/image";
import { useEffect } from "react";
import HomePage from "@/components/HomePage";
import "../styles/globals.css";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
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
