import styles from "./index.module.scss";

const HamburgerMenu = ({ setReservation }) => {
  return (
    <div className={styles.HamburgerMenu}>
      <ul className={styles.navBar}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>About us</li>
        <li
          onClick={() => setReservation((prev) => !prev)}
          className={styles.item}
        >
          Prenota
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
