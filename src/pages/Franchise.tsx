
import React from "react";
import { Link } from "react-router-dom";
import InViewAnimation from "@/components/ui/InViewAnimation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Package, Star } from "lucide-react";

const Franchise = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-softepy-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Franchise <span className="gold-text">Opportunities</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Join India's first female-led automated soft serve vending machine business and build a profitable operation with minimal overhead.
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-4">
                  Apply for Franchise
                </Button>
              </Link>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Why Franchise With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Franchise With <span className="gold-text">Softepy</span>?
              </h2>
              <p className="text-xl text-gray-600">
                Our innovative business model offers unique advantages for franchise partners.
              </p>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={40} className="text-softepy-gold" />,
                title: "Low Operational Overhead",
                description: "Our fully automated machines require minimal supervision and staff, reducing your operational costs significantly."
              },
              {
                icon: <Package size={40} className="text-softepy-gold" />,
                title: "Premium Product",
                description: "Offer a premium soft serve experience with 27 flavor combinations that attract customers and keep them coming back."
              },
              {
                icon: <Star size={40} className="text-softepy-gold" />,
                title: "Self-Cleaning Technology",
                description: "Our proprietary self-cleaning technology ensures hygiene standards without requiring constant manual cleaning."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                ),
                title: "24/7 Operation",
                description: "Generate revenue around the clock with machines that can operate 24/7 without staffing requirements."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold">
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M13 5v2"></path>
                    <path d="M13 17v2"></path>
                    <path d="M13 11v2"></path>
                  </svg>
                ),
                title: "Remote Monitoring",
                description: "Track inventory, sales, and machine performance remotely through our advanced IoT-enabled dashboard."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold">
                    <path d="M3 5v14"></path>
                    <path d="M8 5v14"></path>
                    <path d="M12 5v14"></path>
                    <path d="M17 5v14"></path>
                    <path d="M21 5v14"></path>
                  </svg>
                ),
                title: "Comprehensive Support",
                description: "From site selection to installation and ongoing technical support, our team guides you at every step."
              }
            ].map((benefit, index) => (
              <InViewAnimation key={index} animation="fade-in-up" delay={0.1 * index} className="h-full">
                <div className="luxury-card p-8 h-full">
                  <div className="mb-6 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Franchise <span className="gold-text">Models</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose the franchise model that best suits your business goals and location.
              </p>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard",
                description: "Single machine placement in high-traffic locations",
                investment: "₹10-15 Lakhs",
                features: [
                  "1 Softepy vending machine",
                  "Location assessment",
                  "Installation support",
                  "Basic training",
                  "Standard supply chain access"
                ],
                recommended: "Ideal for retail stores, offices, and small malls"
              },
              {
                name: "Premium",
                description: "Multiple machine deployment across strategic locations",
                investment: "₹25-40 Lakhs",
                features: [
                  "2-4 Softepy vending machines",
                  "Premium location network access",
                  "Enhanced technical support",
                  "Extended warranty",
                  "Advanced business analytics"
                ],
                recommended: "Perfect for large malls, universities, and entertainment venues",
                highlight: true
              },
              {
                name: "Enterprise",
                description: "City-wide network of machines with exclusive territory rights",
                investment: "₹50+ Lakhs",
                features: [
                  "5+ Softepy vending machines",
                  "Exclusive territory rights",
                  "Dedicated account manager",
                  "Custom branding options",
                  "Volume purchase discounts"
                ],
                recommended: "For serious entrepreneurs looking to build a significant business"
              }
            ].map((model, index) => (
              <InViewAnimation key={index} animation="fade-in-up" delay={0.2 * index} className="h-full">
                <div className={`luxury-card h-full flex flex-col ${model.highlight ? "border-2 border-softepy-gold gold-shadow" : ""}`}>
                  <div className={`p-8 ${model.highlight ? "bg-gradient-to-r from-softepy-gold/20 to-softepy-cream" : ""}`}>
                    <h3 className="text-2xl font-bold mb-2 text-center">{model.name}</h3>
                    <p className="text-gray-600 text-center mb-6">{model.description}</p>
                    
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-softepy-gold">{model.investment}</span>
                      <span className="text-gray-500"> investment</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-softepy-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-sm text-gray-500 italic text-center">
                      {model.recommended}
                    </p>
                  </div>
                  
                  <div className="mt-auto p-6 pt-0 text-center">
                    <Link to="/contact">
                      <Button className={model.highlight ? "btn-primary w-full" : "btn-secondary w-full"}>
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator (Visual only) */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Investment <span className="gold-text">Returns</span>
              </h2>
              <p className="text-xl text-gray-600">
                See the potential returns on your Softepy franchise investment based on our data from existing locations.
              </p>
            </InViewAnimation>
          </div>

          <InViewAnimation animation="fade-in-up" delay={0.2}>
            <div className="luxury-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Estimated Monthly Performance</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-500 mb-2">Average Daily Sales</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">80-120 servings</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-3/4 h-full bg-softepy-gold rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-2">Average Price Per Serving</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₹80-120</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-2/3 h-full bg-softepy-gold rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-2">Monthly Revenue</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₹2.5-4.0 Lakhs</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-4/5 h-full bg-softepy-gold rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-2">Operational Costs</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₹0.8-1.2 Lakhs</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/3 h-full bg-softepy-gold rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-2">Monthly Profit</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₹1.7-2.8 Lakhs</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-2/3 h-full bg-softepy-gold rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Return On Investment</h3>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gray-50 rounded-xl mb-8">
                      <p className="text-gray-500 mb-2">Estimated Payback Period</p>
                      <p className="text-3xl font-bold text-softepy-gold">6-10 months</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-1">ROI Factors</p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-softepy-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Location traffic and visibility</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-softepy-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Local market pricing strategy</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-softepy-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Operational excellence</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-softepy-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Marketing and promotional activities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/contact">
                        <Button className="btn-primary w-full">
                          Get Detailed ROI Analysis
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InViewAnimation>

          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Note: These figures are estimates based on average performance and may vary based on location, local market conditions, and operational factors.</p>
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Franchise <span className="gold-text">Process</span>
              </h2>
              <p className="text-xl text-gray-600">
                Your journey to owning a Softepy franchise is simple and straightforward.
              </p>
            </InViewAnimation>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-0 w-1 bg-softepy-gold/30 -translate-x-1/2"></div>
            
            <div className="space-y-16 relative">
              {[
                {
                  step: "01",
                  title: "Initial Inquiry",
                  description: "Fill out our franchise application form with your details and business expectations."
                },
                {
                  step: "02",
                  title: "Consultation",
                  description: "Meet with our franchise team to discuss opportunities, investment, and answer your questions."
                },
                {
                  step: "03",
                  title: "Location Assessment",
                  description: "We'll help you evaluate potential locations to maximize visibility and foot traffic."
                },
                {
                  step: "04",
                  title: "Agreement & Payment",
                  description: "Sign the franchise agreement and make the initial investment payment."
                },
                {
                  step: "05",
                  title: "Setup & Installation",
                  description: "Our team handles the delivery, installation, and testing of your vending machine."
                },
                {
                  step: "06",
                  title: "Training & Launch",
                  description: "Receive comprehensive training on machine operations, maintenance, and business strategies."
                }
              ].map((step, index) => (
                <InViewAnimation key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0.1 * index}>
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                    <div className="md:w-1/2 text-center md:text-right flex-1">
                      {index % 2 === 0 ? (
                        <div className={`p-6 luxury-card ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                          <span className="text-5xl font-bold text-softepy-gold">{step.step}</span>
                          <h3 className="text-2xl font-bold mt-4 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : null}
                    </div>
                    
                    <div className="relative flex items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-softepy-gold flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 text-center md:text-left flex-1">
                      {index % 2 !== 0 ? (
                        <div className={`p-6 luxury-card ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                          <span className="text-5xl font-bold text-softepy-gold">{step.step}</span>
                          <h3 className="text-2xl font-bold mt-4 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </InViewAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gold-text">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about the Softepy franchise opportunity.
              </p>
            </InViewAnimation>
          </div>

          <InViewAnimation animation="fade-in-up" delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "What is the total investment required for a Softepy franchise?",
                    answer: "The investment varies based on the franchise model you choose. Our Standard model starts at ₹10-15 Lakhs, the Premium model ranges from ₹25-40 Lakhs, and the Enterprise model requires ₹50+ Lakhs. These amounts include the franchise fee, equipment cost, and initial inventory."
                  },
                  {
                    question: "How much space is required for a vending machine?",
                    answer: "Each Softepy vending machine requires approximately 10 sq. ft. of floor space (dimensions are 90cm width x 85cm depth x 195cm height). Additional space for customer access and servicing should be considered."
                  },
                  {
                    question: "What are the power requirements for the machine?",
                    answer: "The machine requires a standard 220-240V, 50/60Hz power supply with a dedicated 15-20 amp circuit. Power consumption averages around 1.8 kW, and we recommend installing a UPS system for backup power."
                  },
                  {
                    question: "How often does the machine need to be restocked?",
                    answer: "This depends on sales volume, but typically a machine requires restocking every 3-5 days. Our remote monitoring system alerts you when inventory levels are low, so you can plan restocking efficiently."
                  },
                  {
                    question: "What kind of maintenance is required?",
                    answer: "While our machines feature self-cleaning technology for daily hygiene, they require periodic professional maintenance (every 3-4 months) which is covered under our service agreement. This includes deep cleaning, parts inspection, and system updates."
                  },
                  {
                    question: "What ongoing fees are there after the initial investment?",
                    answer: "Franchise partners pay a royalty fee of 6-8% of monthly revenue and a marketing contribution of 2%. These fees contribute to brand building, tech updates, and continued business support."
                  },
                  {
                    question: "How long is the franchise agreement?",
                    answer: "Our standard franchise agreement is for 5 years, with an option to renew for additional 5-year terms, subject to meeting performance criteria and agreement terms."
                  },
                  {
                    question: "Do you provide assistance with location selection?",
                    answer: "Yes, our team provides comprehensive location assessment services to help identify optimal placement for your machines. We evaluate foot traffic, demographics, competition, and other factors to maximize your success."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="luxury-card">
                    <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Franchise <span className="gold-text">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600">
                Hear from our successful franchise partners about their experience with Softepy.
              </p>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Rajesh Khanna",
                role: "Franchise Partner, Bangalore",
                testimonial: "I invested in two Softepy machines for a mall in Bangalore, and the ROI has been outstanding. The machines practically run themselves, and customers love creating their own combinations. My investment was recovered in just 8 months.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              },
              {
                name: "Anita Desai",
                role: "Enterprise Partner, Mumbai",
                testimonial: "As someone with multiple food businesses, adding Softepy machines was a natural expansion. The automated operation fits perfectly with my other ventures, allowing me to generate additional revenue streams without dividing my attention.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              }
            ].map((testimonial, index) => (
              <InViewAnimation key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0.2 * index} className="h-full">
                <div className="luxury-card p-8 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-softepy-gold/20">
                        <path d="M10 11h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1zm-4 2h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zm10-2h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1zm-4 2h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 italic mb-8">"{testimonial.testimonial}"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-softepy-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Join the <span className="gold-text">Softepy</span> Family?
              </h2>
              <p className="text-xl mb-8">
                Take the first step toward owning a profitable, automated ice cream business with minimal overhead and maximum potential.
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-4">
                  Apply for Franchise Now
                </Button>
              </Link>
            </InViewAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Franchise;
