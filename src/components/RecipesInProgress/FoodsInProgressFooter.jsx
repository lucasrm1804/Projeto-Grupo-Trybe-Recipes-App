import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function FoodsInProgressFooter(props) {
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
  disabled: PropTypes.bool.isRequired,
};
