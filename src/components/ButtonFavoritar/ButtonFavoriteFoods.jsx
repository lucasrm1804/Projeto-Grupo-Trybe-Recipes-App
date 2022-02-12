import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { saveFavoriteFoods } from '../../services/SaveLocalStorage';
import { getFavoritesFoods } from '../../services/GetLocalStorage';

export default function ButtonFavoriteFoods(props) {
  const {
    strMeal,
    strMealThumb,
    labelFood,
    categoryFood,
    nationality,
    idMeal,
  } = props;
  const favoriteStorage = getFavoritesFoods();
  const [favoriteIcon, setFavoriteIcon] = useState(false);

  useEffect(() => {
    if (favoriteStorage !== null && favoriteStorage[0].id === idMeal) {
      setFavoriteIcon(true);
    }
  });

  const onClickFavorite = () => {
    const INITIAL = [{
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
    }];

    const favoriteRecipesFoods = [{
      id: idMeal,
      type: labelFood,
      nationality,
      category: categoryFood,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    }];

    if (favoriteStorage === null || favoriteStorage[0].id === '') {
      saveFavoriteFoods(favoriteRecipesFoods);

      setFavoriteIcon(true);
    } else {
      saveFavoriteFoods(INITIAL);
      setFavoriteIcon(false);
    }
  };
  return (
    <button
      className="px-3 py-2"
      // data-testid="favorite-btn"
      type="button"
      onClick={ onClickFavorite }
      src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
    >
      <img
        data-testid="favorite-btn"
        src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
        alt="Share Icon"
      />
    </button>
  );
}
ButtonFavoriteFoods.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  labelFood: PropTypes.string.isRequired,
  categoryFood: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
};
