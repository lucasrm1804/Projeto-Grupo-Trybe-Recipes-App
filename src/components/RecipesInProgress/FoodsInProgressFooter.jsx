import React from 'react';
import PropTypes from 'prop-types';

export default function FoodsInProgressFooter(props) {
  const { strInstructions } = props;
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
      >
        Finalizar
      </button>
    </div>
  );
}
FoodsInProgressFooter.propTypes = {
  strInstructions: PropTypes.string.isRequired,
};
