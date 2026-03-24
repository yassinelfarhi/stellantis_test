export default function EventCard({ event }) {
  return (
    <div className="card event-card h-100 shadow-sm">
      
      <img
        src={event.imageLink || "https://via.placeholder.com/300"}
        className="card-img-top event-img"
        alt={event.title}
      />

      <div className="card-body d-flex flex-column">
        
        <h5 className="card-title">{event.title}</h5>

        <p className="card-text text-muted mb-1">
          📍 {event.location}
        </p>

        <p className="card-text text-muted mb-1">
          🗓 {new Date(event.date).toLocaleString()}
        </p>

        <p className="card-text mb-3">
          👥 {event.attendeesCount} / {event.capacity}
        </p>

        <div className="progress mb-3" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            style={{
              width: `${(event.attendeesCount / event.capacity) * 100}%`,
            }}
          />
        </div>

        <button className="btn btn-primary mt-auto w-100">
          View Details
        </button>
      </div>
    </div>
  );
}