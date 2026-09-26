import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

function VerificationPanel({ verification }) {
  if (!verification) return null;

  return (
    <section className="panel">
      <div className="panel-title">
        <div className="title-with-icon">
          <ShieldCheck size={19} />
          <span>Verification</span>
        </div>
        <span className="verified-badge">✓ PASSED</span>
      </div>

      <div className="verification-list">
        {verification.checks?.map((check, index) => (
          <div className="verification-row" key={index}>
            <CheckCircle2 size={19} className="check-green" />
            <div>
              <strong>{check.type}</strong>
              <p>{check.reason}</p>
            </div>
            <span className="pass-label">{check.status.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerificationPanel;
