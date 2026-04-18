export default function Network() {
  return (
    <>
      <div className="page-header">
        <h2>Tempo Network</h2>
        <p>TempPay is deployed on the Tempo blockchain  a fast, low-cost EVM-compatible chain.</p>
      </div>
      <div className="content-area">
        <div className="network-card">
          <div className="network-logo">T</div>
          <div className="network-info">
            <h3>Tempo Chain</h3>
            <p>EVM-compatible · Low gas fees · Fast finality</p>
          </div>
          <div className="network-stats">
            <div className="net-stat">
              <div className="net-stat-val">EVM</div>
              <div className="net-stat-label">Compatible</div>
            </div>
            <div className="net-stat">
              <div className="net-stat-val">PathUSD</div>
              <div className="net-stat-label">Token</div>
            </div>
            <div className="net-stat">
              <div className="net-stat-val">4217</div>
              <div className="net-stat-label">Chain ID</div>
            </div>
          </div>
        </div>

        <h3>Network Configuration</h3>
        <table className="doc-table">
          <thead>
            <tr><th>Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Network Name</td><td><code>Tempo</code></td></tr>
            <tr><td>Chain ID</td><td><code>4217</code></td></tr>
            <tr><td>Currency Symbol</td><td><code>USD</code></td></tr>
            <tr><td>Default RPC URL</td><td><code>https://rpc.tempo.xyz</code></td></tr>
            <tr><td>Block Explorer</td><td><code>https://explore.tempo.xyz</code></td></tr>
            <tr><td>VM</td><td><code>EVM Compatible</code></td></tr>
            <tr><td>Payment Token</td><td><code>PathUSD</code></td></tr>
            <tr><td>Wallet Support</td><td><code>MetaMask, WalletConnect, standard EVM wallets</code></td></tr>
            <tr><td>App URL</td><td><code>https://tempay.xyz</code></td></tr>
          </tbody>
        </table>

        <div className="spacer" />
        <h3>Add Tempo to MetaMask</h3>
        <div className="card" style={{ marginBottom: '14px' }}>
          <div className="card-icon ci-orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h4>MetaMask Configuration</h4>
          <table className="doc-table" style={{ margin: '10px 0 0' }}>
            <tbody>
              <tr><td>Network Name</td><td><code>Tempo</code></td></tr>
              <tr><td>New RPC URL</td><td><code>https://rpc.tempo.xyz</code></td></tr>
              <tr><td>Chain ID</td><td><code>4217</code></td></tr>
              <tr><td>Currency Symbol</td><td><code>USD</code></td></tr>
              <tr><td>Block Explorer URL</td><td><code>https://explore.tempo.xyz</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="spacer" />
        <h3>Supported Wallets</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-orange">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h4>MetaMask</h4>
            <p>Add the Tempo network to MetaMask. Recommended for desktop users.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
            </div>
            <h4>WalletConnect</h4>
            <p>Connect any WalletConnect-compatible mobile wallet.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M22 10H2" /></svg>
            </div>
            <h4>Any EVM Wallet</h4>
            <p>Any wallet that supports EVM chains and custom RPC configuration.</p>
          </div>
        </div>
      </div>
    </>
  );
}
