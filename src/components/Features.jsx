import React from 'react';

const Features = () => {
  return (
    <div className="features-outer" id="features">
      <div className="features-inner">
        <p className="section-label-dark reveal">Core Features</p>
        <h2 className="section-heading-dark reveal">Everything you need for<br/>crypto payments</h2>
        <div className="feat-grid">
          <div className="feat-card reveal">
            <div className="feat-icon-box pk">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Direct Payments</h3>
            <p>Funds are locked in smart contracts and only released when conditions are met. No trust required between parties.</p>
          </div>
          <div className="feat-card reveal reveal-delay-1">
            <div className="feat-icon-box tl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="14" width="4" height="7" rx="1" fill="var(--orange)" fillOpacity="0.3" stroke="var(--orange)" strokeWidth="1.6"/>
                <rect x="10" y="9" width="4" height="12" rx="1" fill="var(--orange)" fillOpacity="0.5" stroke="var(--orange)" strokeWidth="1.6"/>
                <rect x="17" y="4" width="4" height="17" rx="1" fill="var(--orange)" stroke="var(--orange)" strokeWidth="1.6"/>
              </svg>
            </div>
            <h3>Track & Manage Payments</h3>
            <p>Monitor every transaction, claim pending funds, and manage payments from one unified dashboard.</p>
          </div>
          <div className="feat-card reveal reveal-delay-2">
            <div className="feat-icon-box pk">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 6.5V12C4 16.42 7.58 20.5 12 21.5C16.42 20.5 20 16.42 20 12V6.5L12 3Z" fill="var(--orange)" fillOpacity="0.12" stroke="var(--orange)" strokeWidth="1.7" strokeLinejoin="round"/>
                <line x1="12" y1="9" x2="12" y2="16" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8.5" y1="9" x2="15.5" y2="9" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8.5 9L7 12.5H10L8.5 9Z" fill="var(--orange)" fillOpacity="0.3"/>
                <path d="M15.5 9L14 12.5H17L15.5 9Z" fill="var(--orange)" fillOpacity="0.15"/>
              </svg>
            </div>
            <h3>Transparent Dispute Resolution</h3>
            <p>Resolve payment conflicts with full on-chain transparency. No centralized authority, no hidden decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
