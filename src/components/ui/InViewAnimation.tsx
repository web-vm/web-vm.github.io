
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface InViewAnimationProps {
  children: ReactNode;
  animation?: 
    | "fade-in" 
    | "fade-in-up" 
    | "fade-in-left" 
    | "fade-in-right" 
    | "scale-in";
  delay?: number;
  threshold?: number;
  className?: string;
}

export const InViewAnimation: React.FC<InViewAnimationProps> = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.3,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "10px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyles = {
    opacity: 0,
    transform: 
      animation === "fade-in-up" ? "translateY(20px)" : 
      animation === "fade-in-left" ? "translateX(-20px)" : 
      animation === "fade-in-right" ? "translateX(20px)" : 
      animation === "scale-in" ? "scale(0.95)" : "none",
    transition: `opacity 0.7s ease, transform 0.7s ease`,
    transitionDelay: `${delay}s`,
  };

  const visibleStyles = {
    opacity: 1,
    transform: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? { ...animationStyles, ...visibleStyles } : animationStyles}
    >
      {children}
    </div>
  );
};

export default InViewAnimation;
