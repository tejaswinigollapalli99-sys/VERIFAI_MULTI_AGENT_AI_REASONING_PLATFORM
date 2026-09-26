import React from "react";
import { Gauge } from "lucide-react";

function ConfidenceScore({ confidence = 0 }) {
  const percentage = Math.round(confidence * 100);

  return (
    <section className="panel">
      <div className="panel-title">
        <div className="title-with-icon">
          <Gauge size={18} />
          <span>Confidence Score</span>
        </div>
      </div>

      <div className="confidence-layout">
        <div
          className="confidence-ring"
          style={{
            background: `conic-gradient(#27e6a0 ${percentage}%, #16223b ${percentage}% 100%)`,
          }}
        >
          <div>
            <strong>{percentage}%</strong>
          </div>
        </div>

        <div>
          <h3>High Confidence</h3>
          <p>Based on multiple evidence and verification checks.</p>
        </div>
      </div>
    </section>
  );
}

export default ConfidenceScore;
