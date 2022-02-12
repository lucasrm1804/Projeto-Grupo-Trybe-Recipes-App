import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import DrinksAndFoodsContext from '../../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiFilterCategoryDrinks, drinkApiDidMount } from '../../services/ApiDrinks';
import { apiFilterCategoryFoods, apiMealsDidMount } from '../../services/ApiFood';

export default function FilterButtonsFoods(props) {
  const { categoryName, label } = props;
  const { setMeals, setDrinks } = useContext(DrinksAndFoodsContext);
  const [toggle, setToggle] = useState(false);

  const onClickBtn = () => {
    if (toggle === true) {
      if (label === 'Foods') {
        apiMealsDidMount(setMeals);
        setToggle(false);
      }
      if (label === 'Drinks') {
        drinkApiDidMount(setDrinks);
        setToggle(false);
      }
    } else {
      if (label === 'Foods') {
        apiFilterCategoryFoods(setMeals, categoryName);
        setToggle(true);
      } if (label === 'Drinks') {
        apiFilterCategoryDrinks(setDrinks, categoryName);
        setToggle(true);
      }
    }
  };
  return (

    <div>

      <button
        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4
        text-blue-700 font-semibold m-2"
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        onClick={ onClickBtn }

      >
        {categoryName}
      </button>

    </div>);
}

FilterButtonsFoods.propTypes = {
  categoryName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
