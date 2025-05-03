
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import InViewAnimation from "@/components/ui/InViewAnimation";

const MachineShowcase = () => {
  const features = [
    "Fully automated operation with zero human intervention",
    "Self-cleaning technology for optimal hygiene",
    "User-friendly touchscreen interface",
    "Contactless payment options",
    "Real-time monitoring and analytics"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <InViewAnimation animation="fade-in-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cutting-Edge <span className="gold-text">Vending Technology</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our state-of-the-art vending machines are designed for maximum efficiency, reliability, and user experience. With touchscreen interfaces, contactless payment options, and smart inventory management, Softepy machines represent the future of automated food service.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 text-softepy-gold">
                      <Star size={20} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/product">
                <Button className="btn-primary">
                  See Machine Specifications
                </Button>
              </Link>
            </div>
          </InViewAnimation>

          <InViewAnimation animation="fade-in-right">
            <div className="relative parallax-container">
              <div 
                className="rounded-3xl overflow-hidden shadow-xl h-[500px] parallax-element" 
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1629385936769-507a3a6e3271')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Softepy Premium Vending Machine</h3>
                  <p>The perfect blend of technology and taste</p>
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
      </div>
    </section>
  );
};

export default MachineShowcase;
