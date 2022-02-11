export const getSavedUser = () => localStorage.getItem('user');

export const getInProgress = () => JSON.parse(localStorage.getItem('inProgressRecipes'));

export const getFavoritesFoods = () => JSON.parse(localStorage
  .getItem('favoriteRecipes'));

export const getFavoritesDrinks = () => JSON.parse(localStorage
  .getItem('favoriteRecipes'));
