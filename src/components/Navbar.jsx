import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <a className="nav-logo" href="#">
        <div className="logo-mark">$</div>
        Tempay
      </a>
      <div className="nav-links">
        <a href="#">Protocol</a>
        <a href="#features">Features</a>
        <a href="#hiw">How it works</a>
        <a href="#" className="docs-link">Docs
          <span className="docs-tooltip">
            Coming Soon
          </span>
        </a>
      </div>
      <a href="#" className="btn btn-fill docs-link" onClick={(e) => e.preventDefault()}>Launch App →
        <span className="docs-tooltip">Coming Soon</span>
      </a>
    </nav>
  );
};

export default Navbar;
