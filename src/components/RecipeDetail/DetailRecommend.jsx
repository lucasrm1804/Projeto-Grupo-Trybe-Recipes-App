import React from 'react';
import PropTypes from 'prop-types';

export default function DetailRecommend(props) {
  const { recipeTitle, receitaCategory, recipeImg, i } = props;
  return (
    <div
      className="flex flex-col flex-nowrap justify-around items-center w-40 h-54"
    >
      <img
        className="object-contain h-48 w-full"
        data-testid={ `${i}-recomendation-card` }
        src={ recipeImg }
        alt={ recipeTitle }
      />
      <div className="px-6 py-4">
        <div>
          <h2
            data-testid={ `${i}-recomendation-title` }
            className="font-bold text-xl mb-2"
          >
            { recipeTitle }
          </h2>
          <span
            className="text-gray-700 text-base"
          >
            { receitaCategory }
          </span>
        </div>
      </div>
    </div>);
}

DetailRecommend.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  receitaCategory: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
