import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DrinkCards(props) {
  const { index, strDrink, strDrinkThumb, idDrink } = props;
  return (
    <div
      className="flex flex-col flex-nowrap justify-around items-center w-40 h-54"
      data-testid={ `${index}-recipe-card` }
    >
      <Link to={ `/drinks/${idDrink}` }>
        <img
          className="object-contain h-48 w-full"
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
        />
        <p
          className="px-6 py-4 font-bold text-xl mb-2"
          data-testid={ `${index}-card-name` }
        >
          { strDrink }
        </p>
      </Link>
    </div>
  );
}

DrinkCards.propTypes = {
  index: PropTypes.number.isRequired,
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};
