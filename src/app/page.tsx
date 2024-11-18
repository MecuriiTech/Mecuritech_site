"use client";
import { useState, useEffect } from "react";
import PreloadAnimation from "@/components/preloader";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import SkillsOverview from "@/sections/Skills";
import Faq from "@/sections/Faq";
import AbtUs from "@/sections/Abt";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreloadAnimation />;
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      {/* <TapeSection /> */}
      <TestimonialsSection />
      <SkillsOverview />
      <AboutSection />
      <Faq />
      <AbtUs />
      <ContactSection />
    </div>
  );
}
