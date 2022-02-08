import React from 'react';
import PropTypes from 'prop-types';

function LoginButton(props) {
  const { label, testId, handleClick, isDisabled } = props;
  return (
    <button
      data-testid={ testId }
      type="button"
      onClick={ () => handleClick() }
      disabled={ isDisabled }
      className={ isDisabled
        ? `bg-blue-500 text-white font-bold w-28 h-12 rounded opacity-50
        cursor-not-allowed`
        : 'bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-12 rounded mt-8' }
    >
      { label }
    </button>
  );
}

LoginButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default LoginButton;
