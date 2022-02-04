import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DrinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiFilterCategoryFoods } from '../services/ApiFood';
import { apiFilterCategoryDrinks } from '../services/ApiDrinks';

export default function FilterButtonsFoods(props) {
  const { categoryName, label } = props;
  const { setMeals, setDrinks } = useContext(DrinksAndFoodsContext);

  const onClickBtn = () => {
    if (label === 'Foods') {
      apiFilterCategoryFoods(setMeals, categoryName);
    } if (label === 'Drinks') {
      apiFilterCategoryDrinks(setDrinks, categoryName);
    }
  };
  return (

    <div>

      <button
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
