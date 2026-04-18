export default function QuickStart() {
  return (
    <>
      <div className="page-header">
        <h2>Quick Start Guide</h2>
        <p>Send your first payment on TempPay in under 5 minutes.</p>
      </div>
      <div className="content-area">
        <div className="callout callout-tip">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
          </div>
          <div className="callout-body">
            <strong>Before you start</strong>
            You'll need a wallet with PathUSD on the Tempo network and a small amount of native tokens for gas fees.
          </div>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-body">
              <h4>Open TempPay</h4>
              <p>Visit <code>https://tempay.xyz</code> in your browser. Make sure your wallet is set to the Tempo network.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-body">
              <h4>Connect Your Wallet</h4>
              <p>Click <strong>Connect Wallet</strong> and approve the connection. TempPay supports MetaMask, WalletConnect, and any EVM wallet.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-body">
              <h4>Choose Payment Type</h4>
              <p>Select <strong>Direct Payment</strong> to send PathUSD instantly, or <strong>Tracked Payment</strong> to create a structured payment that can be claimed later.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-body">
              <h4>Enter Payment Details</h4>
              <p>Fill in the receiver's wallet address, the PathUSD amount, and (for tracked payments) the scheduled claim time.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">05</div>
            <div className="step-body">
              <h4>Sign & Confirm</h4>
              <p>Review the transaction details and sign with your wallet. The payment is now on-chain and trackable.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">06</div>
            <div className="step-body">
              <h4>Receiver Claims (Tracked only)</h4>
              <p>For tracked payments  the receiver opens TempPay, connects their wallet, and claims the payment when the scheduled time arrives.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
