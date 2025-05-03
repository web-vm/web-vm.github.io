
import React from "react";
import { Package, Award, IceCream } from "lucide-react";
import InViewAnimation from "@/components/ui/InViewAnimation";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "192 Flavor Combinations",
      description: "Choose from three base flavours with three different syrups and three different toppings for a unique experience every time.",
      linkText: "Explore Flavors",
      linkUrl: "/product",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Self-Cleaning Technology",
      description: "Our machines feature advanced automated Intelligent cleaning systems that sanitize parts periodically, ensuring the highest standards of hygiene and food safety.",
      linkText: "Learn About Technology",
      linkUrl: "/product",
      delay: 0.4
    },
    {
      icon: IceCream,
      title: "Premium Ingredients",
      description: "We use only the finest ingredients for our soft serve bases, syrups and toppings, ensuring a luxurious and delicious treat every time.",
      linkText: "Our Quality Promise",
      linkUrl: "/about",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <InViewAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience <span className="gold-text">Premium</span> Soft Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Softepy brings you automated vending machines with premium ingredients and customizable options.
            </p>
          </div>
        </InViewAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkUrl={feature.linkUrl}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
