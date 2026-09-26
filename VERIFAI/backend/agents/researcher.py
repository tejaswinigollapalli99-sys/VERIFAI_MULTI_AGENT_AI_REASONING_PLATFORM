from tools.search import search_knowledge


def research_task(task: str, plan):
    evidence = search_knowledge(task)
    return {
        "agent": "researcher",
        "status": "completed",
        "output": f"Retrieved {len(evidence)} evidence item(s).",
        "confidence": 0.89,
        "evidence": evidence,
    }


def run_researcher(task: str):
    return research_task(task, None)
