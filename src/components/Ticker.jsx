import React from 'react';

const Ticker = () => {
  const items = [
    { text: "Decentralized Protocol", color: "var(--orange)" },
    { text: "Instant Settlement", color: "var(--orange)" },
    { text: "On-Chain Security", color: "var(--orange)" },
    { text: "Trustless Disputes", color: "var(--orange)" },
    { text: "Tempay NFTs", color: "var(--teal)" },
    { text: "ERC-20 Supported", color: "var(--orange)" },
    { text: "Decentralized Protocol", color: "var(--orange)" },
    { text: "Instant Settlement", color: "var(--orange)" },
    { text: "On-Chain Security", color: "var(--orange)" },
    { text: "Trustless Disputes", color: "var(--orange)" },
    { text: "Tempay NFTs", color: "var(--teal)" },
    { text: "ERC-20 Supported", color: "var(--orange)" }
  ];

  return (
    <div className="ticker-outer">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span className="ticker-item" key={index}>
            <svg className="td" width="10" height="10" viewBox="0 0 10 10">
              <polygon points="5,0 10,5 5,10 0,5" fill={item.color}/>
            </svg> 
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
