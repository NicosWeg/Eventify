import style from "../../styles/Events.module.css";
import { getEventList } from "../../db/fetches";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const EventList = () => {
  const [events, setEvents] = useState([]);



  useEffect(() => {
    const abortController = new AbortController();

    const fetchEvents = async () => {
      try {
        const result = await getEventList();
        if (!abortController.signal.aborted && result.success && result.data) {
          setEvents(result.data);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch events:", error);
        }
      }
    };

    fetchEvents();

    return () => abortController.abort();
  }, []);
  return (
    <>
      <ul className={style.events}>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <Link to={"/event"} className={style.box}>
                <div className={style.eventImage}></div>
                <div className={style.eventDesc}>
                  <div className={style.eventTitleBox}>
                    <span className={style.eventTitle}>{event.title}</span>
                    <div className={style.eventSubTitle}>{event.location}</div>
                  </div>
                  <div className={style.eventTime}>{event.time}</div>
                  <button className={style.eventRegister}>Register</button>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li>No events available</li>
        )}
      </ul>
    </>
  );
};
