export const getSavedUser = () => localStorage.getItem('user');

export const getInProgress = () => JSON.parse(localStorage.getItem('inProgressRecipes'));
