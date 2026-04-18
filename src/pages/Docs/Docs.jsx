import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/sections/Welcome";
import Overview from "./components/sections/Overview";
import Network from "./components/sections/Network";
import Payments from "./components/sections/Payments";
import QuickStart from "./components/sections/QuickStart";
import Tracked from "./components/sections/Tracked";
import Requests from "./components/sections/Requests";
import Disputes from "./components/sections/Disputes";
import Resolution from "./components/sections/Resolution";
import Integration from "./components/sections/Integration";
import Contracts from "./components/sections/Contracts";
import Security from "./components/sections/Security";
import Roadmap from "./components/sections/Roadmap";
import "./Docs.css";

const sections = {
  welcome: Welcome,
  overview: Overview,
  network: Network,
  payments: Payments,
  quickstart: QuickStart,
  tracked: Tracked,
  requests: Requests,
  disputes: Disputes,
  resolution: Resolution,
  integration: Integration,
  contracts: Contracts,
  security: Security,
  roadmap: Roadmap,
};

export default function Docs() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = useCallback((id) => {
    setActiveSection(id);
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, []);

  const ActiveComponent = sections[activeSection] || Welcome;

  return (
    <div className="docs-page-container">
      {/* Top Navigation Bar */}
      <nav className="docs-nav">
        <div className="docs-nav-left">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
          <Link className="nav-logo" to="/">
            <div className="logo-mark">$</div>
            Tempay
          </Link>
        </div>
        <Link className="docs-nav-back" to="/">
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

      <div className="docs-layout">
        <div
          className={`sidebar-overlay${sidebarOpen ? " open" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        <Sidebar
          active={activeSection}
          onNav={handleNav}
          isOpen={sidebarOpen}
        />

        <main className="main-content">
          <div className="doc-section active" key={activeSection}>
            <ActiveComponent onNav={handleNav} />
          </div>
        </main>
      </div>
    </div>
  );
}
