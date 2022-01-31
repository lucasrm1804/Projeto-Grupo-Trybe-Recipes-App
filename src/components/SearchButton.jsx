import React, { useContext } from 'react';
import HeaderContext from '../context/HeaderContext';
import searchIcon from '../images/searchIcon.svg';

export default function SearchButton() {
  const { displaySearchBar, setDisplaySearchBar } = useContext(HeaderContext);

  function handleClick() {
    setDisplaySearchBar(!displaySearchBar);
  }

  return (
    <button
      data-testid="exec-search-btn"
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />
    </button>
  );
}
