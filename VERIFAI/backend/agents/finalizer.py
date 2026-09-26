def finalize_answer(task: str, generated, verification, critique):
    answer = generated.get("output", "")

    if verification.get("recommendation") == "revise":
        revisions = critique.get("revisions", [])
        if revisions:
            answer += "\n\nVerification notes:\n"
            for revision in revisions:
                answer += f"- {revision}\n"

    return answer
