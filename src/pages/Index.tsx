
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InViewAnimation from "@/components/ui/InViewAnimation";
import { Button } from "@/components/ui/button";
import {
  Package,
  Award,
  IceCreamBowl,
  Star,
} from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(135deg, #fff8e1 0%, #f5f5f5 100%)",
        }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.05,
            backgroundImage: "url('https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <InViewAnimation animation="fade-in-left" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Revolutionizing <span className="gold-text">Ice Cream</span> Experience
                </h1>
              </InViewAnimation>

              <InViewAnimation animation="fade-in-left" delay={0.4}>
                <p className="text-xl mb-8 text-gray-700 max-w-lg">
                  India's first female-led automated soft serve vending machine company, offering premium customizable treats with zero human intervention.
                </p>
              </InViewAnimation>

              <InViewAnimation animation="fade-in-up" delay={0.6}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/franchise">
                    <Button className="btn-primary">
                      Franchise Opportunities
                    </Button>
                  </Link>
                  <Link to="/product">
                    <Button variant="outline" className="border-softepy-gold text-softepy-dark hover:bg-softepy-gold hover:text-softepy-dark">
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </InViewAnimation>
            </div>

            <div className="relative">
              <InViewAnimation animation="fade-in" delay={0.6}>
                <div className="relative">
                  <div 
                    className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
                      transform: `translateY(${Math.sin(scrollY * 0.003) * 10}px)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-72 h-72 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/e6e97665-3aae-4a0a-8c57-314373ec38e3.png"
                          alt="Softepy Logo" 
                          className="w-56 h-56 object-contain animate-float"
                        />
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div 
                      className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/30"
                      style={{
                        transform: `translate(${Math.sin(scrollY * 0.005) * 15}px, ${Math.cos(scrollY * 0.005) * 15}px)`,
                      }}
                    ></div>
                    <div 
                      className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-white/20"
                      style={{
                        transform: `translate(${Math.cos(scrollY * 0.004) * 20}px, ${Math.sin(scrollY * 0.004) * 20}px)`,
                      }}
                    ></div>
                  </div>
                </div>
              </InViewAnimation>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
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
            <InViewAnimation animation="fade-in-up" delay={0.2} className="h-full">
              <div className="luxury-card p-8 h-full flex flex-col">
                <div className="mb-4 text-softepy-gold">
                  <Package size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">27 Flavor Combinations</h3>
                <p className="text-gray-600 flex-grow">
                  Choose from vanilla, strawberry, or mixed base with three different syrups and three different toppings for a unique experience every time.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/product" 
                    className="text-softepy-gold font-semibold hover:underline inline-flex items-center"
                  >
                    Explore Flavors
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-up" delay={0.4} className="h-full">
              <div className="luxury-card p-8 h-full flex flex-col">
                <div className="mb-4 text-softepy-gold">
                  <Award size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Self-Cleaning Technology</h3>
                <p className="text-gray-600 flex-grow">
                  Our machines feature advanced automated cleaning systems that sanitize all parts periodically, ensuring the highest standards of hygiene and food safety.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/product" 
                    className="text-softepy-gold font-semibold hover:underline inline-flex items-center"
                  >
                    Learn About Technology
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-up" delay={0.6} className="h-full">
              <div className="luxury-card p-8 h-full flex flex-col">
                <div className="mb-4 text-softepy-gold">
                  <IceCreamBowl size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Ingredients</h3>
                <p className="text-gray-600 flex-grow">
                  We use only the finest ingredients for our soft serve bases and toppings, ensuring a luxurious and delicious treat every time.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/about" 
                    className="text-softepy-gold font-semibold hover:underline inline-flex items-center"
                  >
                    Our Quality Promise
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Machine Showcase Section */}
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
                  {[
                    "Fully automated operation with zero human intervention",
                    "Self-cleaning technology for optimal hygiene",
                    "User-friendly touchscreen interface",
                    "Contactless payment options",
                    "Real-time monitoring and analytics"
                  ].map((item, index) => (
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

      {/* Franchise CTA Section */}
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
              <Link to="/franchise">
                <Button className="btn-primary text-lg px-8 py-4">
                  Explore Franchise Options
                </Button>
              </Link>
            </InViewAnimation>
          </div>
        </div>
        
        {/* Abstract Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-softepy-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-softepy-gold/5 rounded-full blur-3xl"></div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <InViewAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Our <span className="gold-text">Customers</span> Say
              </h2>
            </div>
          </InViewAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Mall Owner",
                quote: "Installing Softepy machines in our mall has been a game-changer. Customers love the variety and quality, and we love the maintenance-free operation."
              },
              {
                name: "Rahul Verma",
                role: "Franchise Partner",
                quote: "The ROI on my Softepy franchise has exceeded expectations. The automated system means no staffing issues, and the product quality keeps customers coming back."
              },
              {
                name: "Ananya Patel",
                role: "University Cafeteria Manager",
                quote: "Students are obsessed with creating their own combinations. The self-cleaning feature gives us peace of mind about hygiene standards."
              }
            ].map((testimonial, index) => (
              <InViewAnimation key={index} animation="fade-in-up" delay={0.2 * index} className="h-full">
                <div className="luxury-card p-8 h-full flex flex-col">
                  <div className="flex-grow">
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
