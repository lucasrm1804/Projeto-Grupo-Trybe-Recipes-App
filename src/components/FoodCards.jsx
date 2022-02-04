import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FoodCards(props) {
  const { index, strMeal, strMealThumb, idMeal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link to={ `/foods/${idMeal}` }>
        <img src={ strMealThumb } alt={ strMeal } data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>
          { strMeal }
        </p>
      </Link>
    </div>
  );
}

FoodCards.propTypes = {
  index: PropTypes.number.isRequired,
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
};
