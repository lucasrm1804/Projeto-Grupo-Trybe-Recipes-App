import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Cards from '../components/DoneCard';

export default function FavoriteRecipes() {
  const doneArray = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [done, setDone] = useState(doneArray);

  function showAll() {
    setDone(doneArray);
  }

  function justFood() {
    const justFoodArray = doneArray.filter((favorite) => favorite.type === 'food');
    setDone(justFoodArray);
  }
  function justDrinks() {
    const justDrinksArray = doneArray
      .filter((favorite) => favorite.type === 'drink');
    setDone(justDrinksArray);
  }

  return (
    <>
      <Header title="Receitas Feitas" />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ showAll }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ justFood }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ justDrinks }
        >
          Drinks
        </button>
      </div>
      <div>
        {
          done && (done.map((recipe, index) => (
            <Cards
              key={ recipe.id }
              index={ index }
              alcoholicOrNot={ recipe.alcoholicOrNot }
              area={ recipe.area }
              category={ recipe.category }
              date={ recipe.doneDate }
              id={ recipe.id }
              image={ recipe.image }
              name={ recipe.name }
              tags={ recipe.tags }
              type={ recipe.type }
            />
          )))
        }
      </div>
    </>
  );
}
