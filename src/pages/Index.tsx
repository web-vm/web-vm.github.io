
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import CompanyValues from "@/components/home/CompanyValues";
import Features from "@/components/home/Features";
import MachineShowcase from "@/components/home/MachineShowcase";
import FranchiseCTA from "@/components/home/FranchiseCTA";
// import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <CompanyValues />
      <Features />
      <MachineShowcase />
      <FranchiseCTA />
      {/* <Testimonials /> */}
    </>
  );
};

export default Index;
