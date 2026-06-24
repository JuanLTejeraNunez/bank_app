from sqlalchemy.orm import Session
from app import models
from decimal import Decimal

def create_account(db: Session, name: str, balance: float):
    acc = models.Account(name=name, balance=Decimal(balance))
    db.add(acc)
    db.commit()
    db.refresh(acc)
    return acc

def get_account(db: Session, account_id: int):
    return db.query(models.Account).filter(models.Account.id==account_id).first()

def transfer(db: Session, from_id: int, to_id: int, amount: float):
    from_acc = get_account(db, from_id)
    to_acc = get_account(db, to_id)
    if not from_acc or not to_acc:
        raise ValueError("Account not found")
    amt = Decimal(amount)
    if from_acc.balance < amt:
        raise ValueError("Insufficient funds")
    from_acc.balance -= amt
    to_acc.balance += amt
    db.commit()
    return True
