import React, { useState } from 'react';
import * as COMP from '../components';
import { getDoneRecipes } from '../services/GetLocalStorage';

export default function DoneRecipes() {
  const recipes = getDoneRecipes();
  const [filter, setFilter] = useState('comida');
  console.log(filter);
  return (
    <div>
      <div>
        <COMP.Header showSearch={ false } label="Done Recipes" />
      </div>

      <div>
        <COMP.DoneCardsButton
          label="All"
          testId="filter-by-all-btn"
          onClick={ () => setFilter() }
        />
        <COMP.DoneCardsButton
          label="comida"
          testId="filter-by-food-btn"
          onClick={ () => setFilter() }

        />
        <COMP.DoneCardsButton
          label="bebida"
          testId="filter-by-drink-btn"
          onClick={ () => setFilter() }

        />
      </div>

      <div>
        {recipes && recipes.map((recipe, i) => (

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
        ))}
      </div>
    </div>);
}
