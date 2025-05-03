
import React from "react";
import { Star, Building, Users, Award, Package, Rocket } from "lucide-react";
import InViewAnimation from "@/components/ui/InViewAnimation";
import ValueCard from "./ValueCard";

const CompanyValues = () => {
  const values = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "We use only the finest ingredients to create exceptional soft serve experiences."
    },
    {
      icon: Building,
      title: "Innovation Hub",
      description: "Pioneering automated vending solutions that redefine convenience."
    },
    {
      icon: Users,
      title: "Female Leadership",
      description: "Breaking barriers as India's first female-led automated dessert company."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in every scoop we serve."
    },
    {
      icon: Package,
      title: "Customization",
      description: "27 unique flavor combinations to suit every palate."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Embracing technology to revolutionize the ice cream industry."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <InViewAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Core <span className="text-softepy-gold">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At THE PY, we believe in delivering excellence through innovation, quality, and automation.
            </p>
          </div>
        </InViewAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <ValueCard 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
