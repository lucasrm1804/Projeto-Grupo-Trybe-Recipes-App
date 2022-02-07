import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { saveRecipesInProgress } from '../../services/SaveLocalStorage';

export default function FoodsInProgressBody(props) {
  const { category, ingredients } = props;
  const { id } = useParams();

  //! função consultada no repositório do eduardo Miyazaki link: https://github.com/tryber/sd-016-a-project-recipes-app/pull/614/commits/ef0964857119695eecdc6a538141cc8445eab2b0
  const [toggle, setToggle] = useState(
    ingredients.map((ingredient, index) => ({
      ingredient, checked: false, index,
    })),
  );

  const onChange = (data) => {
    const foodsInProgress = [];

    for (let i = 0; i < data.length; i += 1) {
      if (data[i].checked === true) {
        foodsInProgress.push(data[i].index);
      }
    }

    const inProgressRecipes = {
      cocktails: {
        [id]: [...foodsInProgress],
      },
    };
    saveRecipesInProgress(JSON.stringify(inProgressRecipes));
  };

  const onClickChange = ({ target: { value } }) => {
    setToggle((prevState) => {
      const newToggle = prevState.map((item, index) => {
        if (item.ingredient === value) {
          return {
            ...item, checked: !item.checked, index,
          };
        }
        return item;
      });
      onChange(newToggle);
      return newToggle;
    });
  };
  return (
    <div>
      <h3 data-testid="recipe-category">
        {category}
      </h3>

      <h2>Ingrediente</h2>
      {ingredients.map((ingredient, index) => (
        ingredient && (
          <label
            htmlFor={ ingredient[index] }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ toggle[index].checked && 'line-through' }

          >
            <input
              type="checkbox"
              checked={ toggle[index].checked }
              onClick={ (target) => {
                onClickChange(target);
              } }
              value={ ingredient }
              id={ ingredient[index] }

            />
            {ingredient }
          </label>)
      ))}
    </div>);
}

FoodsInProgressBody.propTypes = {
  category: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
