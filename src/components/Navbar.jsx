import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document
        .getElementById("navbar")
        .classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <a className="nav-logo" href="#">
        <div className="logo-mark">$</div>
        Tempay
      </a>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={() => setIsOpen(false)}>
          Protocol
        </a>
        <a href="#features" onClick={() => setIsOpen(false)}>
          Features
        </a>
        <a href="#hiw" onClick={() => setIsOpen(false)}>
          How it works
        </a>
        <Link
          to="/docs"
          className="nav-link"
          style={{ fontWeight: 600 }}
          onClick={() => setIsOpen(false)}
        >
          Docs
        </Link>
        <Link
          to="/whitelist"
          className="btn btn-fill mobile-only-cta"
          onClick={() => setIsOpen(false)}
        >
          Launch App →
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/whitelist" className="btn btn-fill desktop-only-cta">
          Launch App →
        </Link>
        <button
          className="nav-mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
