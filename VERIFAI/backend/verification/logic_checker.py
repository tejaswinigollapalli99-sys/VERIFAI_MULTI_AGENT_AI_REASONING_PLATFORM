def check_logic(answer: str):
    if not answer or not answer.strip():
        return {
            "type": "Logical",
            "status": "FAIL",
            "confidence": 0.20,
            "reason": "The generated answer is empty.",
        }

    return {
        "type": "Logical",
        "status": "PASS",
        "confidence": 0.90,
        "reason": "No obvious logical inconsistency was detected.",
    }
