
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InViewAnimation from "@/components/ui/InViewAnimation";

const FranchiseCTA = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        background: "linear-gradient(90deg, #222222 0%, #333333 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <InViewAnimation animation="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Join the <span className="gold-text">Revolution</span> in Soft Serve
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Become a part of India's first female-led automated soft serve vending machine business. Partner with us to bring Softepy to your location and enjoy a profitable, low-maintenance business opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/franchise">
                <Button className="btn-primary text-lg px-8 py-4">
                  Explore Franchise Options
                </Button>
              </Link>
            </div>
          </InViewAnimation>
        </div>
      </div>
      
      {/* Abstract Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-softepy-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-softepy-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FranchiseCTA;
