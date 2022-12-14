import React from 'react';
import PropTypes from 'prop-types';

function ProfileButton(props) {
  const { label, testId, handleClick } = props;
  return (
    <button
      data-testid={ testId }
      type="button"
      onClick={ () => handleClick() }
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-6
       rounded inline-flex items-center mt-8"
    >
      { label }
    </button>
  );
}

ProfileButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProfileButton;
