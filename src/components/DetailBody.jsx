import React from 'react';
import PropTypes from 'prop-types';

export default function DetailTop(props) {
  const { ingredients, instructions, quantity } = props;
  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
      <h3 className="font-bold">Ingredients</h3>
      <ol>
        {
          ingredients.map((ing, i) => (
            ing && (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                { `${ing} - ${quantity[i]}` }
              </li>
            )
          ))
        }
      </ol>
      <h3 className="font-bold">Instructions.</h3>
      <p data-testid="instructions">{ instructions }</p>
    </div>
  );
}

DetailTop.propTypes = {
  ingredients: PropTypes.oneOfType(PropTypes.string).isRequired,
  quantity: PropTypes.oneOfType(PropTypes.string).isRequired,
  instructions: PropTypes.string.isRequired,
};
