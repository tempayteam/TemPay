import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="cta-outer">
      <div className="cta-orb"></div>
      <div className="cta-orb2"></div>
      <div className="cta-inner reveal">
        <p className="cta-label">Ready to begin?</p>
        <h2>Start secure crypto payments using Tempay</h2>
        <p>No middlemen. No risk. Just programmable trust with Tempay.</p>
        <Link
          to="/whitelist"
          className="btn-cta"
          style={{ display: "inline-block", textDecoration: "none" }}
        >
          Get Started →
        </Link>
      </div>
    </div>
  );
};

export default CTA;
