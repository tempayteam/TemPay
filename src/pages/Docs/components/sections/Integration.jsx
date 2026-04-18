import React from 'react';
import { ArrowRight, Check } from "lucide-react";

export default function Integration() {
  return (
    <>
      <div className="page-header">
        <h2>Integration Guide</h2>
        <p>Add TempPay as a PathUSD payment gateway to your product.</p>
      </div>
      <div className="content-area">
        <div className="callout callout-tip">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div className="callout-body">
            <strong>Developer tools are under active development</strong>
            TempPay is building SDKs and APIs so developers can integrate structured PathUSD payments into any product. Hover over the cards below to see what's coming.
          </div>
        </div>

        <h3>Architecture</h3>
        <div className="arch-diagram">
          <div className="arch-box app">Your dApp</div>
          <div className="arch-arrow"><ArrowRight size={18} /></div>
          <div className="arch-box sdk">TempPay SDK</div>
          <div className="arch-arrow"><ArrowRight size={18} /></div>
          <div className="arch-box contract">Smart Contracts</div>
          <div className="arch-arrow"><ArrowRight size={18} /></div>
          <div className="arch-box chain">Tempo Chain</div>
        </div>

        <div className="spacer" />
        <h3>Planned Integrations</h3>
        <div className="integration-grid">
          <div className="integration-card">
            <div className="int-icon ci-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.31 8s-1.96-2-4.67-2C6.42 6 4 8.42 4 11.07c0 2.83 2.5 5.73 7.98 10.93C17.5 16.8 20 13.9 20 11.07 20 9.14 18.86 8 17.14 8c-1.58 0-2.83 1-2.83 1"/></svg>
            </div>
            <h4>React / Next.js SDK</h4>
            <p>Frontend hooks and components for embedding TempPay payment flows.</p>
          </div>
          <div className="integration-card">
            <div className="int-icon ci-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
            </div>
            <h4>Node.js Backend SDK</h4>
            <p>Server-side library for creating and managing payments via REST API.</p>
          </div>
          <div className="integration-card">
            <div className="int-icon ci-purple">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h4>Webhook Events</h4>
            <p>Real-time notifications when payments are created, claimed, or disputed.</p>
          </div>
          <div className="integration-card">
            <div className="int-icon ci-amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            </div>
            <h4>Merchant Checkout</h4>
            <p>Drop-in PathUSD checkout widget for any website.</p>
          </div>
          <div className="integration-card">
            <div className="int-icon ci-orange">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
            </div>
            <h4>Developer REST API</h4>
            <p>Query, create, and manage payments programmatically.</p>
          </div>
          <div className="integration-card">
            <div className="int-icon" style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h4>Dashboard Analytics</h4>
            <p>Payment analytics, transaction history, and reporting tools.</p>
          </div>
        </div>

        <div className="spacer" />
        <h3>Direct Contract Access (Available Now)</h3>
        <p>While SDKs are being built, developers can interact with TempPay smart contracts directly on the Tempo network using ethers.js, wagmi, or any EVM-compatible library.</p>

        <div className="feature-highlight">
          <div className="feature-item">
            <div className="feature-icon"><Check size={16} /></div>
            <div className="feature-text">
              <h5>Tempo Network RPC</h5>
              <p>rpc.tempo.xyz · Chain ID: 4217</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Check size={16} /></div>
            <div className="feature-text">
              <h5>PathUSD Token</h5>
              <p>ERC-20 compatible, 6 decimals</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Check size={16} /></div>
            <div className="feature-text">
              <h5>Wallet Support</h5>
              <p>MetaMask, WalletConnect, any EVM</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Check size={16} /></div>
            <div className="feature-text">
              <h5>Smart Contracts</h5>
              <p>Deployed and operational</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
