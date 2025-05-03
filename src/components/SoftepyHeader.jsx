import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBoxOpen, FaHandshake, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./SoftepyHeader.css";

const SoftepyHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: "/softepy/home", icon: <FaHome />, label: "Home" },
    { path: "/softepy/about", icon: <FaInfoCircle />, label: "About Us" },
    { path: "/softepy/product", icon: <FaBoxOpen />, label: "Product" },
    { path: "/softepy/franchise", icon: <FaHandshake />, label: "Franchise" },
    { path: "/softepy/location", icon: <FaMapMarkerAlt />, label: "Location" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="softepy-header">
      {/* Left: Logo */}
      <div className="header-logo">
        <img src={logo} alt="Softepy Logo" />
      </div>

      {/* Center: Tabs */}
      <div className="header-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.path}
            className={`header-icon ${isActive(tab.path) ? "active" : ""}`}
            onClick={() => navigate(tab.path)}
            title={tab.label}
          >
            {tab.icon}
          </div>
        ))}
      </div>

      {/* Right: Social Icons */}
      <div className="header-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default SoftepyHeader;
