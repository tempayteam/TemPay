import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef(null);
  const heroWrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroWrap = heroWrapRef.current;
    const ctx = canvas.getContext("2d");

    const SPACING = 32;
    const R_MIN = 1.8;
    const R_MAX = 14.5;
    const REACH = 150;
    const LERP = 0.14;

    const ORANGE = "#f46900";
    const ORANGE_MID = "#ff8c3b";
    const GREY = "rgba(150,150,175,0.28)";

    let dots = [];
    let mouseX = -999;
    let mouseY = -999;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const buildGrid = () => {
      if (!heroWrap || !canvas) return;
      canvas.width = heroWrap.offsetWidth;
      canvas.height = heroWrap.offsetHeight;
      const cols = Math.ceil(canvas.width / SPACING) + 2;
      const rows = Math.ceil(canvas.height / SPACING) + 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * SPACING, y: r * SPACING, radius: R_MIN });
        }
      }
    };

    buildGrid();
    window.addEventListener("resize", buildGrid);

    const drawLoop = () => {
      if (!canvas || !heroWrap) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rect = heroWrap.getBoundingClientRect();
      const relX = mouseX - rect.left;
      const relY = mouseY - rect.top;

      for (const d of dots) {
        const dx = d.x - relX;
        const dy = d.y - relY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const target =
          dist < REACH
            ? R_MIN + (R_MAX - R_MIN) * Math.pow(1 - dist / REACH, 2.5)
            : R_MIN;

        d.radius += (target - d.radius) * LERP;

        let color;
        if (dist < REACH * 0.35) color = ORANGE;
        else if (dist < REACH * 0.8) color = ORANGE_MID;
        else color = GREY;

        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.4, d.radius), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", buildGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="hero-wrapper"
      ref={heroWrapRef}
      style={{
        borderBottom: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas id="dot-canvas" ref={canvasRef}></canvas>
      <div className="hero" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <div className="live-tag">
            <div className="live-dot"></div>Tempay Protocol - Live
          </div>
          <h1 className="hero-title">
            On-chain payments,
            <br />
            <em>simplified</em>
          </h1>
          <p className="hero-sub">
            Crypto payments are fast, but not safe. Tempay makes them secure,
            programmable, and trustless with milestone based payments and
            on-chain dispute resolution.
          </p>
          <div className="hero-ctas">
            <Link to="/whitelist" className="btn btn-fill btn-lg">
              Launch App <ArrowRight size={18} />
            </Link>
            <a href="#hiw" className="how-link">
              How it works <ArrowDown size={14} />
            </a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="graphic-ring ring1"></div>
          <div className="graphic-ring ring2"></div>
          <div className="graphic-ring ring3"></div>
          <div className="graphic-core">$</div>
          <div className="float-card fc-1">
            <div className="dot" style={{ background: "var(--orange)" }}></div>
            Instant Settlement
          </div>
          <div className="float-card fc-2">
            <div className="dot" style={{ background: "var(--orange)" }}></div>
            Milestone Payments
          </div>
          <div className="float-card fc-3">
            <div className="dot" style={{ background: "var(--orange)" }}></div>
            On-Chain Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
