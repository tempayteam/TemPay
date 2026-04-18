export default function Contracts() {
  return (
    <>
      <div className="page-header">
        <h2>Smart Contracts</h2>
        <p>TempPay's on-chain infrastructure on the Tempo network.</p>
      </div>
      <div className="content-area">
        <div className="callout callout-warn">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <div className="callout-body">
            <strong>Contract addresses will be published post-audit</strong>
            Official contract addresses will be listed here once the security audit is complete. Always verify contract addresses on the official TempPay channels before interacting.
          </div>
        </div>

        <h3>Contract Architecture</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            </div>
            <h4>TempPay Core</h4>
            <p>Main contract handling payment creation, tracking, and state management.</p>
            <span className="badge badge-live" style={{ marginTop: '10px', display: 'inline-flex' }}>Deployed</span>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M22 10H2" /></svg>
            </div>
            <h4>PathUSD Vault</h4>
            <p>Holds locked PathUSD for tracked payments until claimed or disputed.</p>
            <span className="badge badge-live" style={{ marginTop: '10px', display: 'inline-flex' }}>Deployed</span>
          </div>
          <div className="card">
            <div className="card-icon ci-amber">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
            <h4>Dispute Resolver</h4>
            <p>Admin-controlled contract that executes dispute outcomes on-chain.</p>
            <span className="badge badge-live" style={{ marginTop: '10px', display: 'inline-flex' }}>Deployed</span>
          </div>
        </div>

        <div className="spacer" />
        <h3>Key Contract Properties</h3>
        <table className="doc-table">
          <thead><tr><th>Property</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td>Network</td><td><code>Tempo Chain (EVM)  Chain ID: 4217</code></td></tr>
            <tr><td>Token</td><td><code>PathUSD (6 decimals)</code></td></tr>
            <tr><td>Custody model</td><td>Non-custodial  user wallets retain keys</td></tr>
            <tr><td>Admin functions</td><td>Dispute resolution only</td></tr>
            <tr><td>Upgradability</td><td>TBD  security audit pending</td></tr>
            <tr><td>Block Explorer</td><td><code>https://explore.tempo.xyz</code></td></tr>
            <tr><td>Audit status</td><td><span className="badge badge-soon">Planned</span></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
