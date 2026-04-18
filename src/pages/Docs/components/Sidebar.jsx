export default function Sidebar({ active, onNav, isOpen }) {
  const navItems = [
    {
      section: "Getting Started",
      items: [
        { id: "welcome", icon: "◎", label: "Welcome" },
        { id: "overview", icon: "◈", label: "What is TempPay" },
        { id: "network", icon: "◉", label: "Tempo Network" },
      ],
    },
    {
      section: "Core Features",
      items: [
        { id: "payments", icon: "⟳", label: "Payment Types" },
        { id: "quickstart", icon: "▷", label: "Quick Start Guide" },
        { id: "tracked", icon: "⊡", label: "Tracked Payments" },
        { id: "requests", icon: "⊕", label: "Payment Requests" },
      ],
    },
    {
      section: "Dispute System",
      items: [
        { id: "disputes", icon: "⚑", label: "Disputes Overview" },
        { id: "resolution", icon: "✦", label: "Resolution Process" },
      ],
    },
    {
      section: "Developers",
      items: [
        { id: "integration", icon: "⟨⟩", label: "Integration Guide" },
        { id: "contracts", icon: "≡", label: "Smart Contracts" },
        { id: "security", icon: "⊗", label: "Security" },
        { id: "roadmap", icon: "↗", label: "Roadmap" },
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
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        Built on{" "}
        <a href="https://tempay.xyz" target="_blank" rel="noopener noreferrer">
          tempay.xyz
        </a>{" "}
        · Tempo Chain
      </div>
    </aside>
  );
}
