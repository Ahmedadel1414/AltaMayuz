"use client";

import OurPartnersSection from "./_components/OurPartnersSection";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import OurProjectsSection from "./_components/OurProjectsSection";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsSection from "./_components/TestimonialsSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <HeroSection />
      <OurPartnersSection />
      <ServicesSection />
      <OurProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
