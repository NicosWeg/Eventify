import style from "../../styles/Events.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [value, setValue] = useState(true);
  const userName = "Anonim";
  return (
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
        <span className={style.profileInTitle}>{userName || "Anonim"}</span>
        <Link to="/login">
          <button className={style.profileInBtn}>Chiqish</button>
        </Link>
      </div>
    </header>
  );
};
