import React, { useContext } from 'react';
import HeaderContext from '../../context/Header/HeaderContext';
import searchIcon from '../../images/searchIcon.svg';

export default function SearchButton() {
  const { displaySearchBar, setDisplaySearchBar } = useContext(HeaderContext);

  function handleClick() {
    setDisplaySearchBar(!displaySearchBar);
  }

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
      src={ searchIcon }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />
    </button>
  );
}
