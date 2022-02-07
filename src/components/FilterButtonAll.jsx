import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiMealsDidMount } from '../services/ApiFood';
import { drinkApiDidMount } from '../services/ApiDrinks';

export default function FilterButtonAll(props) {
  const { setMeals, setDrinks } = useContext(DrinksAndFoodsContext);
  const { label } = props;

  const onClickBtn = () => {
    if (label === 'Foods') {
      apiMealsDidMount(setMeals);
    } else {
      drinkApiDidMount(setDrinks);
    }
  };
  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ onClickBtn }
      >
        all
      </button>
    </div>
  );
}

FilterButtonAll.propTypes = {
  label: PropTypes.string.isRequired,
};
