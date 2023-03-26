import styles from "./index.module.scss";
import { valuesExtractor } from "../../utils/funcs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const InfoDrinks = ({ data, setSingleDrinkContext, filteredList }) => {
  const ingredientsData = () => valuesExtractor(data, "strIngredient");
  const measuresData = () => valuesExtractor(data, "strMeasure");

  const onHandleClick = () => {
    setSingleDrinkContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const onHandlePrevBtn = () => {
    setSingleDrinkContext((prev) => {
      const newSlider = Math.max(0, prev.slider - 1);
      return {
        ...prev,
        payload: filteredList[newSlider],
        slider: newSlider,
      };
    });
  };

  const onHandleNextBtn = () => {
    setSingleDrinkContext((prev) => {
      const newSlider = Math.min(filteredList.length - 1, prev.slider + 1);
      return {
        ...prev,
        payload: filteredList[newSlider],
        slider: newSlider,
      };
    });
  };

  return (
    <div className={styles.InfoDrinks}>
      <div className={styles.infoDrinks__content}>
        <p className={styles.infoButton} onClick={onHandleClick}>
          Torna alla home
        </p>
        <div className={styles.imageSection}>
          <img
            className={styles.image}
            src={data.strDrinkThumb}
            alt={data.strDrink}
          />
        </div>
        <div className={styles.mediaContent}>
          <h3 className={styles.title}>{data.strDrink}</h3>
          <hr />
          <p className={styles.type}>{data.strCategory}</p>
          <p className={styles.containerType}>
            <b>Container:</b> {data.strGlass}
          </p>
          <p className={styles.instructions}>{data.strInstructions}</p>
          <div className={styles.downSection}>
            <ul className={styles.ingredients}>
              <p className={styles.type}>Ingredients:</p>
              {ingredientsData().map((ingredient, index) => (
                <li key={`ingredient-${index}`}>{ingredient}</li>
              ))}
            </ul>
            <ul className={styles.measures}>
              <p className={styles.type}>Measures:</p>
              {measuresData().map((measure, index) => (
                <li key={`measure-${index}`}>{measure}</li>
              ))}
            </ul>
          </div>
          <div className={styles.navButtons}>
            <button onClick={onHandlePrevBtn} className={styles.leftButton}>
              <HiOutlineArrowNarrowLeft className={styles.arrow} />
              Previous
            </button>
            <button onClick={onHandleNextBtn} className={styles.rightButton}>
              <HiOutlineArrowNarrowRight className={styles.arrow} />
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDrinks;
