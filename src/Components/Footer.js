import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

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
      className="footer"
      data-testid="footer"
    >
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => onClick(routes.drink) }
      >
        <img src="src/images/drinkIcon.svg" alt="drinkIcon" />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ () => onClick(routes.explore) }
      >
        <img src="src/images/exploreIcon.svg" alt="exploreIcon" />

      </button>

      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => onClick(routes.food) }
      >
        <img src="src/images/meals.svg" alt="mealsIcon" />
      </button>
      { redirect && <Redirect to={ OnRoute } /> }
    </div>);
}
