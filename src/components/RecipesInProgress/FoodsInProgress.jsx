import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { saveRecipesInProgress } from '../../services/SaveLocalStorage';

export default function FoodsInProgress(props) {
  const { index, strMeal, strMealThumb } = props;
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
  };

  return (
    <div>
      <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strMeal }
      </p>
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>

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
          onChange={ () => setToggle(!toggle) }

        />
        test
      </label>
      <p
        data-testid="instructions"
      >
        instruções
      </p>

      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>

    </div>);
}

FoodsInProgress.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
