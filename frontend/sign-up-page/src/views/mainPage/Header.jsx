import style from "../../styles/Events.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserName } from "../../db/fetches";

export const Header = () => {
  const [userName, setUserName] = useState(null);
  const [value, setValue] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchName = async () => {
      try {
        const response = await getUserName();
        if (!abortController.signal.aborted) {
          const data = await response.json();
          setUserName(data.user_name);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch user name:", error);
        }
      }
    };

    fetchName();

    return () => abortController.abort();
  }, []);
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
