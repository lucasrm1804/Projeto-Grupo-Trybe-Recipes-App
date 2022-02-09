import React from 'react';
import PropTypes from 'prop-types';
import BotaoPerfil from './BotaoPerfil';
import SearchButton from './SearchButton';

export default function Header(props) {
  const { label, showSearch } = props;

  return (
    <div
      className="fixed bg-gradient-to-r from-purple-500 via-blue-500 to-gray-500 p-2
      top-0 w-full flex max-w-sm flex justify-around"
    >
      <BotaoPerfil />
      <div className="flex align-center">
        <h1 data-testid="page-title">{label}</h1>
      </div>
      {showSearch && <SearchButton /> }
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};
