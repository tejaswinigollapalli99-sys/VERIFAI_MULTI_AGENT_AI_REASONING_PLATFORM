import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

function ContradictionPanel({ contradictions = [], risks = [] }) {
  const issues = [...contradictions, ...risks];

  return (
    <section className="panel">
      <div className="panel-title">
        <div className="title-with-icon warning-title">
          <AlertTriangle size={18} />
          <span>Contradictions & Risks</span>
        </div>
      </div>

      {issues.length === 0 ? (
        <div className="no-issues">
          <CheckCircle2 size={19} />
          <div>
            <strong>No contradictions or risks detected.</strong>
            <p>
              The answer passed the available safety and consistency checks.
            </p>
          </div>
        </div>
      ) : (
        issues.map((item, index) => (
          <div className="warning" key={index}>
            <AlertTriangle size={17} />
            {item}
          </div>
        ))
      )}
    </section>
  );
}

export default ContradictionPanel;
