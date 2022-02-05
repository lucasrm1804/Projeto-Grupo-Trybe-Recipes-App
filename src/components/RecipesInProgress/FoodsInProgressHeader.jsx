import React from 'react';
import PropTypes from 'prop-types';

export default function FoodsInProgressHeader(props) {
  const { strMeal, strMealThumb } = props;

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

    </div>);
}

FoodsInProgressHeader.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
};
