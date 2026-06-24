from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine, Base
from app import models, crud

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Bank API Demo")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class AccountCreate(BaseModel):
    name: str
    balance: float

class TransferReq(BaseModel):
    from_id: int
    to_id: int
    amount: float

@app.post("/accounts")
def create_account(req: AccountCreate, db: Session = Depends(get_db)):
    acc = crud.create_account(db, req.name, req.balance)
    return {"id": acc.id, "name": acc.name, "balance": float(acc.balance)}

@app.get("/accounts/{account_id}")
def get_account(account_id: int, db: Session = Depends(get_db)):
    acc = crud.get_account(db, account_id)
    if not acc:
        raise HTTPException(status_code=404, detail="Account not found")
    return {"id": acc.id, "name": acc.name, "balance": float(acc.balance)}

@app.post("/transfer")
def transfer(req: TransferReq, db: Session = Depends(get_db)):
    try:
        crud.transfer(db, req.from_id, req.to_id, req.amount)
        return {"status":"ok"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
