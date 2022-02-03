import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestMeals } from '../services/ApiFood';
import { requestDrinks } from '../services/ApiDrinks';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';

function SearchBar(props) {
  const { title } = props;
  const { setMeals, setDrinks } = useContext(DrinksAndFoodsContext);
  const [searchText, setSearchText] = useState('');
  const [searchRadioValue, setSearchRadioValue] = useState('');
  const history = useHistory();

  async function onClickBtn() {
    if (searchText.length !== 1 && searchRadioValue === 'Primeira Letra') {
      global.alert('Your search must have only 1 (one) character');
    }

    if (title === 'Foods') {
      requestMeals(searchRadioValue, searchText, setMeals, history);
    } else {
      requestDrinks(searchRadioValue, searchText, setDrinks, history);
    }
  }

  return (
    <div>
      <input
        id="search-input-text"
        type="text"
        data-testid="search-input"
        placeholder="Pesquisar"
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <form onChange={ (e) => setSearchRadioValue(e.target.value) }>
        <label htmlFor="ingredient-input">
          <input
            id="ingredient-input"
            type="radio"
            data-testid="ingredient-search-radio"
            name="search-bar"
            value="Ingrediente"
          />
          Ingrediente
        </label>

        <label htmlFor="name-input">
          <input
            id="name-input"
            type="radio"
            data-testid="name-search-radio"
            name="search-bar"
            value="Nome"
          />
          Nome
        </label>

        <label htmlFor="letter-input">
          <input
            id="letter-input"
            type="radio"
            data-testid="first-letter-search-radio"
            name="search-bar"
            value="Primeira Letra"
          />
          Primeira Letra
        </label>

        <button
          id="search-button"
          data-testid="exec-search-btn"
          type="button"
          onClick={ () => onClickBtn() }
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
