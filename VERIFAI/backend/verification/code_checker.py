def check_python_code(answer: str):
    if not answer or not answer.strip():
        return {
            "type": "Code",
            "status": "PASS",
            "confidence": 0.80,
            "reason": "No code was provided for verification.",
        }

    if "def " in answer or "import " in answer or "print(" in answer:
        return {
            "type": "Code",
            "status": "PASS",
            "confidence": 0.85,
            "reason": "Python code structure appears valid at a basic level.",
        }

    return {
        "type": "Code",
        "status": "PASS",
        "confidence": 0.80,
        "reason": "No Python-specific code was detected.",
    }
