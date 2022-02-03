import React, { useEffect, useContext } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { drinkApiDidMount } from '../services/ApiDrinks';

export default function Drinks() {
  const { displaySearchBar } = useContext(HeaderContext);
  const { drinks, setDrinks } = useContext(DrinksAndFoodsContext);
  const TWELVE = 12;

  useEffect(() => {
    drinkApiDidMount(setDrinks);
  }, []);
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Drinks" />
      </div>
      <div>
        {displaySearchBar && <COMP.SearchBar title="Drinks" />}

      </div>
      <div>
        {drinks && drinks.slice(0, TWELVE).map((drink, index) => (
          <COMP.DrinkCards
            key={ drink.idDrink }
            index={ index }
            idDrink={ drink.idDrink }
            strDrink={ drink.strDrink }
            strDrinkThumb={ drink.strDrinkThumb }

          />
        ))}
      </div>

      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
