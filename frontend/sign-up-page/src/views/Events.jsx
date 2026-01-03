import { Link } from "react-router-dom";
import style from "../styles/Events.module.css";
import { useState } from "react";
import image from "../assets/event_poster.jpg";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const directLink = (link) => {
  // navigate to the link
}

const Events = () => {
  const [value, setValue] = useState(true);
  return (
    <>
      <header>
        <div className={style.title}>Eventify</div>
        <span
          className={style.profile}
          onClick={() => {
            setValue((prev) => !prev);
          }}
        ></span>
        <div
          className={style.profileIn}
          style={{ visibility: value ? "hidden" : "visible" }}
        >
          <span className={style.profileInTitle}>Username</span>
          <Link to="/login">
            <button className={style.profileInBtn}>Chiqish</button>
          </Link>
        </div>
      </header>
      <div className={style.container}>
        <input type="search" className={style.search} placeholder="Search" />
        <ul className={style.sections}>
          <li>
            <button className={style.sectionsBtn}>Today</button>
          </li>
          <li>
            <button className={style.sectionsBtn}>This week</button>
          </li>
          <li>
            <button className={style.sectionsBtn}>Last week</button>
          </li>
        </ul>
        <ul className={style.events}>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}></div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
                <button className={style.eventRegister} onClick={directLink}>Register</button>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}></div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}>
                <img src={image} alt="" width={200} height={200}/>
              </div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}></div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}></div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/event"} className={style.box}>
              <div className={style.eventImage}></div>
              <div className={style.eventDesc}>
                <div className={style.eventTitleBox}>
                  <span className={style.eventTitle}>Speaking Club</span>
                  <div className={style.eventSubTitle}>ACT Tashkent</div>
                </div>
                <div className={style.eventTime}>15:00</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <button className={style.scrollToTop} aria-label="Scroll to top" onClick={scrollUp}></button>
    </>
  );
};

export default Events;
