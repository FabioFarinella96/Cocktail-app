import styles from "./index.module.scss";
import { dateSplitted } from "../../utils/funcs";

const PopUp = ({ inputValues }) => {
  return (
    <div className={styles.PopUp}>
      <div className={styles.content}>
        <h2 className={styles.title}>Grazie {inputValues.textValue}!</h2>
        <p className={styles.text}>
          Hai prenotato per giorno{" "}
          <span>
            <b>{dateSplitted(inputValues.dateValue)}</b>
          </span>{" "}
          alle ore{" "}
          <span>
            <b>{inputValues.hourValue}</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PopUp;
