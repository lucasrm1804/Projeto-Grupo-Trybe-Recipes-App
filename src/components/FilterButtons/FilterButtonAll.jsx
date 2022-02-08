import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import DrinksAndFoodsContext from '../../context/DrinksAndFoods/DrinksAndFoodsContext';
import { drinkApiDidMount } from '../../services/ApiDrinks';
import { apiMealsDidMount } from '../../services/ApiFood';

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
        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4
        text-blue-700 font-semibold m-2"
        type="button"
        data-testid="All-category-filter"
        onClick={ onClickBtn }
      >
        All
      </button>
    </div>
  );
}

FilterButtonAll.propTypes = {
  label: PropTypes.string.isRequired,
};
