import styles from "./App.module.scss";
import Header from "./components/header";
import HamburgerMenu from "./components/hamburgerMenu";
import Reservation from "./components/Reservation";
import PopUp from "./components/popUp";
import Hero from "./components/hero";
import Content from "./components/content";
import InfoDrinks from "./components/infoDrinks";
import Footer from "./components/footer";
import { useState } from "react";
import { filteredList } from "./utils/funcs";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const [reservation, setReservation] = useState(false);
  const [inputValues, setInputValues] = useState({
    textValue: "",
    dateValue: "",
    hourValue: "",
  });

  const [drinkList, setDrinkList] = useState([]);

  const [category, setCategory] = useState("Cocktail");

  const [singleDrinkContext, setSingleDrinkContext] = useState({
    payload: {},
    isVisible: false,
    slider: null,
  });

  return (
    <div className={styles.App}>
      <Header
        setModalVisibility={setModalVisibility}
        setReservation={setReservation}
      />
      <Hero />
      {singleDrinkContext.isVisible ? (
        <>
          <div className={styles.info}>
            <h2 className={styles.InfoTitle}>Info Cocktail</h2>
            <InfoDrinks
              data={singleDrinkContext.payload}
              setSingleDrinkContext={setSingleDrinkContext}
              filteredList={filteredList(drinkList, "strCategory", category)}
              drinkList={drinkList}
              category={category}
            />
          </div>
        </>
      ) : (
        <>
          <Content
            drinkList={drinkList}
            setDrinkList={setDrinkList}
            category={category}
            setCategory={setCategory}
            setSingleDrinkContext={setSingleDrinkContext}
          />
        </>
      )}
      <Footer />
      {modalVisibility && <HamburgerMenu setReservation={setReservation} />}
      {reservation && (
        <Reservation
          inputValues={inputValues}
          setInputValues={setInputValues}
          setPopUpVisibility={setPopUpVisibility}
          setReservation={setReservation}
        />
      )}
      {popUpVisibility && <PopUp inputValues={inputValues} />}
    </div>
  );
}

export default App;
