import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestMeals } from '../../services/ApiFood';
import { requestDrinks } from '../../services/ApiDrinks';
import DrinksAndFoodsContext from '../../context/DrinksAndFoods/DrinksAndFoodsContext';

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
    <div
      className="mt-12 flex flex-col items-center border-b border-teal-500 py-2"
    >
      <input
        className="block uppercase tracking-wide text-gray-700 text-xs
        font-bold mb-2 py-2"
        id="search-input-text"
        type="text"
        data-testid="search-input"
        placeholder="                     Pesquisar"
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <form
        className="flex flex-col h-auto w-full"
        onChange={ (e) => setSearchRadioValue(e.target.value) }
      >
        <div className="flex justify-around">
          <label
            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4
            rounded-full"
            htmlFor="ingredient-input"
          >
            <input
              id="ingredient-input"
              type="radio"
              data-testid="ingredient-search-radio"
              name="search-bar"
              value="Ingrediente"
              className="appearance-none"

            />
            Ingrediente
          </label>

          <label
            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4
            rounded-full"
            htmlFor="name-input"
          >
            <input
              id="name-input"
              type="radio"
              data-testid="name-search-radio"
              name="search-bar"
              value="Nome"
              className="appearance-none"
            />
            Nome
          </label>

          <label
            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4
            rounded-full"
            htmlFor="letter-input"
          >
            <input
              id="letter-input"
              type="radio"
              data-testid="first-letter-search-radio"
              name="search-bar"
              value="Primeira Letra"
              className="appearance-none"
            />
            Primeira Letra
          </label>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
          border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 rounded-full"
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
