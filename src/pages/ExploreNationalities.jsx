import React, { useEffect, useState } from 'react';
import * as COMP from '../components';
import RecipeCards from '../components/RecipesCards';
import { getDropDownValues,
  filterByArea, apiMealsDidMount } from '../services/ApiFood';

export default function ExploreNationalities() {
  const [dropDownOptions, setdropDownOptions] = useState('');
  const [dropDownValue, setDropDownValue] = useState('All');
  const [area, setArea] = useState('');
  const TWELVE = 12;

  useEffect(() => {
    getDropDownValues(setdropDownOptions);
    apiMealsDidMount(setArea);
  }, []);

  function handleOnChange(event) {
    if (event.target.value === 'All') return apiMealsDidMount(setArea);
    setDropDownValue(event.target.value);
    filterByArea(setArea, event.target.value);
  }

  return (
    <>
      <COMP.Header label="Explore Nationalities" showSearch />
      <div className="mt-20">
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ handleOnChange }
        >
          <option
            data-testid="All-option"
            value="All"
          >
            All
          </option>
          { dropDownOptions && dropDownOptions.map(({ strArea }, index) => (
            <option
              data-testid={ `${strArea}-option` }
              key={ index }
              value={ strArea }
            >
              { strArea }
            </option>
          )) }
        </select>
        { area && dropDownValue && area.slice(0, TWELVE).map((food, index) => (
          <RecipeCards
            key={ food.idMeal }
            index={ index }
            idMeal={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
          />
        ))}
      </div>
      <COMP.Footer />
    </>
  );
}
