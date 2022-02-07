import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DrinksInProgressBody(props) {
  const { strAlcoholic, ingredients } = props;
  //! função consultada no repositório do eduardo Miyazaki link: https://github.com/tryber/sd-016-a-project-recipes-app/pull/614/commits/ef0964857119695eecdc6a538141cc8445eab2b0
  const [toggle, setToggle] = useState(
    ingredients.map((ingredient) => ({
      ingredient, checked: false,
    })),
  );

  const onClickChange = ({ target: { value } }) => {
    setToggle((prevState) => {
      const newToggle = prevState.map((item) => {
        if (item.ingredient === value) {
          return {
            ...item, checked: !item.checked,
          };
        }
        return item;
      });
      return newToggle;
    });
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
            htmlFor={ ingredient[index] }
            className={ toggle[index].checked && 'line-through' }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              checked={ toggle[index].checked }
              onClick={ (target) => onClickChange(target) }
              value={ ingredient }
              id={ ingredient[index] }
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
