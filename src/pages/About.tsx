
import React from "react";
import InViewAnimation from "@/components/ui/InViewAnimation";
import { Package, Award, IceCreamBowl } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-softepy-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gold-text">The PY</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                India's first female-led automated soft serve vending machine company, revolutionizing the ice cream experience with technology and innovation.
              </p>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-up" delay={0.2}>
              <div className="w-24 h-1 bg-softepy-gold mx-auto mb-12"></div>

              <p className="text-lg text-gray-600">
                Founded with a vision to transform how people enjoy ice cream, The PY combines cutting-edge automation with premium ingredients to deliver an unparalleled soft serve experience across India.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <InViewAnimation animation="fade-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="w-16 h-1 bg-softepy-gold mb-8"></div>
                <p className="text-gray-600 mb-6">
                  The PY was born from a simple observation: in a country with a deep love for ice cream, there was a gap in automated, high-quality soft serve options that could be available around the clock without compromising on taste or variety.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, recognizing this opportunity, assembled a team of food technologists, engineers, and business experts to create Softepy - an innovative vending solution that would revolutionize the soft serve market in India.
                </p>
                <p className="text-gray-600 mb-6">
                  As a female-led company, we've broken barriers in both the food-tech and vending machine industries, bringing a fresh perspective to automation and customer experience design.
                </p>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-right">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1527365856242-b1256cc3a361" 
                  alt="The PY Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Vision & Mission
              </h2>
              <div className="w-24 h-1 bg-softepy-gold mx-auto mb-8"></div>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InViewAnimation animation="fade-in-left" className="h-full">
              <div className="luxury-card p-8 h-full bg-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <div className="w-12 h-1 bg-softepy-gold mb-6"></div>
                <p className="text-gray-600">
                  To revolutionize the ice cream industry in India through automation and innovation, making premium quality soft serve accessible to everyone, everywhere.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-softepy-cream flex items-center justify-center">
                    <Package size={32} className="text-softepy-gold" />
                  </div>
                </div>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-right" className="h-full">
              <div className="luxury-card p-8 h-full bg-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <div className="w-12 h-1 bg-softepy-gold mb-6"></div>
                <p className="text-gray-600">
                  To deploy state-of-the-art vending machines that deliver customizable, premium quality soft serve with zero human intervention, while maintaining the highest standards of hygiene through our proprietary self-cleaning technology.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-softepy-cream flex items-center justify-center">
                    <Award size={32} className="text-softepy-gold" />
                  </div>
                </div>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-softepy-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                At The PY, our values guide everything we do, from product development to customer service and business partnerships.
              </p>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={36} className="text-softepy-gold" />,
                title: "Quality Without Compromise",
                description: "We use only premium ingredients and maintain the highest standards in our machines and products."
              },
              {
                icon: <IceCreamBowl size={36} className="text-softepy-gold" />,
                title: "Innovation First",
                description: "We continuously push the boundaries of what's possible in automated food service."
              },
              {
                icon: <Package size={36} className="text-softepy-gold" />,
                title: "Customer Delight",
                description: "Every aspect of our product and service is designed with customer satisfaction in mind."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>,
                title: "Sustainability",
                description: "We design our operations to minimize environmental impact and promote sustainable practices."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                title: "Empowerment",
                description: "As a female-led company, we champion diversity and aim to inspire future generations of women entrepreneurs."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softepy-gold"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h.01"></path><path d="M17 7h.01"></path><path d="M7 17h.01"></path><path d="M17 17h.01"></path></svg>,
                title: "Ethical Business",
                description: "We maintain transparency and ethical standards in all our business relationships and operations."
              }
            ].map((value, index) => (
              <InViewAnimation key={index} animation="fade-in-up" delay={0.1 * index} className="h-full">
                <div className="luxury-card p-6 h-full">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Leadership
              </h2>
              <div className="w-24 h-1 bg-softepy-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Meet the visionaries behind The PY's innovation and growth.
              </p>
            </InViewAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                bio: "A tech visionary with over 15 years of experience in the food and beverage industry, Priya combines her passion for innovation with business acumen to lead The PY's growth strategy."
              },
              {
                name: "Anika Patel",
                role: "Chief Technology Officer",
                bio: "With a background in robotics and automation, Anika leads the development of our proprietary vending machine technology and oversees our continuous innovation efforts."
              },
              {
                name: "Vikram Mehta",
                role: "Head of Operations",
                bio: "Vikram ensures our supply chain runs smoothly and our machines deliver consistent quality across all locations, bringing years of experience in logistics and operations management."
              },
            ].map((member, index) => (
              <InViewAnimation key={index} animation="fade-in-up" delay={0.2 * index} className="h-full">
                <div className="luxury-card h-full overflow-hidden">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-softepy-gold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section 
        className="py-20 relative bg-softepy-dark text-white"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="gold-text">Journey</span>
              </h2>
              <p className="text-xl mb-8">
                Be part of India's ice cream revolution. Partner with us as we expand across the country, bringing premium soft serve to every corner of India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/franchise" className="btn-primary">
                  Franchise Opportunities
                </a>
                <a href="/contact" className="btn-secondary bg-white text-softepy-dark">
                  Contact Us
                </a>
              </div>
            </InViewAnimation>
          </div>
        </div>
        
        {/* Abstract Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-softepy-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-softepy-gold/5 rounded-full blur-3xl"></div>
      </section>
    </>
  );
};

export default About;
