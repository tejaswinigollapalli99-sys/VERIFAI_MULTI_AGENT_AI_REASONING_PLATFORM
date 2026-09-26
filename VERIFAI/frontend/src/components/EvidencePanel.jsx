import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";

function EvidencePanel({ evidence = [] }) {
  return (
    <section className="panel">
      <div className="panel-title">
        <div className="title-with-icon">
          <ShieldCheck size={18} />
          <span>Evidence</span>
        </div>
        <span className="source-count">{evidence.length} sources</span>
      </div>

      {evidence.length === 0 ? (
        <div className="empty-state">No evidence available.</div>
      ) : (
        evidence.map((item, index) => (
          <div className="evidence-item" key={index}>
            <div className="evidence-logo">{item.source.charAt(0)}</div>
            <div className="evidence-main">
              <div className="evidence-top">
                <strong>{item.source}</strong>
                <span className="evidence-score">
                  ✓ {Math.round(item.confidence * 100)}%
                </span>
              </div>
              <p>{item.content}</p>
              <span className="evidence-link">
                Source verified <ExternalLink size={11} />
              </span>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default EvidencePanel;
