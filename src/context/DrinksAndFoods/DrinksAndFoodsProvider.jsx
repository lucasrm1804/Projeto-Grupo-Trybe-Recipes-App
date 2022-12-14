import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinksAndFoodsContext from './DrinksAndFoodsContext';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsRecommended, setMealsRecommended] = useState([]);
  const [drinksRecommended, setDrinksRecommended] = useState([]);

  const contextValue = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    mealsRecommended,
    setMealsRecommended,
    drinksRecommended,
    setDrinksRecommended,
  };

  return (
    <DrinksAndFoodsContext.Provider value={ contextValue }>
      {children}
    </DrinksAndFoodsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
