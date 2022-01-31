import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const [redirect, setRedirect] = useState(false);
  const [OnRoute, setOnRoute] = useState('');
  const [routes] = useState({ drink: '/drink', food: '/food', explore: '/explore' });

  const onClick = (value) => {
    setRedirect(true);
    setOnRoute(value);
  };

  return (

    <div
      className="  w-full flex max-w-sm flex justify-around max-w-sm items-end"
      data-testid="footer"
    >

      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => onClick(routes.drink) }
      >
        <img src={ drinkIcon } alt="drinkIcon" />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ () => onClick(routes.explore) }
      >
        <img src={ exploreIcon } alt="exploreIcon" />

      </button>

      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => onClick(routes.food) }
      >
        <img src={ mealIcon } alt="mealIcon" />
      </button>
      { redirect && <Redirect to={ OnRoute } /> }
    </div>);
}
