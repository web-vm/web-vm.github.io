
import React, { useState } from "react";
import InViewAnimation from "@/components/ui/InViewAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log("Form submission:", formData);
    
    toast({
      title: "Thank you for contacting us!",
      description: "We've received your message and will get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-softepy-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In <span className="gold-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We'd love to hear from you. Reach out for franchise inquiries, partnership opportunities, or any questions.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <InViewAnimation animation="fade-in-left">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <div className="w-16 h-1 bg-softepy-gold mb-8"></div>
                
                <div className="space-y-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      The PY Innovations Pvt. Ltd.<br />
                      123 Technology Park, Whitefield<br />
                      Bengaluru, Karnataka 560066<br />
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> info@thepy.in
                    </p>
                    <p className="text-gray-600">
                      <strong>Customer Support:</strong> support@softepy.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-softepy-dark text-white rounded-full flex items-center justify-center hover:bg-softepy-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-softepy-dark text-white rounded-full flex items-center justify-center hover:bg-softepy-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-softepy-dark text-white rounded-full flex items-center justify-center hover:bg-softepy-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-softepy-dark text-white rounded-full flex items-center justify-center hover:bg-softepy-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </InViewAnimation>

            <InViewAnimation animation="fade-in-right">
              <form onSubmit={handleSubmit} className="luxury-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select 
                        value={formData.inquiryType}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="franchise">Franchise Information</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message subject" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message" 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </div>
              </form>
            </InViewAnimation>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find <span className="gold-text">Softepy</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our headquarters is located in the heart of Bengaluru's tech district.
              </p>
            </InViewAnimation>
          </div>

          <InViewAnimation animation="fade-in-up" delay={0.2}>
            <div className="luxury-card overflow-hidden h-[400px]">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* Franchise Contact CTA */}
      <section className="py-20 bg-softepy-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimation animation="fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Interested in <span className="gold-text">Franchise</span> Opportunities?
              </h2>
              <p className="text-xl mb-8">
                For dedicated franchise inquiries, our business development team is ready to guide you through the process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+919876543210" className="btn-primary inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Franchise Team
                </a>
                <a href="mailto:franchise@thepy.in" className="btn-secondary inline-flex items-center bg-white text-softepy-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Franchise Team
                </a>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
