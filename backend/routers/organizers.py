from fastapi import APIRouter
from store import data

router = APIRouter(prefix="/organizers", tags=["Organizers"])

@router.get("")
def get_organizers():
    return data["organizers"]