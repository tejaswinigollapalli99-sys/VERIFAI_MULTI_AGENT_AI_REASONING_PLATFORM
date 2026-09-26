import React from "react";
import { Clock3 } from "lucide-react";

function AuditTimeline({ audit = [] }) {
  return (
    <section className="panel">
      <div className="panel-title">
        <div className="title-with-icon">
          <Clock3 size={18} />
          <span>Decision Audit</span>
        </div>
      </div>

      <div className="timeline">
        {audit.map((event, index) => (
          <div className="timeline-row" key={index}>
            <div className="timeline-dot" />
            {index < audit.length - 1 && <div className="timeline-line" />}
            <div className="timeline-content">
              <strong>{event.agent}</strong>
              <span>{event.action}</span>
              <p>{event.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AuditTimeline;
