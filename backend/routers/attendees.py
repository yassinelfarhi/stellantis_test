from fastapi import APIRouter
from store import data

router = APIRouter(prefix="/attendees", tags=["Attendees"])

@router.get("")
def get_attendees():
    return data["attendees"]