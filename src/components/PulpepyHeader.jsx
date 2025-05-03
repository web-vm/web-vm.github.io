import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBoxOpen, FaHandshake, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import "./PulpepyHeader.css";

const PulpepyHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: "/pulpepy/home", icon: <FaHome />, label: "Home" },
    { path: "/pulpepy/about", icon: <FaInfoCircle />, label: "About Us" },
    { path: "/pulpepy/product", icon: <FaBoxOpen />, label: "Product" },
    { path: "/pulpepy/franchise", icon: <FaHandshake />, label: "Franchise" },
    { path: "/pulpepy/location", icon: <FaMapMarkerAlt />, label: "Location" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="pulpepy-header">
      <div className="header-logo">
        <img src={logo1} alt="Pulpepy Logo" />
      </div>

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

      <div className="header-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default PulpepyHeader;
