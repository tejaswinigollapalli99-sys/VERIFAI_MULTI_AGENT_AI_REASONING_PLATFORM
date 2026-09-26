def critique_answer(task: str, generated, verification):
    revisions = []

    if verification.get("recommendation") == "revise":
        revisions.append(
            "The answer requires revision based on verification results."
        )

    if verification.get("contradictions"):
        revisions.append(
            "Conflicting evidence was detected and should be reviewed."
        )

    if verification.get("unsupported_claims"):
        revisions.append(
            "Some claims require additional supporting evidence."
        )

    if not revisions:
        message = "No critical issues detected."
    else:
        message = " ".join(revisions)

    return {
        "agent": "critic",
        "status": "completed",
        "output": message,
        "confidence": 0.88,
        "revisions": revisions,
    }
