export default function Tracked() {
  return (
    <>
      <div className="page-header">
        <h2>Tracked Payments</h2>
        <p>Structured, lockable payments with full lifecycle control.</p>
      </div>
      <div className="content-area">
        <p>A tracked payment works by locking PathUSD inside the TempPay smart contract. The funds stay locked until specific conditions are met  primarily, the receiver claims after the scheduled time has passed.</p>
        <p>This creates a verifiable, on-chain payment agreement between two wallets  without relying on trust or off-chain promises.</p>

        <div className="spacer" />
        <h3>Payment Lifecycle</h3>
        <div className="flow" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
            <div className="flow-node highlight" style={{ minWidth: '150px' }}>Created</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Sender locks PathUSD in contract</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 14px', fontSize: '18px' }}>↓</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
            <div className="flow-node" style={{ minWidth: '150px', borderColor: 'rgba(59,130,246,0.25)', color: '#60a5fa' }}>Active</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Funds locked, awaiting claim time</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 14px', fontSize: '18px' }}>↓ or ↘</div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '8px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="flow-node" style={{ minWidth: '130px', borderColor: 'rgba(34,197,94,0.25)', color: 'var(--green)' }}>Claimed</div>
              <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Receiver gets PathUSD ✓</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="flow-node" style={{ minWidth: '130px', borderColor: 'rgba(245,158,11,0.25)', color: 'var(--amber)' }}>Stopped</div>
              <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Enters dispute review</span>
            </div>
          </div>
        </div>

        <div className="spacer" />
        <h3>Sender Controls</h3>
        <table className="doc-table">
          <thead><tr><th>Action</th><th>Effect</th><th>Availability</th></tr></thead>
          <tbody>
            <tr><td>Create payment</td><td>Locks PathUSD in contract</td><td><span className="badge badge-live">Live</span></td></tr>
            <tr><td>Pause payment</td><td>Temporarily halts claimability</td><td><span className="badge badge-live">Live</span></td></tr>
            <tr><td>Stop payment</td><td>Moves to dispute review</td><td><span className="badge badge-live">Live</span></td></tr>
          </tbody>
        </table>

        <div className="callout callout-warn">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <div className="callout-body">
            <strong>Important</strong>
            Once a tracked payment is stopped, it enters the dispute system. Both sender and receiver will be notified and can submit evidence. Funds are held until the review is complete.
          </div>
        </div>
      </div>
    </>
  );
}
