import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

export default function ButtonShare() {
  const [copied, setCopied] = useState(false);
  const onClickCopied = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url.replace('/in-progress', ''));
    setCopied(!copied);
  };

  return (
    <div>
      <button
        className="px-3 py-2"
        data-testid="share-btn"
        type="button"
        onClick={ onClickCopied }
      >
        <img
          src={ shareIcon }
          alt="Share Icon"
        />
      </button>
      {copied && <p>Link copied!</p>}
    </div>
  );
}
