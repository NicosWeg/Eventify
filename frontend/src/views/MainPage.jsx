import style from "../styles/Events.module.css";
import { Header } from "./mainPage/Header";
import { SearchBar } from "./mainPage/SearchBar";
import { EventList } from "./mainPage/EventList";
import { Buttons } from "./mainPage/Helpers.jsx";

const MainPage = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <SearchBar />
        <EventList />
        <button className={style.seeMore}>See more</button>
        <Buttons />
      </div>
    </>
  );
};

export default MainPage;
