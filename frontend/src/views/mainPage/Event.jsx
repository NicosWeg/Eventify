import { Link, useParams } from "react-router-dom";
import style from "../../styles/Event.module.css";
import { useEffect, useState } from "react";
import { getEventById } from "../../db/mockData";

const Event = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const e = await getEventById(id);
      if (mounted) setEventData(e);
    })();
    return () => {
      mounted = false;
    };
  }, [id]);
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
            <div className={style.eventTitle}>
              {eventData?.title || "Event"}
            </div>
            <div className={style.eventTime}>{eventData?.time || ""}</div>
          </div>
          <div className={style.eventInfoItem2}>
            <div className={style.eventSubtitle}></div>
          </div>
        </div>
        <hr />
        <div className={style.eventDescBox}>
          <div className={style.eventDescTitle}>Description</div>
          <div className={style.eventDescText}>
            {eventData?.content || "Loading..."}
          </div>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Date</div>
          <span>{eventData?.date || ""}</span>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Location</div>
          <span>{eventData?.location || ""}</span>
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
