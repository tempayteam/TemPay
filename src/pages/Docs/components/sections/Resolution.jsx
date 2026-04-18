import React from 'react';
import { ArrowDown, ArrowDownRight } from "lucide-react";

export default function Resolution() {
  return (
    <>
      <div className="page-header">
        <h2>Resolution Process</h2>
        <p>How disputes are reviewed and settled by the TempPay team.</p>
      </div>
      <div className="content-area">
        <div className="flow" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
            <div className="flow-node highlight" style={{ minWidth: '170px' }}>Sender stops payment</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Payment moves to Stopped status</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 16px' }}><ArrowDown size={18} /></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
            <div className="flow-node" style={{ minWidth: '170px', borderColor: 'rgba(59,130,246,0.25)', color: '#60a5fa' }}>Dispute case opened</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Both parties notified</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 16px' }}><ArrowDown size={18} /></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
            <div className="flow-node" style={{ minWidth: '170px', borderColor: 'rgba(245,158,11,0.25)', color: 'var(--amber)' }}>Evidence submitted</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Both sides provide proof</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 16px' }}><ArrowDown size={18} /></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
            <div className="flow-node" style={{ minWidth: '170px', borderColor: 'rgba(139,92,246,0.25)', color: '#a78bfa' }}>Admin review</div>
            <span style={{ color: 'var(--text3)', fontSize: '12px' }}>TempPay team evaluates the case</span>
          </div>
          <div style={{ color: 'var(--text3)', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ArrowDown size={18} /> or <ArrowDownRight size={18} />
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="flow-node" style={{ minWidth: '150px', borderColor: 'rgba(34,197,94,0.25)', color: 'var(--green)' }}>Approved</div>
              <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Funds return to sender</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="flow-node" style={{ minWidth: '150px', borderColor: 'rgba(239,68,68,0.25)', color: '#f87171' }}>Rejected</div>
              <span style={{ color: 'var(--text3)', fontSize: '12px' }}>Funds released to receiver</span>
            </div>
          </div>
        </div>

        <div className="spacer" />
        <h3>Resolution Outcomes</h3>
        <table className="doc-table">
          <thead><tr><th>Decision</th><th>Outcome</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr>
              <td><span className="badge badge-live">Approved</span></td>
              <td>Funds returned to sender</td>
              <td>Dispute was valid  sender's claim upheld</td>
            </tr>
            <tr>
              <td><span className="badge badge-planned">Rejected</span></td>
              <td>Funds released to receiver</td>
              <td>Dispute was not valid  receiver's claim upheld</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout-warn">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <div className="callout-body">
            <strong>Admin review is currently manual</strong>
            The dispute resolution process currently uses admin review. Automated on-chain governance for disputes is planned for a future version.
          </div>
        </div>
      </div>
    </>
  );
}
