import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

export default function ButtonShare() {
  const onClickCopied = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url.replace('/in-progress', ''));
  };

  return (
    <button
      className="px-3 py-2"
      data-testid="share-btn"
      type="button"
      onClick={ () => {
        onClickCopied();
        alert('Link copied!');
      } }
    >
      <img
        src={ shareIcon }
        alt="Share Icon"
      />
    </button>
  );
}
