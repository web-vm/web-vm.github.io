
import React from "react";
import InViewAnimation from "@/components/ui/InViewAnimation";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  index: number;
}

const TestimonialCard = ({ name, role, quote, index }: TestimonialCardProps) => {
  // Different background patterns based on card index
  const getBgPattern = () => {
    const patterns = [
      "linear-gradient(to bottom right, rgba(255,215,0,0.05), rgba(255,215,0,0.1))",
      "linear-gradient(to bottom left, rgba(255,215,0,0.05), rgba(255,215,0,0.1))",
      "linear-gradient(to top right, rgba(255,215,0,0.05), rgba(255,215,0,0.1))"
    ];
    return patterns[index % patterns.length];
  };

  return (
    <InViewAnimation animation="fade-in-up" delay={0.2 * index} className="h-full">
      <div 
        className="luxury-card p-8 h-full flex flex-col"
        style={{ 
          background: getBgPattern(),
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="absolute top-4 left-4 text-softepy-gold/20 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.718-2.932.64-1.006 1.727-1.808 3.63-2.4l-.424-1.363c-1.797.56-3.28 1.43-4.45 2.613-1.17 1.18-1.792 2.463-1.87 3.846-.52.94.154 1.697.615 2.27.46.574 1.124.86 1.99.86.665 0 1.25-.21 1.75-.627.497-.417.746-.935.746-1.552zm7.66 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.718-2.932.64-1.006 1.727-1.808 3.63-2.4l-.424-1.362c-1.797.56-3.28 1.43-4.45 2.613-1.17 1.18-1.792 2.463-1.87 3.846-.52.94.153 1.697.615 2.27.46.574 1.124.86 1.99.86.665 0 1.25-.21 1.75-.627.497-.417.746-.935.746-1.552z"/>
          </svg>
        </div>
        
        <div className="flex-grow relative z-10">
          <p className="text-gray-600 italic mb-6">"{quote}"</p>
        </div>
        
        <div className="relative z-10">
          <div className="w-12 h-1 bg-softepy-gold/30 mb-4"></div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>

        <div className="absolute right-0 bottom-0 bg-softepy-gold/5 w-32 h-32 rounded-tl-full"></div>
      </div>
    </InViewAnimation>
  );
};

export default TestimonialCard;
