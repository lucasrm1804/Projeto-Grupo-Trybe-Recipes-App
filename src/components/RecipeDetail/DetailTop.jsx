import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../ButtonShare/ButtonShare';
import ButtonFavoriteFoods from '../ButtonFavoritar/ButtonFavoriteFoods';
import ButtonFavoriteDrinks from '../ButtonFavoritar/ButtonFavoriteDrinks';

export default function DetailTop(props) {
  const { recipeTitle, receitaCategory, recipeImg, label, receita } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        data-testid="recipe-photo"
        src={ recipeImg }
        alt={ recipeTitle }
      />
      <div className="px-6 py-4 flex justify-between">
        <div>
          <h2
            className="font-bold text-xl mb-2"
            data-testid="recipe-title"
          >
            { recipeTitle }
          </h2>
          <span
            className="text-gray-700 text-base"
            data-testid="recipe-category"
          >
            { receitaCategory }
          </span>
        </div>
        <div>
          {label === 'foods' ? <ButtonFavoriteFoods
            strMeal={ receita.strMeal }
            strMealThumb={ receita.strMealThumb }
            labelFood="foods"
            categoryFood={ receita.categoryFood }
            nationality={ receita.nationality }
            idMeal={ receita.idMeal }
          />
            : (
              <ButtonFavoriteDrinks
                strDrink={ receita.strDrink }
                strDrinkThumb={ receita.strDrinkThumb }
                labelDrink="drinks"
                categoryDrink={ receita.categoryDrink }
                nationality={ receita.nationality }
                idDrink={ receita.idDrink }
              />)}
          <ButtonShare />
        </div>
      </div>
    </div>);
}

DetailTop.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  receitaCategory: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  receita: PropTypes.arrayOf(PropTypes.string).isRequired,
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  categoryFood: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  categoryDrink: PropTypes.string.isRequired,
  idDrink: PropTypes.string.isRequired,
};
