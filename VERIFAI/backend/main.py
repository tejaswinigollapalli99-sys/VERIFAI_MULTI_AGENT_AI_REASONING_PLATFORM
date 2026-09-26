from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.schemas import TaskRequest, TaskResponse
from orchestration.workflow import execute_workflow

app = FastAPI(
    title="VERIFAI",
    description="Multi-Agent AI Reasoning and Verification Platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"name": "VERIFAI", "status": "online"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/api/analyze", response_model=TaskResponse)
def analyze(request: TaskRequest):
    return execute_workflow(request.task)
