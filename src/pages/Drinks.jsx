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
  }, [setDrinks]);

  return (
    <div>
      <div>
        <COMP.Header showSearch label="Drinks" />
      </div>
      <div>
        {displaySearchBar && <COMP.SearchBar title="Drinks" />}

      </div>
      <div
        className="p-2 mt-12 flex border-b flex-wrap items-start shadow-2xl
        justify-between"
      >
        <COMP.FilterButtonAll
          label="Drinks"
        />

        {categoryName
          && categoryName.slice(0, FIVE).map((category, index) => (
            <COMP.FilterButton
              key={ index }
              categoryName={ category.strCategory }
              label="Drinks"
            />
          ))}

      </div>

      <div className="h-54 pt-4 w-full flex flex-row flex-wrap overflow-x-scroll">
        {drinks && drinks.slice(0, TWELVE).map((drink, index) => (
          <div
            className="h-54 w-40 mx-2 pl-2"
            key={ drink.idDrink }
          >
            <COMP.DrinkCards
              className="h-54 w-40 mx-2"
              index={ index }
              idDrink={ drink.idDrink }
              strDrink={ drink.strDrink }
              strDrinkThumb={ drink.strDrinkThumb }
            />

          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
