import styles from "./Languages.module.sass";

const Languages = () => {
  return (
    <ul className={styles.languages}>
      <li className={styles.acitve}>Ru</li>
      <li>En</li>
      <li>Ge</li>
    </ul>
  );
};

export default Languages;