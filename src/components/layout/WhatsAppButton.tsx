
import React from "react";
// Use MessageCircle icon instead of WhatsApp as it's available in lucide-react
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // WhatsApp number with country code for India
  const whatsappNumber = "919876543210"; // Replace with your actual WhatsApp number with country code
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20THE%20PY%20products`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
