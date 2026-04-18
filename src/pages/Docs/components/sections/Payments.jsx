import React from 'react';
import { Zap, ArrowRight } from "lucide-react";

export default function Payments() {
  return (
    <>
      <div className="page-header">
        <h2>Payment Types</h2>
        <p>TempPay supports two distinct payment modes  choose based on your use case.</p>
      </div>
      <div className="content-area">
        <div className="card" style={{ marginBottom: '16px', borderColor: 'rgba(255,107,0,0.2)' }}>
          <div className="card-icon ci-orange"><Zap size={16} /></div>
          <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Direct Payment</h4>
          <p style={{ marginBottom: '12px' }}>Send PathUSD instantly to any wallet address on Tempo. No conditions, no locks  funds arrive immediately.</p>
          <div className="flow">
            <div className="flow-node highlight">Sender</div>
            <div className="flow-arrow"><ArrowRight size={14} /></div>
            <div className="flow-node">TempPay Contract</div>
            <div className="flow-arrow"><ArrowRight size={14} /></div>
            <div className="flow-node highlight">Receiver</div>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '6px' }}>Best for: one-time payments, immediate settlements, simple transfers</p>
        </div>

        <div className="card" style={{ borderColor: 'rgba(59,130,246,0.2)' }}>
          <div className="card-icon ci-blue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
          </div>
          <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>Tracked Payment</h4>
          <p style={{ marginBottom: '12px' }}>Funds are locked in the smart contract until the receiver claims them at the scheduled time. Both parties can see the payment status on-chain.</p>
          <div className="flow">
            <div className="flow-node">Sender locks PathUSD</div>
            <div className="flow-arrow"><ArrowRight size={14} /></div>
            <div className="flow-node highlight">Locked in Contract</div>
            <div className="flow-arrow"><ArrowRight size={14} /></div>
            <div className="flow-node">Receiver claims</div>
          </div>
          <table className="doc-table" style={{ marginTop: '12px' }}>
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><span className="badge badge-live">Active</span></td><td>Payment is locked and awaiting claim</td></tr>
              <tr><td><span className="badge badge-soon">Stopped</span></td><td>Sender paused  enters dispute review</td></tr>
              <tr><td><span className="badge badge-live">Claimed</span></td><td>Receiver successfully claimed funds</td></tr>
              <tr><td><span className="badge badge-planned">Disputed</span></td><td>Under admin review</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '6px' }}>Best for: freelance milestones, salaries, service agreements, scheduled payouts</p>
        </div>
      </div>
    </>
  );
}
