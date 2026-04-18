import React from 'react';
import { ArrowRight } from "lucide-react";

export default function Disputes() {
  return (
    <>
      <div className="page-header">
        <h2>Dispute System</h2>
        <p>A structured resolution layer for tracked payment disagreements.</p>
      </div>
      <div className="content-area">
        <p>TempPay includes a built-in dispute system for tracked payments. If a sender decides to stop a payment  whether due to incomplete work, miscommunication, or a disagreement  the payment enters a formal review process.</p>
        <p>This adds a basic safety layer for freelance and service-based payment agreements.</p>

        <div className="spacer" />
        <h3>When is a Dispute Triggered?</h3>
        <p>A dispute is triggered when:</p>
        <div className="steps">
          <div className="step">
            <div className="step-num"><ArrowRight size={18} /></div>
            <div className="step-body">
              <h4>Sender Stops a Tracked Payment</h4>
              <p>The sender decides to halt a tracked payment before the receiver claims it. This moves the payment to <code>Stopped</code> status and opens a dispute case.</p>
            </div>
          </div>
        </div>

        <div className="spacer" />
        <h3>How to Submit a Dispute</h3>
        <p>After a payment is stopped, either party can submit evidence through the TempPay dispute form. The form collects:</p>
        <table className="doc-table">
          <thead><tr><th>Field</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Email Address</td><td>For communication about the case</td></tr>
            <tr><td>Issue Category</td><td>Type of problem (non-delivery, partial work, etc.)</td></tr>
            <tr><td>Issue Description</td><td>Detailed explanation of what happened</td></tr>
            <tr><td>Supporting Evidence</td><td>Images, screenshots, or documents proving your case</td></tr>
          </tbody>
        </table>

        <div className="callout callout-info">
          <div className="callout-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          </div>
          <div className="callout-body">
            <strong>Both parties can submit evidence</strong>
            The TempPay team reviews submissions from both sides before making a determination.
          </div>
        </div>
      </div>
    </>
  );
}
