
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InViewAnimation from "@/components/ui/InViewAnimation";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IceCreamCustomizer from "@/components/product/IceCreamCustomizer";

const Product = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("specs");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-softepy-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        opacity: 0.05,
        backgroundImage: "url('https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${scrollY * 0.15}px)`
      }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Softepy <span className="gold-text">Vending Machine</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                State-of-the-art automated soft serve vending machine with self-cleaning technology and premium ingredients.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Machine Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <InViewAnimation animation="fade-in-left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]" style={{
                backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                transform: `translateY(${Math.sin(scrollY * 0.003) * 5}px)`
              }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <img src="/lovable-uploads/e6e97665-3aae-4a0a-8c57-314373ec38e3.png" alt="Softepy Logo" className="w-56 h-56 object-contain animate-premium-float" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-softepy-gold/30 blur-md"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-softepy-gold/20 blur-md"></div>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Future of Soft Serve Experience
                </h2>
                <div className="w-16 h-1 bg-softepy-gold mb-8"></div>
                <p className="text-gray-600 mb-6">
                  Softepy vending machines represent the pinnacle of ice cream automation technology. Our machines combine sophisticated engineering with an intuitive user experience to deliver premium soft serve without any human intervention.
                </p>
                <p className="text-gray-600 mb-8">
                  With 27 possible flavor combinations, our machine offers unparalleled variety while maintaining absolute consistency and quality with every serve.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Fully automated operation", "Self-cleaning technology", "Touchscreen interface", "Contactless payments", "Remote monitoring", "Premium ingredients"].map((feature, index) => <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-softepy-gold mr-3"></div>
                      <span>{feature}</span>
                    </div>)}
                </div>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Technical Specs & Features Section with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Machine <span className="gold-text">Specifications</span>
              </h2>
              <p className="text-xl text-gray-600">
                Explore the technical details and innovative features of our state-of-the-art vending machine.
              </p>
            </InViewAnimation>
          </div>

          <InViewAnimation animation="fade-in-up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="specs" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-gray-200">
                    <TabsTrigger value="specs" className="text-base">Technical Specs</TabsTrigger>
                    <TabsTrigger value="features" className="text-base">Features</TabsTrigger>
                    <TabsTrigger value="technology" className="text-base">Technology</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="specs">
                  <div className="luxury-card p-8">
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Dimensions</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li><span className="font-medium">Height:</span> 195 cm</li>
                          <li><span className="font-medium">Width:</span> 90 cm</li>
                          <li><span className="font-medium">Depth:</span> 85 cm</li>
                          <li><span className="font-medium">Weight:</span> 380 kg</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Power Requirements</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li><span className="font-medium">Power Supply:</span> 220-240V, 50/60Hz</li>
                          <li><span className="font-medium">Power Consumption:</span> 1.8 kW</li>
                          <li><span className="font-medium">Backup Power:</span> Optional UPS system</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Capacity</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li><span className="font-medium">Soft Serve Base:</span> 20L x 3 compartments</li>
                          <li><span className="font-medium">Syrups:</span> 5L x 3 compartments</li>
                          <li><span className="font-medium">Toppings:</span> 3kg x 3 compartments</li>
                          <li><span className="font-medium">Cups:</span> 500 units</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Temperature Control</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li><span className="font-medium">Soft Serve Storage:</span> -18°C to -22°C</li>
                          <li><span className="font-medium">Dispensing Temperature:</span> -6°C to -8°C</li>
                          <li><span className="font-medium">Ambient Temp Range:</span> 10°C to 32°C</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <div className="luxury-card p-8">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">User Interface</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>15-inch HD touchscreen display</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Intuitive flavor and topping selection interface</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Multi-language support</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Digital payment integration</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Payment Options</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Contactless card payments</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Mobile payment (UPI, Paytm, etc.)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>QR code payment option</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Optional coin/note acceptor</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Customization Options</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>3 soft serve base options</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>3 syrup options</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>3 topping options</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Portion size selection</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-softepy-gold">Maintenance</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Automated self-cleaning system</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Remote diagnostics capability</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Easy-access service panels</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-4 h-4 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Inventory management system</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="technology">
                  <div className="luxury-card p-8">
                    <h3 className="text-2xl font-bold mb-6">Innovative Technology</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-softepy-gold">Self-Cleaning System</h4>
                        <p className="text-gray-600 mb-4">
                          Our proprietary self-cleaning system uses a combination of high-pressure steam and food-safe sanitizing solutions to automatically clean all food-contact surfaces at regular intervals. This ensures the highest levels of hygiene without requiring manual intervention.
                        </p>
                        <p className="text-gray-600">
                          The system runs complete cleaning cycles during low-usage periods and performs quick sanitization between servings, maintaining food safety standards at all times.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-softepy-gold">IoT Connectivity</h4>
                        <p className="text-gray-600 mb-4">
                          Every Softepy machine is equipped with IoT sensors and connectivity, allowing for real-time monitoring of:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 mb-4">
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Inventory levels</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Temperature conditions</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Sales data</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Machine performance</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Maintenance needs</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Usage patterns</span>
                          </li>
                        </ul>
                        <p className="text-gray-600">
                          This connectivity enables predictive maintenance, automatic inventory alerts, and business intelligence for optimizing machine placement and offerings.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-softepy-gold">Precision Dispensing System</h4>
                        <p className="text-gray-600 mb-4">
                          Our machines feature a precision dispensing system that ensures consistent portion control and perfect layering of soft serve, syrups, and toppings. The system uses:
                        </p>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Computer-controlled servo motors for exact positioning</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>High-precision flow control valves for soft serve and syrups</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Advanced portioning algorithms for consistent serving sizes</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-softepy-gold mt-1 mr-3 flex-shrink-0"></div>
                            <span>Real-time adjustments based on ingredient temperature and viscosity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* Flavor Combinations Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gold-text">27</span> Delicious Combinations
              </h2>
              <p className="text-xl text-gray-600">
                Our machine offers an incredible variety of flavor combinations to delight every customer.
              </p>
            </InViewAnimation>
          </div>

          <InViewAnimation animation="fade-in-up" delay={0.2}>
            <ScrollArea className="w-full">
              <div className="flex space-x-6 py-6">
                {[{
                base: "Vanilla",
                syrup: "Chocolate",
                topping: "Brownie Crumbs",
                color: "bg-gradient-to-b from-amber-50 to-amber-100"
              }, {
                base: "Strawberry",
                syrup: "Nutella",
                topping: "Chocolate Chips",
                color: "bg-gradient-to-b from-rose-100 to-rose-200"
              }, {
                base: "Mixed",
                syrup: "Strawberry",
                topping: "Nuts",
                color: "bg-gradient-to-b from-purple-50 to-pink-100"
              }, {
                base: "Vanilla",
                syrup: "Nutella",
                topping: "Nuts",
                color: "bg-gradient-to-b from-amber-50 to-amber-200"
              }, {
                base: "Strawberry",
                syrup: "Chocolate",
                topping: "Chocolate Chips",
                color: "bg-gradient-to-b from-red-50 to-red-100"
              }].map((flavor, index) => <div key={index} className={`luxury-card min-w-[300px] h-[350px] flex flex-col ${flavor.color}`}>
                    <div className="flex-grow flex items-center justify-center p-6">
                      <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/60 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-dark"><path d="M10 2v1a4 4 0 0 1-4 4H2"></path><path d="M2 17h.452c.365 0 .724-.126 1.01-.357l.536-.429a4.002 4.002 0 0 1 5.004 0l.536.429c.286.23.645.357 1.01.357h.452"></path><path d="M2 8h20"></path><path d="M6 8v1a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8"></path><path d="M18 8v1a4 4 0 0 0 4 4h0"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white rounded-b-xl">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Base</p>
                          <p className="font-medium">{flavor.base}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Syrup</p>
                          <p className="font-medium">{flavor.syrup}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Topping</p>
                          <p className="font-medium">{flavor.topping}</p>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                With 3 base flavors, 3 syrup options, and 3 toppings, customers can enjoy 27 unique combinations!
              </p>
            </div>
          </InViewAnimation>
          
          {/* Ice Cream Customizer Component */}
          <div className="mt-16">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <InViewAnimation animation="fade-in-up">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Customize Your <span className="gold-text">Soft Serve</span>
                </h3>
                <p className="text-gray-600">
                  Try different flavor and topping combinations to see what your Softepy creation could look like.
                </p>
              </InViewAnimation>
            </div>
            
            <IceCreamCustomizer />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-softepy-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gold-text">Transform</span> Your Business?
              </h2>
              <p className="text-xl mb-8">
                Add a Softepy vending machine to your location and offer premium soft serve to your customers with zero operational hassle.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/franchise">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Become a Franchise Partner
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-softepy-dark">
                    Contact Sales Team
                  </Button>
                </Link>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>
    </>;
};
export default Product;
