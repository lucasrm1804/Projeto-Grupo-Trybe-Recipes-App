import React from 'react';
import PropTypes from 'prop-types';

function DoneCardsButton(props) {
  const { label, testId, onClick } = props;

  return (
    <div>

      <button
        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4
        text-blue-700 font-semibold m-2"
        type="button"
        data-testid={ testId }
        onClick={ onClick(`${label}`) }

      >
        {label}
      </button>

    </div>
  );
}

DoneCardsButton.propTypes = {
  testId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoneCardsButton;
