import { useState, useEffect } from 'react';
import axios from "axios";
import EventCard from './components/EventCard.jsx';

function App() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);  // current page
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 3;

  const host = "http://localhost:8001"

  const loadEvents = async (pageToLoad) => {
    setLoading(true);
    try {
      const response = await axios.get(host + "/events", {
        params: { limit, offset: pageToLoad * limit },
      });

      const newEvents = response.data;

      setEvents((prev) => {
        const existingIds = new Set(prev.map(e => e.id));
        const filtered = newEvents.filter(e => !existingIds.has(e.id));
        return [...prev, ...filtered];
      });

      if (filtered.length < limit) setHasMore(false);

    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  // initial load
  useEffect(() => {
    loadEvents(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Events</h2>

      {loading && <p>Loading...</p>}

      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4 mb-4" key={`${event.id}-${index}`}>
            <EventCard event={event} />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        {hasMore && (
          <button
            className="btn btn-primary"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
        {!hasMore && <p className="text-muted mt-2">No more events</p>}
      </div>
    </div>
  );
}

export default App;