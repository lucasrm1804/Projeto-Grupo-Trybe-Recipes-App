import React from 'react';
import * as COMP from '../components';

export default function ExploreIngredientsDrinks() {
  return (
    <div className="w-full h-auto mt-20">
      <div>
        <COMP.Header label="Explore Drinks" />
      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
