import { Link } from "react-router-dom";
import style from "../../styles/Event.module.css";
import { getEventList } from "../../db/fetches.js";
import { useEffect, useState } from "react";
const Event = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const result = await getEventList();
        if (!abortController.signal.aborted) {
          setEventData(result);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch event data:", error);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, []);
  return (
    <div className={style.pageWrapper}>
      <header>
        <Link className={style.backButton} to={"/"}>
          ← Back
        </Link>
        <Link className={style.title} to={"/"}>
          Eventify
        </Link>
      </header>
      <div className={style.container}>
        <div className={style.eventImageBox}>
          <img src="#" alt="" />
        </div>
        <div className={style.eventInfo}>
          <div className={style.eventInfoItem}>
            <div className={style.eventTitle}>American Tashkent Center</div>
            <div className={style.eventTime}>{eventData?.data[0].time}</div>
          </div>
          <div className={style.eventInfoItem2}>
            <div className={style.eventSubtitle}></div>
          </div>
        </div>
        <hr />
        <div className={style.eventDescBox}>
          <div className={style.eventDescTitle}>Description</div>
          <div className={style.eventDescText}>
            {eventData?.data[0]?.content || "Loading..."}
          </div>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Date</div>
          <span>{eventData?.data[0].date}</span>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Location</div>
          <span>{eventData?.data[0].date}</span>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Links</div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
