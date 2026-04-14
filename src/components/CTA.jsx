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
        <a href="#" className="btn-cta docs-link" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={(e) => e.preventDefault()}>Get Started →
          <span className="docs-tooltip">Coming Soon</span>
        </a>
      </div>
    </div>
  );
};

export default CTA;
