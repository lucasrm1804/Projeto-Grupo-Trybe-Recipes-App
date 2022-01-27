import React from 'react';

export default function Footer() {
  return (
    <div data-testid="footer">

      <button
        type="button"
        data-testid="drinks-bottom-btn"
      >
        <img src="src/images/drinkIcon.svg" alt="drinkIcon" />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
      >
        <img src="src/images/exploreIcon.svg" alt="exploreIcon" />
      </button>

      <button
        type="button"
        data-testid="food-bottom-btn"
      >
        <img src="src/images/meals.svg" alt="mealsIcon" />
      </button>
    </div>);
}
