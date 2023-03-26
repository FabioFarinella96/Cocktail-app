import styles from "./index.module.scss";

const Reservation = ({
  inputValues,
  setInputValues,
  setPopUpVisibility,
  setReservation,
}) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setPopUpVisibility(true);
    setReservation(false);

    setTimeout(() => {
      setPopUpVisibility(false);
    }, 2000);
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.content}>
        <h2 className={styles.formTitle}>Prenota un tavolo</h2>

        {/* form */}
        <form onSubmit={onHandleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="text">
            Inserisci il tuo nome:
          </label>
          <input
            value={inputValues.textValue}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                textValue: e.target.value,
              }))
            }
            name="text"
            type="text"
            className={styles.input}
          />
          <label className={styles.label} htmlFor="data">
            Inserisci una data:
          </label>
          <input
            value={inputValues.dateValue}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                dateValue: e.target.value,
              }))
            }
            name="data"
            type="date"
            className={styles.input}
          />
          <label className={styles.label} htmlFor="data">
            Scegli un orario:
          </label>
          <input
            value={inputValues.timeValue}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                hourValue: e.target.value,
              }))
            }
            type="time"
            className={styles.input}
          />
          <input type="submit" className={styles.submit} value="Prenota ora" />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
