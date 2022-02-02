import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BotaoPerfil from './BotaoPerfil';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';
import HeaderContext from '../context/Header/HeaderContext';

export default function Header(props) {
  const { label, showSearch } = props;
  const { displaySearchBar } = useContext(HeaderContext);

  return (
    <div className="flex flex-row">
      <BotaoPerfil />
      <h1 data-testid="page-title">{label}</h1>
      {showSearch && <SearchButton /> }
      {displaySearchBar && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};
