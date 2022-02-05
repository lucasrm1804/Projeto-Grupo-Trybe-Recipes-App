import React from 'react';
import PropTypes from 'prop-types';

export default function DrinksInProgressHeader(props) {
  const { strDrinkThumb, strDrink } = props;
  return (
    <div>
      <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strDrink }
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
    </div>

  );
}

DrinksInProgressHeader.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
};
