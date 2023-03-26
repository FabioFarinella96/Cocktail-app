import styles from "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setModalVisibility, setReservation }) => {
  const onHandleClick = () => {
    setModalVisibility((prev) => !prev);
    setReservation(false);
  };

  return (
    <div className={styles.Header}>
      <div onClick={onHandleClick} className={styles.hamburgerMenu}>
        <RxHamburgerMenu className={styles.hamburgerMenu} />
      </div>

      <img className={styles.logo} src="/images/logo.png" alt="logo image" />
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

export default Header;
