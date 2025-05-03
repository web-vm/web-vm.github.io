import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", 
    isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4")}>
      <div className="container mx-auto md:px-6 flex items-center justify-between px-[35px]">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-softepy-dark">THE PY</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={cn("nav-link", location.pathname === "/" && "text-softepy-gold")}>
            Home
          </Link>
          <Link to="/about" className={cn("nav-link", location.pathname === "/about" && "text-softepy-gold")}>
            About
          </Link>
          <Link to="/product" className={cn("nav-link", location.pathname === "/product" && "text-softepy-gold")}>
            Product
          </Link>
          <Link to="/franchise" className={cn("nav-link", location.pathname === "/franchise" && "text-softepy-gold")}>
            Franchise
          </Link>
          <Link to="/contact" className={cn("nav-link", location.pathname === "/contact" && "text-softepy-gold")}>
            Contact
          </Link>
        </nav>

        <button className="md:hidden text-softepy-dark focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className={cn("nav-link", location.pathname === "/" && "text-softepy-gold")}>
              Home
            </Link>
            <Link to="/about" className={cn("nav-link", location.pathname === "/about" && "text-softepy-gold")}>
              About
            </Link>
            <Link to="/product" className={cn("nav-link", location.pathname === "/product" && "text-softepy-gold")}>
              Product
            </Link>
            <Link to="/franchise" className={cn("nav-link", location.pathname === "/franchise" && "text-softepy-gold")}>
              Franchise
            </Link>
            <Link to="/contact" className={cn("nav-link", location.pathname === "/contact" && "text-softepy-gold")}>
              Contact
            </Link>
          </nav>
        </div>}
    </header>;
};

export default Navbar;
