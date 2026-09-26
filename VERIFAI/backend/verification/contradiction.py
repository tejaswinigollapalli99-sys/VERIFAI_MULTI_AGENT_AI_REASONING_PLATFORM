def detect_contradictions(evidence: list):
    supporting = [item for item in evidence if item.get("supports") is True]
    opposing = [item for item in evidence if item.get("supports") is False]

    if supporting and opposing:
        return ["Conflicting evidence was detected."]

    return []
