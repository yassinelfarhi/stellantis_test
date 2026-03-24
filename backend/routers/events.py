from fastapi import APIRouter
from store import data

router = APIRouter(prefix="/events", tags=["Events"])

@router.get("")
def get_events(limit: int = 3,offset: int = 0,location: str = None, type: str = None):
    global data

    events = data["events"]

    if location:
        events = [ event for event in events if event["location"] == location]

    start = offset
    end = offset + limit

    paginated_events = events[start:end]

        
    return paginated_events
