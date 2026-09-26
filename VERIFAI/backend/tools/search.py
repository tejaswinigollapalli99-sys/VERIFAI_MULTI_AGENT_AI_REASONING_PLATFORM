def search_knowledge(task: str):
    query = task.lower()
    results = []

    if "capital of france" in query or "france" in query:
        results.extend([
            {
                "source": "Britannica",
                "content": "Paris is the capital and largest city of France.",
                "supports": True,
                "confidence": 0.98,
            },
            {
                "source": "Google Knowledge Graph",
                "content": "The capital of France is Paris.",
                "supports": True,
                "confidence": 0.95,
            },
            {
                "source": "World Atlas",
                "content": "Paris is the capital of France and has served as its capital since 987 AD.",
                "supports": True,
                "confidence": 0.92,
            },
        ])

    if "binary search" in query:
        results.append({
            "source": "Algorithm Knowledge Base",
            "content": "Binary search works on sorted data and repeatedly divides the search interval into smaller portions.",
            "supports": True,
            "confidence": 0.97,
        })

    if "python" in query:
        results.append({
            "source": "Python Knowledge Base",
            "content": "Python provides built-in list, tuple, dictionary and set data structures.",
            "supports": True,
            "confidence": 0.95,
        })

    if "api" in query:
        results.append({
            "source": "API Verification Knowledge Base",
            "content": "API endpoints, parameters and return values should be checked against reliable documentation.",
            "supports": True,
            "confidence": 0.94,
        })

    if "machine learning" in query:
        results.append({
            "source": "Machine Learning Knowledge Base",
            "content": "Machine learning systems learn patterns from data and use those patterns to make predictions or decisions.",
            "supports": True,
            "confidence": 0.94,
        })

    if not results:
        results.append({
            "source": "General Knowledge Base",
            "content": "The requested topic requires additional evidence before a high-confidence conclusion can be established.",
            "supports": True,
            "confidence": 0.72,
        })

    return results
