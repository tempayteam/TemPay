import React from "react";
import {
  Home,
  Info,
  Network,
  CreditCard,
  Zap,
  Activity,
  ArrowDownToLine,
  Flag,
  Scale,
  Code,
  FileCode,
  Shield,
  Map,
} from "lucide-react";

export default function Sidebar({ active, onNav, isOpen }) {
  const navItems = [
    {
      section: "Getting Started",
      items: [
        { id: "welcome", icon: Home, label: "Welcome" },
        { id: "overview", icon: Info, label: "What is TempPay" },
        { id: "network", icon: Network, label: "Tempo Network" },
      ],
    },
    {
      section: "Core Features",
      items: [
        { id: "payments", icon: CreditCard, label: "Payment Types" },
        { id: "quickstart", icon: Zap, label: "Quick Start Guide" },
        { id: "tracked", icon: Activity, label: "Tracked Payments" },
        { id: "requests", icon: ArrowDownToLine, label: "Payment Requests" },
      ],
    },
    {
      section: "Dispute System",
      items: [
        { id: "disputes", icon: Flag, label: "Disputes Overview" },
        { id: "resolution", icon: Scale, label: "Resolution Process" },
      ],
    },
    {
      section: "Developers",
      items: [
        { id: "integration", icon: Code, label: "Integration Guide" },
        { id: "contracts", icon: FileCode, label: "Smart Contracts" },
        { id: "security", icon: Shield, label: "Security" },
        { id: "roadmap", icon: Map, label: "Roadmap" },
      ],
    },
  ];

  return (
    <aside className={`sidebar${isOpen ? " open" : ""}`}>
      <nav className="sidebar-nav">
        {navItems.map((group) => (
          <div key={group.section}>
            <div className="nav-section">{group.section}</div>
            {group.items.map((item) => (
              <a
                key={item.id}
                className={`nav-link${active === item.id ? " active" : ""}`}
                onClick={() => onNav(item.id)}
              >
                <item.icon className="nav-icon" size={16} strokeWidth={2.5} />
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">Built on · Tempo Chain</div>
    </aside>
  );
}
