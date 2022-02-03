<<<<<<< HEAD
export const drinksIniciais = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  )
    .then((data) => data.json())
    .then((data) => data.drinks);
  return response;
};

export const fetchApi2 = async () => {
  const response = await fetch('')
    .then((data) => data.json())
    .then((data) => data.meals);
  return response;
};
=======
const ENDPOINT_DRINKS_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_DRINKS_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINKS_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const SORRY = 'Sorry, we haven\'t found any recipes for these filters.';

export function requestDrinkIngredient(inputValue) {
  return `${ENDPOINT_DRINKS_INGREDIENT}${inputValue}`;
}

export function requestDrinkName(inputValue) {
  return `${ENDPOINT_DRINKS_NAME}${inputValue}`;
}

export function requestDrinkFirstLetter(inputValue) {
  return `${ENDPOINT_DRINKS_FIRST_LETTER}${inputValue}`;
}

export async function requestDrinks(searchRadioValue, searchText, setDrinks, history) {
  if (searchRadioValue === 'Ingrediente') {
    const result = await fetch(requestDrinkIngredient(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/drinks/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }

  if (searchRadioValue === 'Nome') {
    const result = await fetch(requestDrinkName(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/drinks/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }

  if (searchRadioValue === 'Primeira Letra') {
    const result = await fetch(requestDrinkFirstLetter(searchText))
      .then((res) => res.json());
    const { drinks } = result;
    if (drinks === null) return global.alert(SORRY);
    if (drinks.length === 1) history.push(`/drinks/${drinks[0].idDrink}`);
    setDrinks(drinks);
  }
}

export async function drinkApiDidMount(setDrinks) {
  const results = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json());
  const { drinks } = results;
  setDrinks(drinks);
}
>>>>>>> 0fc81ff50d7725d5ce2442d3b794c2fea45ade30
