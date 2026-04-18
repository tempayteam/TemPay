import { Zap, ArrowRight } from "lucide-react";

export default function Welcome({ onNav }) {
  return (
    <>
      <div className="hero">
        <div className="hero-deco-1" />
        <div className="hero-deco-2" />
        <div className="hero-deco-3" />
        <div className="hero-eyebrow">Documentation v1.0</div>
        <h1>
          Build with <span className="accent">TempPay</span>
        </h1>
        <p className="hero-desc" style={{ maxWidth: "100%" }}>
          A structured PathUSD payment protocol on the Tempo network schedule,
          track, dispute, and settle crypto payments with confidence.
        </p>
        <div className="hero-pills">
          <span className="pill pill-orange">PathUSD Payments</span>
          <span className="pill pill-blue">Tempo Chain</span>
          <span className="pill pill-purple">Smart Contracts</span>
          <span className="pill pill-green">Non-Custodial</span>
        </div>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => onNav("quickstart")}>
            Get Started <ArrowRight size={16} style={{ display: "inline-block", verticalAlign: "middle" }} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onNav("integration")}
          >
            Developer Docs
          </button>
        </div>
      </div>

      <div className="content-area">
        <div className="section-label">what you can do today</div>

        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-orange"><Zap size={16} /></div>
            <h4>Instant Payments</h4>
            <p>
              Send PathUSD directly to any wallet on the Tempo network in
              seconds.
            </p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <h4>Tracked Payments</h4>
            <p>
              Lock funds until the receiver claims at the agreed time clear
              payment agreements.
            </p>
          </div>
          <div className="card">
            <div className="card-icon ci-purple">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            </div>
            <h4>Pause & Control</h4>
            <p>
              Pause or stop any tracked payment if conditions change. Full
              sender control.
            </p>
          </div>
          <div className="card">
            <div className="card-icon ci-amber">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4>Dispute System</h4>
            <p>
              Built-in dispute resolution with proof submission and admin
              review.
            </p>
          </div>
          <div className="card">
            <div className="card-icon ci-green">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </div>
            <h4>Payment Requests</h4>
            <p>
              Send structured payment requests to other wallets for freelance or
              team payments.
            </p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h4>Developer APIs</h4>
            <p>
              Planned integrations for React, Next.js, and Node.js use TempPay
              like Stripe.
            </p>
          </div>
        </div>

        <div className="callout callout-info">
          <div className="callout-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="callout-body">
            <strong>
              TempPay is currently in early-stage / experimental phase.
            </strong>
            Features are live on the Tempo network. Security audits are planned
            for future releases.
          </div>
        </div>
      </div>
    </>
  );
}
