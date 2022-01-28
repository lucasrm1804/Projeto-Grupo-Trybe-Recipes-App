export const foodsIniciais = async () => {
  const response = await fetch(
    '    https://www.themealdb.com/api/json/v1/1/search.php?s=',
  )
    .then((data) => data.json())
    .then((data) => data.meals);
  return response;
};

export const fetchApi2 = async () => {
  const response = await fetch('')
    .then((data) => data.json())
    .then((data) => data.meals);
  return response;
};
