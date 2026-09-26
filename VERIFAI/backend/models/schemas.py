from typing import List
from pydantic import BaseModel, Field


class TaskRequest(BaseModel):
    task: str = Field(..., min_length=1, max_length=10000)


class Evidence(BaseModel):
    source: str
    content: str
    supports: bool
    confidence: float


class AgentResult(BaseModel):
    agent: str
    status: str
    output: str
    confidence: float


class VerificationCheck(BaseModel):
    type: str
    status: str
    confidence: float
    reason: str


class VerificationResult(BaseModel):
    status: str
    confidence: float
    checks: List[VerificationCheck]
    contradictions: List[str]
    unsupported_claims: List[str]
    risks: List[str]
    recommendation: str


class AuditEvent(BaseModel):
    agent: str
    action: str
    status: str
    message: str


class TaskResponse(BaseModel):
    task_id: str
    task: str
    final_answer: str
    decision: str
    confidence: float
    agents: List[AgentResult]
    evidence: List[Evidence]
    verification: VerificationResult
    revisions: List[str]
    audit: List[AuditEvent]
