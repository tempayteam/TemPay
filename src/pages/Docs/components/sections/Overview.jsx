import React from 'react';
import { Check, X } from 'lucide-react';

export default function Overview() {
  return (
    <>
      <div className="page-header">
        <h2>What is TempPay?</h2>
        <p>A structured crypto payment gateway built for real-world payment workflows.</p>
      </div>
      <div className="content-area">
        <p>Most crypto payments are simple wallet-to-wallet transfers. Once sent, there is no structure, no tracking, and no recourse if something goes wrong.</p>
        <p>TempPay adds a layer of structure on top of PathUSD transfers on the Tempo network. Instead of just moving tokens, TempPay lets you schedule payments, track their status, pause them if needed, and resolve disputes through a formal process.</p>

        <div className="spacer" />
        <h3>Who is TempPay for?</h3>

        <div className="card-grid">
          <div className="card">
            <div className="card-icon ci-purple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <h4>Freelancers</h4>
            <p>Get paid in PathUSD with trackable payment agreements. Create payment requests and claim on delivery.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <h4>Remote Teams</h4>
            <p>Pay salaries and team members on a schedule. Transparent, on-chain, auditable.</p>
          </div>
          <div className="card">
            <div className="card-icon ci-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            </div>
            <h4>Web3 Developers</h4>
            <p>Integrate TempPay as a merchant payment gateway  structured checkout flows for your dApp.</p>
          </div>
        </div>

        <div className="spacer" />
        <h3>How it compares</h3>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Regular Wallet Transfer</th>
              <th>TempPay</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Instant send</td><td><Check size={18} color="var(--green)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>Scheduled / tracked payments</td><td><X size={18} color="var(--red)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>Pause or stop a payment</td><td><X size={18} color="var(--red)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>Dispute resolution</td><td><X size={18} color="var(--red)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>Payment requests</td><td><X size={18} color="var(--red)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>Non-custodial</td><td><Check size={18} color="var(--green)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
            <tr><td>On-chain auditability</td><td><Check size={18} color="var(--green)" /></td><td><Check size={18} color="var(--green)" /></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
