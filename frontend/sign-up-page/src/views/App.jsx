import style from "../styles/App.module.css";
import signInWithGoogle from "../db/googleSign.js";
import { useNavigate } from "react-router-dom";
import g from "../assets/g.svg";
import p from "../assets/p.svg";
import CursorLight from '../views/pageAnimations/Spotlight.jsx';
function App() {
  const navigate = useNavigate();

  return (
    <div className={style.loginPageWrapper}>
      <CursorLight />
      <div className={style.container}>
        <h1 className={style.title}>Eventify</h1>
        <p className={style.subTitle}>Endi hamma tadbirlar bir joyda</p>

        <button
          className={style.googleBtn}
          onClick={async () => {
            const res = await signInWithGoogle();
            navigate(res.ok ? "/events" : "/login");
          }}
        >
          <div className={style.googleBtnIn}>
            <img src={g} alt="" width={18} />
            <span>Continue with Google</span>
          </div>
        </button>

        <div className={style.footer}>
          <hr />
          <span>yoki</span>
          <hr />
        </div>

        <button className={style.anonimBtn}>
          <div className={style.anonimBtnIn}>
            <img src={p} alt="person" width={18} />
            <span>Anonim bo'lib kirish</span>
          </div>
        </button>

        <div className={style.docInfo}>
          <p className={style.docInfoText}>
            Davom etish orqali siz bizning <a href="#">Xizmat shartlari</a> va{" "}
            <a href="#">Maxfiy siyosati</a> bilan rozisiz
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
