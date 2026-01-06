import style from "../../styles/Events.module.css";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const Buttons = () => {
  return (
    <button
      className={style.scrollToTop}
      aria-label="Scroll to top"
      onClick={scrollUp}
    ></button>
  );
};
