export const saveUserInfos = (info) => localStorage.setItem('user', info);

export const saveMealsToken = (num) => localStorage.setItem('mealsToken', num);

export const savecocktailsToken = (num) => localStorage.setItem('cocktailsToken', num);

export const saveRecipesInProgress = (info) => localStorage
  .setItem('inProgressRecipes', info);

export const saveFavoriteFoods = (info) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(info));

export const saveFavoriteDrinks = (info) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(info));
