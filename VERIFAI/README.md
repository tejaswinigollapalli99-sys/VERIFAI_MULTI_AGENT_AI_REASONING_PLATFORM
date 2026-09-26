# VERIFAI

VERIFAI is a prototype multi-agent AI reasoning and verification platform.

## Project structure

- `frontend/` — React + Vite dashboard
- `backend/` — FastAPI multi-agent verification backend

## Run backend

Open Terminal 1:

```powershell
cd C:\Users\tejas\Desktop\VERITAS\backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend:
- http://127.0.0.1:8000
- http://127.0.0.1:8000/docs

## Run frontend

Open Terminal 2:

```powershell
cd C:\Users\tejas\Desktop\VERITAS\frontend
npm install
npm run dev
```

Frontend:
- http://localhost:5173

## Test

Enter:

`What is the capital of France?`

or:

`explain binary search in java`

Click **Verify Task**.

The frontend calls:

`POST http://127.0.0.1:8000/api/analyze`

and renders the returned:
- final answer
- agent pipeline
- verification checks
- confidence
- evidence
- contradictions and risks
- revisions
- audit timeline

## Note

The included evidence module is a local prototype knowledge base. It is designed so that live search, Groq/LLM calls, databases, or other tools can be integrated later.
