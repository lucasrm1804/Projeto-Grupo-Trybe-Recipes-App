import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function ButtonFavoritar() {
  return (
    <button
      className="px-3 py-2"
      data-testid="favorite-btn"
      type="button"
    >
      <img
        src={ whiteHeartIcon }
        alt="Share Icon"
      />
    </button>
  );
}
