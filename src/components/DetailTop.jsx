import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function DetailTop(props) {
  const { recipeTitle, receitaCategory, recipeImg } = props;
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
          <button className="px-3 py-2" data-testid="share-btn" type="button">
            <img src={ shareIcon } alt="Share Icon" />
          </button>
          <button className="px-3 py-2" data-testid="favorite-btn" type="button">
            <img src={ whiteHeartIcon } alt="Heart Icon" />
          </button>
        </div>
      </div>
    </div>);
}

DetailTop.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  receitaCategory: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
};
