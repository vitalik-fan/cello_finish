import styles from "./MainSection.module.sass";
import bg from "./../../public/assets/img/bgMain.png";
import ArrowDown from "../../components/ArrowDown/ArrowDown";

const MainSection = () => {
  return (
    <div className={styles.MainSection} style={{ backgroundImage: bg.src }}>
      <img className={styles.backgroundImg} src={bg.src} alt="bg" />
      <div className={styles.content}>
        <h1>Cellist Ivan Skanavi</h1>
        <span>Concerts / Performances</span>
      </div>
      <div className={styles.connect}>Связаться с менеджером</div>
      <ArrowDown />
    </div>
  );
};

export default MainSection;
