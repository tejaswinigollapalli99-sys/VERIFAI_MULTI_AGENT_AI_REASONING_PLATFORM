def plan_task(task: str):
    return {
        "agent": "planner",
        "status": "completed",
        "output": f"Task planned: {task}",
        "confidence": 0.90,
    }
