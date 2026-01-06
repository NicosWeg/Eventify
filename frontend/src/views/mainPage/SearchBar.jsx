import style from "../../styles/Events.module.css";

export const SearchBar = () => {
  return (
    <>
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
    </>
  );
};
