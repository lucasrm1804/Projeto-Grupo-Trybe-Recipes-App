import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../ButtonShare/ButtonShare';
import ButtonFavoriteFoods from '../ButtonFavoritar/ButtonFavoriteFoods';

export default function FoodsInProgressHeader(props) {
  const { strMeal, strMealThumb, label, category, nationality, idMeal } = props;

  return (
    <div>
      <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
      <p data-testid="recipe-title">
        { strMeal }
      </p>
      <ButtonShare />
      <ButtonFavoriteFoods
        strMeal={ strMeal }
        strMealThumb={ strMealThumb }
        labelFood={ label }
        categoryFood={ category }
        nationality={ nationality }
        idMeal={ idMeal }
      />

    </div>);
}

FoodsInProgressHeader.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
};
