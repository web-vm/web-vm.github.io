
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import InViewAnimation from "@/components/ui/InViewAnimation";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, linkText, linkUrl, delay }: FeatureCardProps) => {
  return (
    <InViewAnimation animation="fade-in-up" delay={delay} className="h-full">
      <div className="luxury-card p-8 h-full flex flex-col">
        <div className="mb-4 text-softepy-gold">
          <Icon size={48} />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 flex-grow">
          {description}
        </p>
        <div className="mt-6">
          <Link 
            to={linkUrl} 
            className="text-softepy-gold font-semibold hover:underline inline-flex items-center"
          >
            {linkText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </InViewAnimation>
  );
};

export default FeatureCard;
