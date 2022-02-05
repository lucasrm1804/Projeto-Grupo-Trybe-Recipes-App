import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DrinkCards(props) {
  const { index, strDrink, strDrinkThumb, idDrink } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link to={ `/drinks/${idDrink}` }>
<<<<<<< HEAD:src/components/Cards/DrinkCards.jsx
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
          className="w-300"
        />
=======
        <img src={ strDrinkThumb } alt={ strDrink } data-testid={ `${index}-card-img` } />
>>>>>>> 34079dcdee4df3a484456d03b8374a59504a54fe:src/components/DrinkCards.jsx
        <p data-testid={ `${index}-card-name` }>
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
