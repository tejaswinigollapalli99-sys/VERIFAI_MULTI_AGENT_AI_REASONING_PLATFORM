import React from "react";
import {
  Brain,
  Search,
  Settings2,
  CircleCheck,
  TriangleAlert,
  Target,
  ArrowRight,
} from "lucide-react";

const defaultAgents = [
  ["planner", "Planner", Brain],
  ["researcher", "Researcher", Search],
  ["generator", "Generator", Settings2],
  ["verifier", "Verifier", CircleCheck],
  ["critic", "Critic", TriangleAlert],
  ["finalizer", "Finalizer", Target],
];

function AgentStatus({ agents = [] }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WORKFLOW</span>
          <h2>Agent Pipeline</h2>
        </div>
        <span className="pipeline-status">● All agents completed</span>
      </div>

      <div className="agent-grid">
        {defaultAgents.map(([key, name, Icon], index) => {
          const result = agents.find(
            (a) => a.agent?.toLowerCase() === key.toLowerCase(),
          );

          return (
            <div className="agent-wrap" key={key}>
              <div className="agent-card">
                <div className={`agent-icon agent-${index}`}>
                  <Icon size={22} />
                </div>
                <strong>{name}</strong>
                <span className="agent-completed">
                  <i /> {result ? "Completed" : "Ready"}
                </span>
                <small>{result ? "Verification step" : "Waiting"}</small>
              </div>
              {index < defaultAgents.length - 1 && (
                <ArrowRight className="agent-arrow" size={18} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AgentStatus;
