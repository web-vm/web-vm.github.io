import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryPage.css";

import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import grid3bg from "../assets/grid3bg.png";

const EntryPage = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-on-scroll");
        } else {
          entry.target.classList.remove("animate-on-scroll");
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // ✅ FIX: Snapshot the current ref value
    const sections = sectionRefs.current;
  
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  

  const setRef = (el, index) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="entry-page">
      {/* Grid 1 */}
      <div className="grid-1 animate-section" ref={(el) => setRef(el, 0)}>
        <div className="company-name">
          <span className="text-part black">WELCOME TO </span>
          <span className="text-part white">THE PY</span>
        </div>
        <div className="tagline">"Vending Freshness Spreading Happiness"</div>
      </div>

      {/* Grid 2 Top */}
      <div className="grid-2 animate-section" ref={(el) => setRef(el, 1)}>
        <h2 className="about-heading">India’s First Women-Led Healthy Vending Startup</h2>
        <div className="about-text">
          <span className="puzzle top">
            At The Py, we're redefining the vending experience with a fresh, health-conscious twist. Proudly female-founded and driven by a mission to promote natural goodness, we offer two innovative, self-serve vending solutions:
          </span>
          <span className="puzzle left">
            🍦 <strong>Natural Soft Serve Vending Machines</strong> – Indulge in delicious soft-serve ice cream made from real, wholesome ingredients. No additives, just pure flavor.
          </span>
          <span className="puzzle right">
            🍊 <strong>100% Fresh Juice Vending Machines</strong> – Enjoy refreshing Orange or Mosambi juice, made on the spot using real fruit pulp. No water, no ice, no sugar — just nature in a cup.
          </span>
        </div>
      </div>

      {/* Grid 3 */}
      <div className="grid-3 animate-section" ref={(el) => setRef(el, 2)} style={{ backgroundImage: `url(${grid3bg})` }}>
        <div className="grid-card grid4 slide-from-right">
          <div className="logo-box blue-box">
            <img src={logo} alt="Softy Logo" className="logo-cover" />
          </div>
          <p className="grid-desc">
            <strong>India’s First Healthy Vending Startup - Softepy</strong><br /><br />
            To become India’s most trusted name in natural, automated desserts making machines. We craft every serving in a hygienic, self-serve environment, ensuring safety, freshness and consistency every time. It’s more than a treat. It’s a luxurious, guilt-free experience made sustainably accessible to everyone, everywhere.
          </p>
          <button className="read-more" onClick={() => navigate("/softepy/home")}>EXPLORE</button>

        </div>

        <div className="grid-card grid5 slide-from-left">
          <div className="logo-box orange-box">
            <img src={logo1} alt="Pulpy Logo" className="logo-fill" />
          </div>
          <p className="grid-desc">
            <strong>India’s First Healthy Vending Startup - Pulpepy</strong><br /><br />
            To become the go to choice for real 100% fruit juice. We craft every serving in an automated, untouched and uncompromised offering healthy refreshment that fits modern lifestyles without compromise on purity, taste or health. We offer nothing but the luxurious fruit pulp made sustainably accessible to everyone, everywhere.
          </p>
          <button className="read-more" onClick={() => navigate("/pulpepy/home")}>EXPLORE</button>

        </div>
      </div>

      {/* Grid 2 Bottom */}
      <div className="grid-2 animate-section" ref={(el) => setRef(el, 3)}>
        <div className="about-text">
          <span className="puzzle bottom">
            We’re expanding rapidly and offer exciting franchise opportunities across India. Join us in delivering convenient, clean, and healthy options to the consumers. To become India’s most trusted name in natural, automated refreshments—making guilt-free indulgence and nourishment accessible, enjoyable, and sustainable for everyone, through our soft serve and fresh juice vending experiences.
          </span>
        </div>
      </div>

      {/* Grid 6 - Footer */}
      <div className="grid-6 animate-section" ref={(el) => setRef(el, 4)}>
        <div className="footer-top">
          <div className="footer-left slide-in-left">
            <span className="footer-icon">📧</span>
            <span className="footer-text">abc@gmail.com</span>
          </div>
          <div className="footer-right slide-in-right">
            <span className="footer-icon">📞</span>
            <span className="footer-text">+91 9999999999</span>
          </div>
        </div>
        <div className="footer-bottom fade-in-top">
          © 2025 The Py. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
