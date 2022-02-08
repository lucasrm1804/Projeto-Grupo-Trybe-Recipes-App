import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

export default function Footer() {
  const [redirect, setRedirect] = useState(false);
  const [OnRoute, setOnRoute] = useState('');
  const [routes] = useState({ drink: '/drinks', food: '/foods', explore: '/explore' });

  const onClick = (value) => {
    setRedirect(true);
    setOnRoute(value);
  };

  return (

    <div
      data-testid="footer"
      className="
      fixed bottom-0 w-full flex max-w-sm flex justify-around  items-end bg-blue-100"
    >

      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => onClick(routes.drink) }
        src={ drinkIcon }
        alt="drinkIcon"
      >
        <img src={ drinkIcon } alt="drinkIcon" />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ () => onClick(routes.explore) }
        src={ exploreIcon }
        alt="exploreIcon"
      >
        <img src={ exploreIcon } alt="exploreIcon" />

      </button>

      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => onClick(routes.food) }
        src={ mealIcon }
        alt="mealIcon"
      >
        <img src={ mealIcon } alt="mealIcon" />
      </button>
      { redirect && <Redirect to={ OnRoute } /> }
    </div>);
}
