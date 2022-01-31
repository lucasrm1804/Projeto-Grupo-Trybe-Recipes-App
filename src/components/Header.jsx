import React from 'react';
import PropTypes from 'prop-types';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

export default function Header(props) {
  const { label, displaySearchButton } = props;

  return (
    <div>
      <ProfileButton />
      <h1 data-testid="page-title">{ label }</h1>
      {displaySearchButton && <SearchButton />}
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  displaySearchButton: PropTypes.bool.isRequired,
};
