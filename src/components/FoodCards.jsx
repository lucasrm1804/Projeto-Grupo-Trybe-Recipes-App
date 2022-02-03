import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FoodCards(props) {
  const { index, strFood, strFoodThumb, idFood } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link to={ `/meals/${idFood}` }>
        <img src={ strFoodThumb } alt={ strFood } data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>
          { strFood }
        </p>
      </Link>
    </div>
  );
}

FoodCards.propTypes = {
  index: PropTypes.number.isRequired,
  strFood: PropTypes.string.isRequired,
  strFoodThumb: PropTypes.string.isRequired,
  idFood: PropTypes.string.isRequired,
};
