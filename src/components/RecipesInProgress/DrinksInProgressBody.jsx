import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DrinksInProgressBody(props) {
  const { strAlcoholic, ingredients } = props;
  const [toggle, setToggle] = useState(false);

  const onClickChange = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h3 data-testid="recipe-category">
        {strAlcoholic}
      </h3>

      <h2>Ingrediente</h2>

      {ingredients.map((ingredient, index) => (
        ingredient && (
          <label
            htmlFor="ingredient-input"
            className={ toggle && 'line-through' }
            key={ index }
          >
            <input
              type="checkbox"
              data-testid={ `${index}-ingredient-step` }
              checked={ toggle }
              id="ingredient-input"
              onChange={ onClickChange }
            />
            {ingredient }
          </label>)
      ))}
    </div>

  );
}

DrinksInProgressBody.propTypes = {
  strAlcoholic: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
