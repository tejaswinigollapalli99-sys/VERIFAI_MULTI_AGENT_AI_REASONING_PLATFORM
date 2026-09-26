def detect_risks(answer: str):
    risks = []

    if not answer or not answer.strip():
        risks.append("Generated answer is empty.")

    risky_terms = [
        "password",
        "secret key",
        "private key",
        "malware",
        "exploit",
        "delete all data",
    ]

    answer_lower = answer.lower()

    for term in risky_terms:
        if term in answer_lower:
            risks.append(f"Potential risk detected: {term}")

    return risks
