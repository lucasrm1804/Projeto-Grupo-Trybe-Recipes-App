import React from 'react';
import PropTypes from 'prop-types';

export default function FoodsInProgress() {
  const { index, strMeal, strMealThumb } = props;

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

      <ol>
        <li data-testid={ `${index}-ingredient-step` }>
          {ingredient }
        </li>
      </ol>

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
