export default function Roadmap() {
  return (
    <>
      <div className="page-header">
        <h2>Roadmap</h2>
        <p>Where TempPay is headed  organized by development quarters.</p>
      </div>
      <div className="content-area">
        <div className="roadmap-grid">
          {/* Q1  Completed */}
          <div className="quarter-card q-current">
            <div className="quarter-label current">Q2 2026  FOUNDATION</div>
            <div className="quarter-title">Core Protocol Beta Launch</div>
            <ul className="quarter-items">
              <li><span className="q-dot done" /> Direct PathUSD payments</li>
              <li><span className="q-dot done" /> Tracked payments with lifecycle control</li>
              <li><span className="q-dot done" /> Dispute submission system</li>
              <li><span className="q-dot done" /> Payment requests</li>
              <li><span className="q-dot done" /> Admin dispute resolution</li>
            </ul>
          </div>

          {/* Q2  In Progress */}
          <div className="quarter-card q-current">
            <div className="quarter-label current">Q3 2026  GROWTH</div>
            <div className="quarter-title">Developer Tools & Audit</div>
            <ul className="quarter-items">
              <li><span className="q-dot active" /> React / Next.js SDK</li>
              <li><span className="q-dot active" /> Node.js backend SDK</li>
              <li><span className="q-dot pending" /> Independent security audit</li>
              <li><span className="q-dot pending" /> Developer documentation v2</li>
              <li><span className="q-dot pending" /> Testnet playground</li>
            </ul>
          </div>

          {/* Q3  Upcoming */}
          <div className="quarter-card q-upcoming">
            <div className="quarter-label upcoming">Q4 2026  EXPANSION</div>
            <div className="quarter-title">Merchant & E-Commerce</div>
            <ul className="quarter-items">
              <li><span className="q-dot planned" /> Merchant checkout widget</li>
              <li><span className="q-dot planned" /> Webhook event system</li>
              <li><span className="q-dot planned" /> REST API launch</li>
              <li><span className="q-dot planned" /> Payment analytics dashboard</li>
              <li><span className="q-dot planned" /> Multi-token support</li>
            </ul>
          </div>

          {/* Q4  Future */}
          <div className="quarter-card q-future">
            <div className="quarter-label future">Q1 2027  MATURITY</div>
            <div className="quarter-title">Decentralization & Scale</div>
            <ul className="quarter-items">
              <li><span className="q-dot planned" /> On-chain dispute governance</li>
              <li><span className="q-dot planned" /> Automated payment APIs</li>
              <li><span className="q-dot planned" /> Bug bounty program</li>
              <li><span className="q-dot planned" /> Multi-sig admin controls</li>
              <li><span className="q-dot planned" /> Cross-chain bridge support</li>
            </ul>
          </div>
        </div>

        <div className="spacer" />
        <h3>Legend</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '12px', color: 'var(--text2)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="q-dot done" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} /> Completed
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', boxShadow: '0 0 6px var(--accent)' }} /> In Progress
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} /> Upcoming
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text3)', display: 'inline-block' }} /> Planned
          </span>
        </div>
      </div>
    </>
  );
}
