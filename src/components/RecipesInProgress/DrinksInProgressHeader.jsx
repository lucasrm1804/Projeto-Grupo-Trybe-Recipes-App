import React from 'react';
import PropTypes from 'prop-types';
import ButtonFavoriteDrinks from '../ButtonFavoritar/ButtonFavoriteDrinks';
import ButtonShare from '../ButtonShare/ButtonShare';

export default function DrinksInProgressHeader(props) {
  const { strDrinkThumb, strDrink, label, category, idDrink, strAlcoholic } = props;
  return (
    <div>
      <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strDrink }
      </p>
      <ButtonShare />
      <ButtonFavoriteDrinks
        strDrinkThumb={ strDrinkThumb }
        strDrink={ strDrink }
        labelDrink={ label }
        categoryDrink={ category }
        idDrink={ idDrink }
        strAlcoholic={ strAlcoholic }
      />
    </div>

  );
}

DrinksInProgressHeader.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
};
