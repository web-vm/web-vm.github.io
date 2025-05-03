
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InViewAnimation from "@/components/ui/InViewAnimation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0" // Added top padding for mobile
      style={{
        background: "linear-gradient(135deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <InViewAnimation animation="fade-in-left" delay={0.2}>
            <div className="text-white mt-12 md:mt-0"> {/* Added margin top for mobile */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Welcome to <br />
                <span className="text-softepy-dark">THE PY</span>
              </h1>
              <p className="text-xl mb-8 text-softepy-dark/90 max-w-lg">
                Pioneering the future of automated ice cream experiences. As India's first female-led soft serve vending machine company, we're revolutionizing how people enjoy premium frozen treats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/franchise">
                  <Button className="bg-softepy-dark hover:bg-softepy-dark/90 text-white">
                    Join Our Journey
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-softepy-dark text-softepy-dark hover:bg-softepy-dark hover:text-white">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
          </InViewAnimation>

          <InViewAnimation animation="fade-in-right" delay={0.4}>
            <div className="relative">
              <div className="relative aspect-square rounded-full overflow-hidden bg-white/20 backdrop-blur-sm p-8">
                <img 
                  src="/lovable-uploads/e6e97665-3aae-4a0a-8c57-314373ec38e3.png"
                  alt="THE PY Logo" 
                  className="w-full h-full object-contain animate-premium-float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none animate-pulse"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-white/20 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/10 animate-reverse-spin-slow"></div>
            </div>
          </InViewAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
