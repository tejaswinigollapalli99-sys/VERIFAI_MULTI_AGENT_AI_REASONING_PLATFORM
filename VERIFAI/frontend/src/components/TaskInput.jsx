import React from "react";
import { Send } from "lucide-react";

function TaskInput({ task, setTask, onAnalyze, loading }) {
  return (
    <section className="task-section">
      <div className="task-card">
        <label className="task-label">What should VERIFAI analyze?</label>
        <div className="task-row">
          <textarea
            className="task-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a question, claim, code problem, API usage, or reasoning task..."
          />
          <button
            className="analyze-button"
            onClick={onAnalyze}
            disabled={loading}
          >
            <Send size={17} />
            {loading ? "Analyzing..." : "Verify Task"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TaskInput;
