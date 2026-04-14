import React from 'react';

const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-cell reveal">
          <div className="stat-icon pk">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="4" r="2" fill="var(--orange)"/>
              <circle cx="3.5" cy="15" r="2" fill="var(--orange)"/>
              <circle cx="16.5" cy="15" r="2" fill="var(--orange)"/>
              <line x1="10" y1="6" x2="3.5" y2="13" stroke="var(--orange)" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="10" y1="6" x2="16.5" y2="13" stroke="var(--orange)" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="5.5" y1="15" x2="14.5" y2="15" stroke="var(--orange)" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <div><div className="stat-text-title">Decentralized</div><div className="stat-text-sub">Protocol</div></div>
        </div>
        <div className="stat-cell reveal reveal-delay-1">
          <div className="stat-icon tl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 2L4 11.5H10L8.5 18L16 8.5H10.5L11.5 2Z" fill="var(--orange)" stroke="var(--orange)" strokeWidth="0.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div><div className="stat-text-title">Instant</div><div className="stat-text-sub">Settlement</div></div>
        </div>
        <div className="stat-cell reveal reveal-delay-2">
          <div className="stat-icon pk">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L3 5V10C3 13.87 6.13 17.5 10 18.5C13.87 17.5 17 13.87 17 10V5L10 2Z" fill="var(--orange)" fillOpacity="0.15" stroke="var(--orange)" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M7 10L9 12L13 8" stroke="var(--orange)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div><div className="stat-text-title">On-Chain</div><div className="stat-text-sub">Security</div></div>
        </div>
        <div className="stat-cell reveal reveal-delay-3">
          <div className="stat-icon tl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" y1="3" x2="10" y2="17" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="5" y1="17" x2="15" y2="17" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="3" y1="6" x2="17" y2="6" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 6L5.5 11.5H0.5L3 6Z" fill="var(--orange)" fillOpacity="0.25" stroke="var(--orange)" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M17 6L19.5 11.5H14.5L17 6Z" fill="var(--orange)" fillOpacity="0.1" stroke="var(--orange)" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
          <div><div className="stat-text-title">Trustless</div><div className="stat-text-sub">Disputes</div></div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
