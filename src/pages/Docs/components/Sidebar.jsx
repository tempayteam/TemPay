export default function Sidebar({ active, onNav, isOpen }) {
  const navItems = [
    {
      section: "Getting Started",
      items: [
        { id: "welcome", label: "Welcome" },
        { id: "overview", label: "What is TempPay" },
        { id: "network", label: "Tempo Network" },
      ],
    },
    {
      section: "Core Features",
      items: [
        { id: "payments", label: "Payment Types" },
        { id: "quickstart", label: "Quick Start Guide" },
        { id: "tracked", label: "Tracked Payments" },
        { id: "requests", label: "Payment Requests" },
      ],
    },
    {
      section: "Dispute System",
      items: [
        { id: "disputes", label: "Disputes Overview" },
        { id: "resolution", label: "Resolution Process" },
      ],
    },
    {
      section: "Developers",
      items: [
        { id: "integration", label: "Integration Guide" },
        { id: "contracts", label: "Smart Contracts" },
        { id: "security", label: "Security" },
        { id: "roadmap", label: "Roadmap" },
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
