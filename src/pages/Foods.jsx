import React, { useContext, useEffect } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiMealsDidMount } from '../services/ApiFood';

export default function Foods() {
  const { displaySearchBar } = useContext(HeaderContext);
  const { meals, setMeals } = useContext(DrinksAndFoodsContext);
  const TWELVE = 12;

  useEffect(() => {
    apiMealsDidMount(setMeals);
  }, []);
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Foods" />
      </div>
      <div>
        {displaySearchBar && <COMP.SearchBar title="Foods" />}

      </div>
      <div>
        {meals && meals.slice(0, TWELVE).map((food, index) => (
          <COMP.FoodCards
            key={ food.idMeal }
            index={ index }
            idMeal={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
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
