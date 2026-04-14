import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const hiwSection = sectionRef.current;
      if (!hiwSection) return;

      const rect = hiwSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;

      // progress: 0 when section top hits bottom of viewport -> 1 when section bottom hits top
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + total)));

      let step = 0;
      if (progress >= 0.65) step = 3;
      else if (progress >= 0.45) step = 2;
      else if (progress >= 0.25) step = 1;

      setCurrentStep(step);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Compute positions
  const positions = { 0: '0%', 1: '0%', 2: '50%', 3: '100%' };
  const pos = positions[currentStep] || '0%';

  let travellerBorderColor = 'var(--orange)';
  let travellerBoxShadow = '0 0 0 4px rgba(244,105,0,0.2)';

  if (currentStep <= 1) {
    travellerBorderColor = 'var(--orange)';
    travellerBoxShadow = '0 0 0 4px rgba(244,105,0,0.2)';
  } else if (currentStep === 2) {
    travellerBorderColor = '#555';
    travellerBoxShadow = '0 0 0 4px rgba(0,0,0,0.1)';
  } else {
    travellerBorderColor = 'var(--teal)';
    travellerBoxShadow = '0 0 0 4px rgba(244,105,0,0.2)';
  }

  return (
    <div className="hiw-outer" id="hiw" ref={sectionRef}>
      <div className="hiw-inner">
        <p className="section-label reveal">How It Works</p>
        <h2 className="section-heading reveal">Three steps to get started</h2>

        <div className="hiw-steps" id="hiwSteps">
          <div className="hiw-connector" id="hiwConnector">
            <div className="track"></div>
            <div className="fill" style={{ width: pos }}></div>
            <div 
              className="traveller" 
              style={{ left: pos, borderColor: travellerBorderColor, boxShadow: travellerBoxShadow }}
            ></div>
          </div>

          <div className={`hiw-step ${currentStep >= 1 ? 'active-1' : ''}`} id="step1">
            <div className="step-num">01</div>
            <div className="step-text">
              <h3>Connect Wallet</h3>
              <p>Link your wallet in one click using WalletConnect, MetaMask, or any supported provider.</p>
            </div>
          </div>

          <div className={`hiw-step ${currentStep >= 2 ? 'active-2' : ''}`} id="step2">
            <div className="step-num">02</div>
            <div className="step-text">
              <h3>Send or Request</h3>
              <p>Create instant or milestone-based payments using any ERC-20 token.</p>
            </div>
          </div>

          <div className={`hiw-step ${currentStep >= 3 ? 'active-3' : ''}`} id="step3">
            <div className="step-num">03</div>
            <div className="step-text">
              <h3>Settle On-Chain</h3>
              <p>Funds are held by the smart contract and released upon confirmation or milestone completion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
