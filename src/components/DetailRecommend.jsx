import React from 'react';
import PropTypes from 'prop-types';

export default function DetailRecommend(props) {
  const { recipeTitle, receitaCategory, recipeImg } = props;
  return (
    <div className="rounded shadow-lg">
      <img
        className="object-contain h-48 w-full"
        data-testid="recipe-photo"
        src={ recipeImg }
        alt={ recipeTitle }
      />
      <div className="px-6 py-4">
        <divcl>
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
        </divcl>
      </div>
    </div>);
}

DetailRecommend.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  receitaCategory: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
};
