import React, { useState } from 'react';
import * as COMP from '../components';
import { getDoneRecipes } from '../services/GetLocalStorage';

export default function DoneRecipes() {
  const recipes = getDoneRecipes();
  const [filter, setFilter] = useState('All');

  return (
    <div>
      <div>
        <COMP.Header showSearch={ false } label="Done Recipes" />
      </div>

      <div className="mt-20">
        <COMP.DoneCardsButton
          label="All"
          testId="filter-by-all-btn"
          onClick={ () => setFilter('All') }
        />
        <COMP.DoneCardsButton
          label="foods"
          testId="filter-by-food-btn"
          onClick={ () => setFilter('food') }

        />
        <COMP.DoneCardsButton
          label="drinks"
          testId="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }

        />
      </div>

      <div>
        {filter === 'All'
          ? (recipes && recipes.map((recipe, i) => (
            <COMP.DoneCards
              key={ i }
              id={ recipe.id }
              type={ recipe.type }
              nationality={ recipe.nationality }
              category={ recipe.category }
              alcoholicOrNot={ recipe.alcoholicOrNot }
              name={ recipe.name }
              image={ recipe.image }
              doneDate={ recipe.doneDate }
              tags={ recipe.tags }
              i={ i }
            />
          )))
          : (recipes && recipes
            .filter((recipe) => recipe.type === filter)
            .map((data, i) => (
              <COMP.DoneCards
                key={ i }
                id={ data.id }
                type={ data.type }
                nationality={ data.nationality }
                category={ data.category }
                alcoholicOrNot={ data.alcoholicOrNot }
                name={ data.name }
                image={ data.image }
                doneDate={ data.doneDate }
                tags={ data.tags }
                i={ i }
              />
            ))) }
      </div>
    </div>);
}
