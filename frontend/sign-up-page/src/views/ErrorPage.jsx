import { Link } from "react-router-dom";
import style from "../styles/ErrorPage.module.css";
import ghost from "../assets/error.svg";

const NotFoundPage = () => {
  return (
    <div className={style.pageWrapper}>
      <div className={style.container}>
        <div className={style.errorBox}>
          {/* Added specific class for the animation */}
          <img src={ghost} alt="ghost" className={style.ghostImage} />
          <p className={style.errorSubText}>Oops!!! Page not found</p>
        </div>
        
        <Link to="/">
          <button className={style.backBtn}>Go back home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;