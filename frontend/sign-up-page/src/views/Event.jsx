import { Link } from "react-router-dom";
import style from '../styles/Event.module.css';
import image from '../assets/event_poster.jpg';

const Event = () => {
  
  return (
    <div className={style.pageWrapper}>
      <header>
        <Link className={style.backButton} to={"/"}>← Back</Link>
        <Link className={style.title} to={"/"}>Eventify</Link>
      </header>
      <div className={style.container}>
        <div className={style.eventImageBox}>
          <img src="#" alt=""/>
        </div>
        <div className={style.eventInfo}>
          <div className={style.eventInfoItem}>
            <div className={style.eventTitle}>Speaking Club</div>
            <div className={style.eventTime}>15:00</div>
          </div>
          <div className={style.eventInfoItem2}>
            <div className={style.eventSubtitle}>ACT Tashkent</div>
          </div>
        </div>
        <hr />
        <div className={style.eventDescBox}>
          <div className={style.eventDescTitle}>Description</div>
          <div className={style.eventDescText}>
          Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. Some random text about the event. 
          </div>
        </div>
        <div className={style.linkBox}>
          <div className={style.linkTitle}>Links</div>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
        </div>
      </div>
    </div>
  )
}

export default Event;