import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

export default function DoneButtonShare(props) {
  const { testId, type, id } = props;

  const [copied, setCopied] = useState(false);

  const onClickCopied = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url.replace('done-recipes', `${type}s/${id}`));
    setCopied(!copied);
  };

  return (
    <div>
      <button
        className="px-3 py-2"
        data-testid={ testId }
        type="button"
        onClick={ onClickCopied }
        src={ shareIcon }
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

DoneButtonShare.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
