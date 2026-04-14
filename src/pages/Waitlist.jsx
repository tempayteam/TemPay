import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Waitlist.css";

import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.webp";
import img9 from "../assets/9.webp";
import img10 from "../assets/10.webp";
import img11 from "../assets/11.webp";

const nfts = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

// Each column gets a different rotation of the same images for visual variety.
// We repeat them enough times so there's always content filling the viewport.
const makeCol = (offset, repeat = 6) => {
  const rotated = [...nfts.slice(offset), ...nfts.slice(0, offset)];
  let out = [];
  for (let i = 0; i < repeat; i++) out = [...out, ...rotated];
  return out;
};

const colAImages = makeCol(0); // 66 images
const colBImages = makeCol(4); // 66 images, different start
const colCImages = makeCol(8); // 66 images, different start

// ── Marquee column component ──────────────────────────────────────────────────
// Uses rAF to scroll pixel-by-pixel. When the scroll position reaches the
// height of ONE set (nfts.length images), it snaps back to 0 — seamlessly,
// because the content repeating after that point is identical.
function MarqueeCol({ images, speed, className }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const start = () => {
      // "one set" height = total height / number of repetitions (6)
      const oneSet = track.scrollHeight / 6;
      const absSpeed = Math.abs(speed);
      const goingDown = speed < 0;

      // If scrolling downward, start offset at oneSet so we have room to scroll down
      if (goingDown) {
        posRef.current = oneSet;
      }

      const tick = () => {
        if (goingDown) {
          posRef.current -= absSpeed;
          if (posRef.current <= 0) {
            posRef.current += oneSet; // snap forward — invisible because content repeats
          }
        } else {
          posRef.current += absSpeed;
          if (posRef.current >= oneSet) {
            posRef.current -= oneSet; // snap back — invisible because content repeats
          }
        }
        track.style.transform = `translateY(-${posRef.current}px)`;
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    // Small delay so images are loaded & heights computed
    const timer = setTimeout(start, 100);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div className={`wl-nft-col ${className}`}>
      <div ref={trackRef} className="wl-nft-track">
        {images.map((src, i) => (
          <img key={i} src={src} alt="nft" />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

function isValidWallet(addr) {
  return /^0x[0-9a-fA-F]{40}$/.test(addr.trim());
}

const Waitlist = () => {
  const [walletAddr, setWalletAddr] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    setStatus("idle");
    const addr = walletAddr.trim();

    if (!isValidWallet(addr)) {
      setStatus("error");
      setTimeout(() => {
        setStatus((prev) => (prev === "error" ? "idle" : prev));
      }, 2000);
      return;
    }

    setStatus("success");

    fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        wallet: addr,
        timestamp: new Date().toISOString(),
      }),
    }).catch((e) => console.warn("Sheet error:", e));
  };

  return (
    <div className="waitlist-page-container">
      {/* NAV */}
      <nav className="wl-nav">
        <Link className="nav-logo" to="/">
          <div className="logo-mark">$</div>
          Tempay
        </Link>
        <Link className="wl-nav-back" to="/">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>
      </nav>

      <div className="wl-page">
        {/* LEFT: FORM */}
        <div className="wl-left">
          <div className="wl-card">
            <p className="wl-card-label">Early Access</p>
            <h1>
              Join the
              <br />
              <em>Waitlist</em>
            </h1>
            <p>
              Be the first to experience on-chain payments with Tempay. Secure
              your spot before the public launch.
            </p>

            {status === "success" && (
              <div className="wl-success-msg show">
                <div className="wl-success-dot" />
                You're on the list! Wallet address saved.
              </div>
            )}

            {status === "error" && (
              <div className="wl-error-msg show">
                <div
                  className="wl-success-dot"
                  style={{ background: "#e53e3e" }}
                />
                Invalid wallet address. Please enter a valid EVM address.
              </div>
            )}

            {status !== "success" && (
              <div className="wl-form-col">
                <input
                  type="text"
                  className="wl-email-input"
                  placeholder="0x... Wallet Address"
                  autoComplete="off"
                  spellCheck="false"
                  value={walletAddr}
                  onChange={(e) => setWalletAddr(e.target.value)}
                  style={
                    status === "error"
                      ? { borderColor: "rgba(244,105,0,0.8)" }
                      : {}
                  }
                />
                <button className="wl-btn-submit" onClick={handleSubmit}>
                  Join Waitlist
                </button>
              </div>
            )}

            {status !== "success" && (
              <p className="wl-privacy">
                Your wallet address is stored securely. Nothing else.
              </p>
            )}

            <div className="wl-divider">
              <span>or follow us</span>
            </div>

            <div className="wl-socials">
              <a
                className="wl-social-btn"
                href="https://x.com/tempay_tempo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ic">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.861-8.17-10.639h6.17l4.271 5.64 5.495-5.64Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                TWITTER
              </a>
              <a
                className="wl-social-btn"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=team.tempay@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ic">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </span>
                EMAIL US
              </a>
            </div>
          </div>

          <div className="wl-page-footer">
            © 2026 Tempay. All rights reserved.
          </div>
        </div>

        {/* RIGHT: NFT MARQUEE */}
        <div className="wl-right">
          <div className="wl-nft-grid-outer">
            <div className="wl-nft-grid">
              <MarqueeCol images={colAImages} speed={0.5} className="col-a" />
              <MarqueeCol images={colBImages} speed={-0.35} className="col-b" />
              <MarqueeCol images={colCImages} speed={0.45} className="col-c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
