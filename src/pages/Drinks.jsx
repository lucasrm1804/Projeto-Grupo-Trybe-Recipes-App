import React, { useEffect, useContext, useState } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { drinkApiDidMount, apiDrinksCategory } from '../services/ApiDrinks';

export default function Drinks() {
  const { displaySearchBar } = useContext(HeaderContext);
  const { drinks, setDrinks } = useContext(DrinksAndFoodsContext);
  const [categoryName, setCategoryName] = useState([]);
  const TWELVE = 12;
  const FIVE = 5;

  useEffect(() => {
    drinkApiDidMount(setDrinks);
    apiDrinksCategory(setCategoryName);
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
        {categoryName
        && categoryName.slice(0, FIVE).map((category, index) => (
          <COMP.FilterButton
            key={ index }
            categoryName={ category.strCategory }
          />
        ))}

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
