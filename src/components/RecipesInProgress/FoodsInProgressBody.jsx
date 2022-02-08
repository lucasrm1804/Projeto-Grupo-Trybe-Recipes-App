import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReceitaAtualContext from '../../context/ReceitaAtual/ReceitaAtualContext';
// import { saveRecipesInProgress } from '../../services/SaveLocalStorage';

export default function FoodsInProgressBody(props) {
  const { category, ingredients } = props;
  const { toggle, setToggle } = useContext(ReceitaAtualContext);

  const onClickChange = () => {
    setToggle(!toggle);
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
            htmlFor="ingredient-input"
            className={ toggle && 'line-through' }
            key={ index }
            data-testid={ `${index}-ingredient-step` }

          >
            <input
              type="checkbox"
              id="ingredient-input"
              checked={ toggle }
              onChange={ onClickChange }

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
