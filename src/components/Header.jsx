import React from 'react';
import PropTypes from 'prop-types';
import BotaoPerfil from './BotaoPerfil';
import SearchButton from './SearchButton';

export default function Header(props) {
  const { label, showSearch } = props;

  return (
    <div className="flex flex-row">
      <BotaoPerfil />
      <h1 data-testid="page-title">{label}</h1>
      {showSearch && <SearchButton /> }
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};
