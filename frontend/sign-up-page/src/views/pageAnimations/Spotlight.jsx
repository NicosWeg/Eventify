import { useEffect, useRef } from "react";
import style from "../pageAnimations/styles/Spotlight.module.css";
function CursorLight() {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!lightRef.current) return;

      lightRef.current.style.top = e.clientY + 'px';
      lightRef.current.style.left = e.clientX + 'px';
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <div className={style.cursorLight} ref={lightRef}></div>;
}

export default CursorLight;
