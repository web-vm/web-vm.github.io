
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InViewAnimation from "@/components/ui/InViewAnimation";

type JamFlavor = "strawberry" | "orange" | "grape" | null;
type Topping = "brownie" | "sprinkles" | "nuts" | null;

const IceCreamCustomizer = () => {
  const [jamFlavor, setJamFlavor] = useState<JamFlavor>(null);
  const [topping, setTopping] = useState<Topping>(null);

  const handleJamClick = (flavor: JamFlavor) => {
    setJamFlavor(flavor === jamFlavor ? null : flavor);
  };

  const handleToppingClick = (newTopping: Topping) => {
    setTopping(newTopping === topping ? null : newTopping);
  };

  // Determine colors based on selected jam
  const getJamColor = () => {
    switch(jamFlavor) {
      case "strawberry": return "#FF5E84";
      case "orange": return "#FFA500";
      case "grape": return "#9b87f5";
      default: return "transparent";
    }
  };

  return (
    <InViewAnimation animation="fade-in-up" delay={0.2}>
      <Card className="max-w-md mx-auto p-6 bg-white">
        <CardContent className="pt-6 flex flex-col items-center">
          {/* Ice Cream SVG */}
          <div className="w-56 h-64 relative mb-8">
            {/* Cup */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-28">
              <svg viewBox="0 0 100 70" className="w-full h-full">
                <path 
                  d="M10,0 L90,0 L100,70 L0,70 Z" 
                  fill="#FFF8DC"
                  stroke="#E8E0C0"
                  strokeWidth="1"
                />
                <path 
                  d="M10,0 L90,0 L100,70 L0,70 Z" 
                  fill="url(#cup-gradient)"
                  stroke="#E8E0C0"
                  strokeWidth="1"
                />
                <linearGradient id="cup-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0.9" />
                </linearGradient>
              </svg>
            </div>

            {/* Ice Cream Base */}
            <div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-36 h-48 animate-subtle-float"
              style={{ filter: "drop-shadow(0px 4px 3px rgba(0,0,0,0.1))" }}
            >
              <svg viewBox="0 0 100 120" className="w-full h-full">
                {/* Left swirl */}
                <path 
                  d="M30,120 C10,100 10,50 20,25 C30,0 55,0 55,0 L55,120 Z" 
                  fill="#FFF5E0"
                >
                  <animate 
                    attributeName="d" 
                    dur="5s"
                    repeatCount="indefinite"
                    values="
                      M30,120 C10,100 10,50 20,25 C30,0 55,0 55,0 L55,120 Z;
                      M25,120 C5,100 5,50 15,25 C25,0 55,0 55,0 L55,120 Z;
                      M30,120 C10,100 10,50 20,25 C30,0 55,0 55,0 L55,120 Z
                    "
                  />
                </path>
                
                {/* Right swirl */}
                <path 
                  d="M55,0 C55,0 80,0 85,25 C90,50 85,100 75,120 L55,120 Z" 
                  fill="#FFF0D0"
                >
                  <animate 
                    attributeName="d" 
                    dur="4s"
                    repeatCount="indefinite"
                    values="
                      M55,0 C55,0 80,0 85,25 C90,50 85,100 75,120 L55,120 Z;
                      M55,0 C55,0 85,0 90,25 C95,50 90,100 80,120 L55,120 Z;
                      M55,0 C55,0 80,0 85,25 C90,50 85,100 75,120 L55,120 Z
                    "
                  />
                </path>

                {/* Jam Layer (conditionally rendered) */}
                {jamFlavor && (
                  <>
                    <path 
                      d="M25,50 C25,35 40,20 55,20 C70,20 85,35 85,50 C85,65 70,80 55,80 C40,80 25,65 25,50 Z" 
                      fill={getJamColor()}
                      opacity="0.7"
                    >
                      <animate 
                        attributeName="d" 
                        dur="6s"
                        repeatCount="indefinite"
                        values="
                          M25,50 C25,35 40,20 55,20 C70,20 85,35 85,50 C85,65 70,80 55,80 C40,80 25,65 25,50 Z;
                          M30,55 C30,40 42,25 55,25 C68,25 80,40 80,55 C80,70 68,85 55,85 C42,85 30,70 30,55 Z;
                          M25,50 C25,35 40,20 55,20 C70,20 85,35 85,50 C85,65 70,80 55,80 C40,80 25,65 25,50 Z
                        "
                      />
                    </path>
                  </>
                )}
                
                {/* Toppings (conditionally rendered) */}
                {topping === "sprinkles" && (
                  <g className="sprinkles">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const x = 30 + Math.random() * 50;
                      const y = 10 + Math.random() * 60;
                      const rotation = Math.random() * 360;
                      const colors = ["#FF5E84", "#FFA500", "#9b87f5", "#63C5DA"];
                      const color = colors[Math.floor(Math.random() * colors.length)];
                      
                      return (
                        <rect 
                          key={i} 
                          x={x} 
                          y={y} 
                          width="3" 
                          height="6" 
                          fill={color}
                          transform={`rotate(${rotation} ${x} ${y})`}
                        />
                      );
                    })}
                  </g>
                )}
                
                {topping === "nuts" && (
                  <g className="nuts">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const x = 30 + Math.random() * 50;
                      const y = 10 + Math.random() * 60;
                      return (
                        <circle 
                          key={i} 
                          cx={x} 
                          cy={y} 
                          r="4" 
                          fill="#D2B48C"
                        />
                      );
                    })}
                  </g>
                )}
                
                {topping === "brownie" && (
                  <g className="brownie-crumbs">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const x = 30 + Math.random() * 50;
                      const y = 10 + Math.random() * 60;
                      const size = 5 + Math.random() * 5;
                      return (
                        <rect 
                          key={i} 
                          x={x} 
                          y={y} 
                          width={size} 
                          height={size} 
                          fill="#5C4033"
                          rx="1"
                        />
                      );
                    })}
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Controls */}
          <div className="w-full space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-center">Jam Flavors</h3>
              <div className="flex justify-center gap-3">
                <Button 
                  onClick={() => handleJamClick("strawberry")}
                  className={`${jamFlavor === "strawberry" ? "bg-softepy-accent1 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={jamFlavor === "strawberry" ? "default" : "outline"}
                >
                  Strawberry
                </Button>
                <Button 
                  onClick={() => handleJamClick("orange")}
                  className={`${jamFlavor === "orange" ? "bg-orange-500 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={jamFlavor === "orange" ? "default" : "outline"}
                >
                  Orange
                </Button>
                <Button 
                  onClick={() => handleJamClick("grape")}
                  className={`${jamFlavor === "grape" ? "bg-softepy-accent3 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={jamFlavor === "grape" ? "default" : "outline"}
                >
                  Grape
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-center">Toppings</h3>
              <div className="flex justify-center gap-3">
                <Button 
                  onClick={() => handleToppingClick("brownie")}
                  className={`${topping === "brownie" ? "bg-amber-800 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={topping === "brownie" ? "default" : "outline"}
                >
                  Brownie
                </Button>
                <Button 
                  onClick={() => handleToppingClick("sprinkles")}
                  className={`${topping === "sprinkles" ? "bg-pink-400 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={topping === "sprinkles" ? "default" : "outline"}
                >
                  Sprinkles
                </Button>
                <Button 
                  onClick={() => handleToppingClick("nuts")}
                  className={`${topping === "nuts" ? "bg-amber-600 text-white" : "bg-white text-gray-800 border border-gray-300"} transition-all`}
                  variant={topping === "nuts" ? "default" : "outline"}
                >
                  Nuts
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </InViewAnimation>
  );
};

export default IceCreamCustomizer;
