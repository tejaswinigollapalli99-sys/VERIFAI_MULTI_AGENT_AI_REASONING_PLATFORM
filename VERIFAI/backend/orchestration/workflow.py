import uuid

from agents.planner import plan_task
from agents.researcher import research_task
from agents.generator import generate_answer
from agents.verifier import verify_answer
from agents.critic import critique_answer
from agents.finalizer import finalize_answer


def execute_workflow(task: str):
    plan = plan_task(task)
    research = research_task(task, plan)
    generated = generate_answer(task, research)
    verification = verify_answer(task, generated, research)
    critique = critique_answer(task, generated, verification)
    final = finalize_answer(task, generated, verification, critique)

    return {
        "task_id": f"verifai-{uuid.uuid4().hex[:8]}",
        "task": task,
        "final_answer": final,
        "decision": verification["recommendation"],
        "confidence": verification["confidence"],
        "agents": [
            plan,
            research,
            generated,
            verification,
            critique,
        ],
        "evidence": research.get("evidence", []),
        "verification": verification,
        "revisions": critique.get("revisions", []),
        "audit": [
            {
                "agent": "planner",
                "action": "Task planning",
                "status": "completed",
                "message": "Created task plan.",
            },
            {
                "agent": "researcher",
                "action": "Evidence gathering",
                "status": "completed",
                "message": "Gathered evidence from available sources.",
            },
            {
                "agent": "generator",
                "action": "Answer generation",
                "status": "completed",
                "message": "Drafted initial answer.",
            },
            {
                "agent": "verifier",
                "action": "Verification",
                "status": "completed",
                "message": "Checked facts, logic and source support.",
            },
            {
                "agent": "critic",
                "action": "Critical review",
                "status": "completed",
                "message": "Reviewed contradictions and risks.",
            },
            {
                "agent": "finalizer",
                "action": "Final response",
                "status": "completed",
                "message": "Produced final verified answer.",
            },
        ],
    }
