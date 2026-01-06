import style from "../../styles/Events.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../../db/mockData";

export const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await getEvents();
      if (mounted) setEvents(data);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <ul className={style.events}>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`} className={style.box}>
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
        ))}
      </ul>
    </>
  );
};
