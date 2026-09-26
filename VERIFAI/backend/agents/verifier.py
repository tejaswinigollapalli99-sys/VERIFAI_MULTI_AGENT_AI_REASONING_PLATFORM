from verification.fact_checker import check_facts
from verification.logic_checker import check_logic
from verification.code_checker import check_python_code
from verification.contradiction import detect_contradictions
from verification.risk_detector import detect_risks


def verify_answer(task: str, generated, research):
    answer = generated.get("output", "")
    evidence = research.get("evidence", [])

    fact = check_facts(answer, evidence)
    logic = check_logic(answer)
    code = check_python_code(answer)
    contradictions = detect_contradictions(evidence)
    risks = detect_risks(answer)

    checks = [
        {
            "type": "Fact Check",
            "status": "passed" if fact["status"] == "PASS" else "failed",
            "confidence": fact["confidence"],
            "reason": fact["reason"],
        },
        {
            "type": "Logic Check",
            "status": "passed" if logic["status"] == "PASS" else "failed",
            "confidence": logic["confidence"],
            "reason": logic["reason"],
        },
        {
            "type": "Code Check",
            "status": "passed" if code["status"] == "PASS" else "failed",
            "confidence": code["confidence"],
            "reason": code["reason"],
        },
        {
            "type": "Source Verification",
            "status": "passed" if evidence else "failed",
            "confidence": 0.95 if evidence else 0.20,
            "reason": "Supporting sources are available." if evidence else "No sources are available.",
        },
    ]

    failed = [c for c in checks if c["status"] == "failed"]

    if failed or contradictions or risks:
        status = "needs_review"
        recommendation = "revise"
        confidence = 0.60
    else:
        status = "verified"
        recommendation = "accepted"
        confidence = round(
            sum(c["confidence"] for c in checks) / len(checks), 2
        )

    return {
        "agent": "verifier",
        "status": "verified" if status == "verified" else "needs_revision",
        "output": "Answer verification completed.",
        "confidence": confidence,
        "checks": checks,
        "contradictions": contradictions,
        "unsupported_claims": [],
        "risks": risks,
        "recommendation": recommendation,
    }
