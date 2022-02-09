import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../ButtonShare/ButtonShare';
import ButtonFavoritar from '../ButtonFavoritar/ButtonFavoritar';

export default function FoodsInProgressHeader(props) {
  const { strMeal, strMealThumb } = props;

  return (
    <div>
      <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strMeal }
      </p>
      <ButtonShare />
      <ButtonFavoritar />

    </div>);
}

FoodsInProgressHeader.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
};
