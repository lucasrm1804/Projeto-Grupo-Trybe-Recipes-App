import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FoodCards(props) {
  const { index, strMeal, strMealThumb, idMeal } = props;
  return (
    <div
      className="flex flex-col flex-nowrap justify-around items-center w-40 h-54"
      data-testid={ `${index}-recipe-card` }
    >
      <Link to={ `/foods/${idMeal}` }>
        <img
          className="object-contain h-48 w-full"
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
        />
        <p
          className="px-6 py-4 font-bold text-xl mb-2"
          data-testid={ `${index}-card-name` }
        >
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
