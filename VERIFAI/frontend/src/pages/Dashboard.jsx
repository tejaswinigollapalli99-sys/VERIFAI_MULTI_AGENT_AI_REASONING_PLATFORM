import React, { useState } from "react";
import {
  BrainCircuit,
  LayoutDashboard,
  ShieldCheck,
  Clock3,
  Sparkles,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

import TaskInput from "../components/TaskInput";
import AgentStatus from "../components/AgentStatus";
import EvidencePanel from "../components/EvidencePanel";
import VerificationPanel from "../components/VerificationPanel";
import ConfidenceScore from "../components/ConfidenceScore";
import ContradictionPanel from "../components/ContradictionPanel";
import AuditTimeline from "../components/AuditTimeline";

function Dashboard() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeTask = async () => {
    if (!task.trim()) {
      setError("Please enter a task first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to connect to the VERIFAI backend. Make sure FastAPI is running on port 8000.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">
            <BrainCircuit size={25} />
          </div>
          <div>
            <strong>VERIFAI</strong>
            <span>AI Verification Engine</span>
          </div>
        </div>

        <div className="nav-links">
          <span className="active-nav">
            <LayoutDashboard size={15} /> Dashboard
          </span>
          <span>
            <ShieldCheck size={15} /> Verification
          </span>
          <span>
            <Clock3 size={15} /> Audit
          </span>
        </div>

        <div className="backend-status">
          <i />
          Backend Connected
          <div className="avatar">V</div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-badge">
            <Sparkles size={14} />
            Multi-Agent AI Reasoning Platform
          </div>

          <h1>
            Trust AI. <span>Verify Everything.</span>
          </h1>

          <p>
            VERIFAI uses specialized AI agents, evidence retrieval, independent
            verification and audit trails to produce more reliable answers.
          </p>
        </section>

        <TaskInput
          task={task}
          setTask={setTask}
          onAnalyze={analyzeTask}
          loading={loading}
        />

        {error && <div className="error-box">{error}</div>}

        {result && (
          <div className="results">
            <AgentStatus agents={result.agents} />

            <div className="two-column">
              <section className="panel answer-panel">
                <div className="panel-title">
                  <div className="title-with-icon">
                    <Sparkles size={18} />
                    <span>Final Answer</span>
                  </div>
                  <span className="verified-badge">
                    <CheckCircle2 size={13} /> VERIFIED
                  </span>
                </div>

                <div className="answer-box">{result.final_answer}</div>
              </section>

              <VerificationPanel verification={result.verification} />
            </div>

            <div className="three-column">
              <ConfidenceScore confidence={result.confidence} />

              <EvidencePanel evidence={result.evidence} />

              <ContradictionPanel
                contradictions={result.verification?.contradictions || []}
                risks={result.verification?.risks || []}
              />
            </div>

            <div className="two-column">
              <section className="panel">
                <div className="panel-title">
                  <div className="title-with-icon revision-title">
                    <RotateCcw size={18} />
                    <span>Self-Correction / Revisions</span>
                  </div>
                </div>

                {result.revisions?.length ? (
                  result.revisions.map((revision, index) => (
                    <div className="revision-box" key={index}>
                      <RotateCcw size={16} />
                      {revision}
                    </div>
                  ))
                ) : (
                  <div className="revision-box success">
                    <CheckCircle2 size={16} />
                    No revisions needed. Answer is consistent and verified.
                  </div>
                )}
              </section>

              <AuditTimeline audit={result.audit} />
            </div>
          </div>
        )}
      </main>

      <footer>
        VERIFAI · Multi-Agent AI Reasoning & Verification Platform
      </footer>
    </div>
  );
}

export default Dashboard;
