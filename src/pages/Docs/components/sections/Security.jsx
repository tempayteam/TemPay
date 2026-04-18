export default function Security() {
  return (
    <>
      <div className="page-header">
        <h2>Security</h2>
        <p>Current security model and what's planned for future hardening.</p>
      </div>
      <div className="content-area">
        <div className="callout callout-warn">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <div className="callout-body">
            <strong>Early stage  use with appropriate caution</strong>
            TempPay is currently experimental. Smart contract audits are planned but not yet complete. Avoid storing large amounts of funds without understanding the current limitations.
          </div>
        </div>

        <h3>Current Security Model</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h4>Non-Custodial</h4>
            <p>TempPay never holds your private keys. All transactions are signed directly by your wallet.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
            </div>
            <h4>Direct Wallet Signing</h4>
            <p>Every payment and action requires an explicit wallet signature  no hidden transactions.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
            </div>
            <h4>On-Chain Transparency</h4>
            <p>All payment states are stored on-chain and fully auditable by anyone via the Tempo explorer.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-amber">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <h4>Admin-Only Dispute Access</h4>
            <p>The only privileged action available to admins is executing dispute resolution outcomes.</p>
          </div>
        </div>

        <div className="spacer" />
        <h3>Security Roadmap</h3>
        <table className="doc-table">
          <thead><tr><th>Item</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Smart contract deployment</td><td><span className="badge badge-live">Complete</span></td></tr>
            <tr><td>Non-custodial architecture</td><td><span className="badge badge-live">Complete</span></td></tr>
            <tr><td>Independent security audit</td><td><span className="badge badge-soon">Planned</span></td></tr>
            <tr><td>Bug bounty program</td><td><span className="badge badge-planned">Future</span></td></tr>
            <tr><td>On-chain governance for disputes</td><td><span className="badge badge-planned">Future</span></td></tr>
            <tr><td>Multi-sig admin controls</td><td><span className="badge badge-planned">Future</span></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
