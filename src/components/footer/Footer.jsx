import styles from "./index.module.scss";
import { FaCocktail } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h4 className={styles.footerText}>
        Powered by Cocktail house <FaCocktail />
      </h4>
    </div>
  );
};

export default Footer;
