from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from store import data
from routers import events, organizers, attendees

app = FastAPI(title="Stellantis Fulstack DEV TEST")

# for dev only
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(events.router)
app.include_router(organizers.router)
app.include_router(attendees.router)

