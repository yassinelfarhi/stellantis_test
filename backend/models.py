class Event:
    id: int
    title: str
    description: str
    date: datetime
    location: str
    capacity: int
    attendeesCount: int
    organizerId: int

class Organizer:
    id: int
    name: str

class Attendee:
    id: int
    eventId: int
    createdAt: datetime