import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';
import { getInProgress } from '../../services/GetLocalStorage';

export default function FoodsInProgressFooter(props) {
  const [redirect, setRedirect] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { strInstructions, ingredients } = props;
  const { id } = useParams();

  const { meals } = getInProgress();
  const ingredientsFull = [];
  const ingredientsInProgress = [];
  ingredientsInProgress.push(meals[id]);

  for (let index = 0; index < ingredients.length; index += 1) {
    if (ingredients[index] !== '') {
      ingredientsFull.push(ingredients[index]);
    }
  }

  const onClickDone = () => {
    if (ingredientsInProgress.length === 0) {
      setDisabled(true);
    }
    if (ingredientsInProgress.length === ingredientsFull.length) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    onClickDone();
  });

  return (

    <div>
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>

      <button
        type="button"
        disabled={ disabled }
        data-testid="finish-recipe-btn"
        onClick={ () => setRedirect(true) }
      >
        Finalizar
      </button>
      {redirect && <Redirect to="/done-recipes" />}
    </div>
  );
}
FoodsInProgressFooter.propTypes = {
  strInstructions: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
