import styles from "./index.module.scss";

const Header = ({ modalVisibility, setModalVisibility, setReservation }) => {
  const onHandleClick = () => {
    setModalVisibility((prev) => !prev);
    setReservation(false);
  };

  return (
    <div className={styles.Header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo image" />
      <div
        onClick={onHandleClick}
        className={`${styles.burger} ${modalVisibility && styles.burger__open}`}
      >
        {/* animazione hamburger menu aggiunta oggi 27/03/23 */}
        <div className={styles.center}>
          <div></div>
        </div>
      </div>
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
