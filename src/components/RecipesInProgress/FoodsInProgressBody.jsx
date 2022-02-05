import React, { useState } from 'react';
import { saveRecipesInProgress } from '../../services/SaveLocalStorage';

export default function FoodsInProgressBody() {
  const [toggle, setToggle] = useState(false);

  const onClickChange = () => {
    const valuesRecipes = {
      cocktails: {
        cocktails: {
          idDaBebida: [lista - de - ingredientes - utilizados],
        },
        meals: {
          idDaComida: [lista - de - ingredientes - utilizados],
        },
      },

    };
    saveRecipesInProgress(valuesRecipes);

    setToggle(!toggle);
    console.log(meals);
  };
  return (
    <div>
      <h3 data-testid="recipe-category">
        {category}
      </h3>

      <h2>Ingrediente</h2>
      <label
        htmlFor="ingredient-input"
        className={ toggle && 'line-through' }
      >
        <input
          type="checkbox"
          data-testid={ `${index}-ingredient-step` }
          checked={ toggle }
          id="ingredient-input"
          onChange={ onClickChange }

        />
        test
      </label>

    </div>);
}
