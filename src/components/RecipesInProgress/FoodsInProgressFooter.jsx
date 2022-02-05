import React from 'react';

export default function FoodsInProgressFooter() {
  return (
    <div>
      <p
        data-testid="instructions"
      >
        instruções
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
