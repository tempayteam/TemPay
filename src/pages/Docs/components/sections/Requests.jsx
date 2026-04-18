export default function Requests() {
  return (
    <>
      <div className="page-header">
        <h2>Payment Requests</h2>
        <p>Ask another wallet to send you PathUSD through a structured, trackable request.</p>
      </div>
      <div className="content-area">
        <p>The payment request system lets any user send a formal PathUSD payment request to another wallet address. It's similar to sending an invoice  the other party can see the requested amount and pay through TempPay.</p>

        <h3>Use Cases</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-orange">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
            </div>
            <h4>Freelance Payments</h4>
            <p>Request payment for delivered work. Include a description so the client knows what the payment is for.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <h4>Team Reimbursements</h4>
            <p>Request reimbursement from your team or DAO for expenses you've covered.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
            </div>
            <h4>Service Payments</h4>
            <p>Request payment for any service you've provided. Trackable and professional.</p>
          </div>
        </div>

        <div className="spacer" />
        <h3>How to Send a Request</h3>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-body">
              <h4>Go to Payment Requests</h4>
              <p>Open TempPay and navigate to the <strong>Request</strong> section from the main menu.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-body">
              <h4>Enter the Payer's Wallet</h4>
              <p>Type or paste the wallet address of the person you want to request payment from.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-body">
              <h4>Specify Amount & Description</h4>
              <p>Enter the PathUSD amount and optionally add a note describing the payment purpose.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-body">
              <h4>Send the Request</h4>
              <p>Confirm and sign with your wallet. The payer will see the request in their TempPay dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
