import styles from "./index.module.scss";

const DrinkCard = ({ data, setSingleDrinkContext }) => {
  const { strDrink, strAlcoholic, strDrinkThumb } = data;

  const onHandleClick = () =>
    setSingleDrinkContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className={styles.DrinkCard}>
      <img className={styles.drinkImage} src={strDrinkThumb} alt={strDrink} />
      <div className={styles.drinkText}>
        <h3 className={styles.drinkTitle}>{strDrink}</h3>
        <p className={styles.drinkType}>{strAlcoholic}</p>
      </div>
      <button className={styles.drinkButton} onClick={onHandleClick}>
        Discover
      </button>
    </div>
  );
};

export default DrinkCard;
