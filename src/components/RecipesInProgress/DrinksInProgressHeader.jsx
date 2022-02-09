import React from 'react';
import PropTypes from 'prop-types';
import ButtonFavoritar from '../ButtonFavoritar/ButtonFavoritar';
import ButtonShare from '../ButtonShare/ButtonShare';

export default function DrinksInProgressHeader(props) {
  const { strDrinkThumb, strDrink } = props;
  return (
    <div>
      <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strDrink }
      </p>
      <ButtonShare />
      <ButtonFavoritar />
    </div>

  );
}

DrinksInProgressHeader.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
};
