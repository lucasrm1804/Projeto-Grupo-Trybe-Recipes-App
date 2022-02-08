import React from 'react';
import PropTypes from 'prop-types';
import BotaoPerfil from './BotaoPerfil';
import SearchButton from './SearchButton';

export default function Header(props) {
  const { label, showSearch } = props;

  return (
    <div className="fixed bg-blue-100 p-2 top-0 w-full flex max-w-sm flex justify-around">
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
