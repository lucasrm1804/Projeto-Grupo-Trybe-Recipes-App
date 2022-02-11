import React, { useContext, useEffect, useState } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiMealsDidMount, apiMealsCategory } from '../services/ApiFood';

export default function Foods() {
  const { displaySearchBar } = useContext(HeaderContext);
  const { meals, setMeals } = useContext(DrinksAndFoodsContext);
  const [categoryName, setCategoryName] = useState([]);
  const TWELVE = 12;
  const FIVE = 5;

  useEffect(() => {
    apiMealsDidMount(setMeals);
    apiMealsCategory(setCategoryName);
  }, [setMeals]);

  return (
    <div>
      <div>
        <COMP.Header showSearch label="Foods" />
      </div>
      <div>
        {displaySearchBar && <COMP.SearchBar title="Foods" />}

      </div>
      <div
        className="p-2 mt-12 flex border-b flex-wrap items-start shadow-2xl
        justify-between"
      >
        <COMP.FilterButtonAll
          label="Foods"
        />

        {categoryName
          && categoryName.slice(0, FIVE).map((category, index) => (
            <COMP.FilterButton
              key={ index }
              categoryName={ category.strCategory }
              label="Foods"
            />
          ))}

      </div>

      <div className="h-54 pt-4 w-full flex flex-row flex-wrap overflow-x-scroll">
        {meals && meals.slice(0, TWELVE).map((food, index) => (
          <div
            className="h-54 w-40 mx-2 pl-2"
            key={ food.idMeal }
          >

            <COMP.FoodCards
              className="h-54 w-40 mx-2"
              index={ index }
              idMeal={ food.idMeal }
              strMeal={ food.strMeal }
              strMealThumb={ food.strMealThumb }
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
