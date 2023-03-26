import styles from "./index.module.scss";
import { FaCocktail } from "react-icons/fa";
import { categories } from "../../utils/categories";
import { filteredList } from "../../utils/funcs";
import { GET } from "../../utils/http";
import { useEffect } from "react";
import DrinkCard from "../drinkCard";

const Content = ({
  drinkList,
  setDrinkList,
  setSingleDrinkContext,
  setSingleDrink,
  category,
  setCategory,
}) => {
  useEffect(() => {
    GET("/search.php?f=a").then(({ drinks }) => {
      setDrinkList(() => drinks);
    });
  }, []);

  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className={styles.Content}>
      <div className={styles.categorySection}>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => onHandleClick(category.category)}
              className={styles.item}
            >
              <FaCocktail /> {category.category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.drinkList}>
        {filteredList(drinkList, "strCategory", category).map((drink) => (
          <DrinkCard
            data={drink}
            setSingleDrinkContext={setSingleDrinkContext}
            setSingleDrink={setSingleDrink}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
