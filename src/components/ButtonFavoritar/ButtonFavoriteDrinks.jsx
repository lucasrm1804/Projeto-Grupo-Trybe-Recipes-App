import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { saveFavoriteDrinks } from '../../services/SaveLocalStorage';
import { getFavoritesDrinks } from '../../services/GetLocalStorage';

export default function ButtonFavoriteDrinks(props) {
  const {
    strDrinkThumb,
    strDrink,
    labelDrink,
    categoryDrink,
    idDrink,
    strAlcoholic,
  } = props;
  const favoriteStorage = getFavoritesDrinks();
  const [favoriteIcon, setFavoriteIcon] = useState(false);

  useEffect(() => {
    if (favoriteStorage !== null && favoriteStorage[0].id === idDrink) {
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

    const favoriteRecipesDrinks = [{
      id: idDrink,
      type: labelDrink,
      nationality: '',
      category: categoryDrink,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    }];

    if (favoriteStorage === null || favoriteStorage[0].id === '') {
      saveFavoriteDrinks(favoriteRecipesDrinks);
      setFavoriteIcon(true);
    } else {
      saveFavoriteDrinks(INITIAL);
      setFavoriteIcon(false);
    }
  };
  return (
    <button
      className="px-3 py-2"
      data-testid="favorite-btn"
      type="button"
      onClick={ onClickFavorite }
      src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
    >
      <img
        src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
        alt="Share Icon"
      />
    </button>
  );
}
ButtonFavoriteDrinks.propTypes = {
  strDrinkThumb: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  labelDrink: PropTypes.string.isRequired,
  categoryDrink: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
};
