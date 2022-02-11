import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function DrinksInProgressFooter(props) {
  const [redirect, setRedirect] = useState(false);
  const { strInstructions, disabled } = props;

  return (
    <div>
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>

      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ disabled }
        onClick={ () => setRedirect(true) }
      >
        Finalizar
      </button>
      {redirect && <Redirect to="/done-recipes" />}
    </div>

  );
}
DrinksInProgressFooter.propTypes = {
  strInstructions: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
