const ENDPOINT_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const SORRY = 'Sorry, we haven\'t found any recipes for these filters.';
const RANDOM_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';

export function requestIngredient(inputValue) {
  return `${ENDPOINT_INGREDIENT}${inputValue}`;
}

export function requestName(inputValue) {
  return `${ENDPOINT_NAME}${inputValue}`;
}

export function requestFirstLetter(inputValue) {
  return `${ENDPOINT_FIRST_LETTER}${inputValue}`;
}

export async function requestMeals(searchRadioValue, searchText, setMeals, history) {
  if (searchRadioValue === 'Ingrediente') {
    const result = await fetch(requestIngredient(searchText))
      .then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }

  if (searchRadioValue === 'Nome') {
    const result = await fetch(requestName(searchText)).then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }

  if (searchRadioValue === 'Primeira Letra') {
    const result = await fetch(requestFirstLetter(searchText))
      .then((res) => res.json());
    const { meals } = result;
    if (meals === null) return global.alert(SORRY);
    if (meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
      return;
    }
    setMeals(meals);
  }
}

export async function apiMealsDidMount(setMeals) {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((res) => res.json());
  setMeals(result.meals);
}

export async function apiMealsCategory(setCategoryName) {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((res) => res.json());
  setCategoryName(result.meals);
}

export async function apiFilterCategoryFoods(setMeals, categoryName) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then((res) => res.json());
  setMeals(result.meals);
}

const ENDPOINT_RECIPE = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function requestRecipe(id) {
  return `${ENDPOINT_RECIPE}${id}`;
}

export async function apiMealsRecipe(id, setMealsRecipe) {
  const result = await fetch(requestRecipe(id))
    .then((res) => res.json());
  const { meals } = result;
  setMealsRecipe(meals[0]);
}

export async function ingredientsMeals(setIngredientsList) {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((res) => res.json());

  setIngredientsList(result.meals);
}

export async function filterByIngredient(setIngredientsList, ingredient) {
  const result = await
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json());

  setIngredientsList(result.meals);
}

export async function getDropDownValues(setDropDownOptions) {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((res) => res.json());

  setDropDownOptions(result.meals);
}

export async function filterByArea(setArea, dropDownValue) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${dropDownValue}`)
    .then((res) => res.json());

  setArea(result.meals);
}

export async function apiReceitaAtual(id, setReceitaAtual) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json());
  const { meals } = result;
  setReceitaAtual(meals[0]);
}

export async function apiRecommendFoods(setMealsRecommended) {
  const result = await fetch(ENDPOINT_NAME)
    .then((res) => res.json());
  const { meals } = result;
  setMealsRecommended(meals);
}

export async function randomFoods(setRandomId) {
  const result = await fetch(RANDOM_FOOD)
    .then((res) => res.json());
  const { meals } = result;
  setRandomId(meals[0].idMeal);
}
