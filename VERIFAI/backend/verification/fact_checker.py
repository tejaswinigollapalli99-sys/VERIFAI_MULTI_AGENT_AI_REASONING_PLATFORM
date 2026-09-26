def check_facts(answer: str, evidence: list):
    if not evidence:
        return {
            "type": "Factual",
            "status": "FAIL",
            "confidence": 0.20,
            "reason": "No evidence was retrieved.",
        }

    supporting = [item for item in evidence if item.get("supports") is True]

    if not supporting:
        return {
            "type": "Factual",
            "status": "FAIL",
            "confidence": 0.25,
            "reason": "No evidence supports the generated answer.",
        }

    confidence = sum(item["confidence"] for item in supporting) / len(supporting)

    return {
        "type": "Factual",
        "status": "PASS",
        "confidence": round(confidence, 2),
        "reason": "The answer has supporting evidence.",
    }
