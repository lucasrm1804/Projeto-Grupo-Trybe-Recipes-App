import React from 'react';
import * as COMP from '../components';

export default function ExploreDrinks() {
  return (
    <div>
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
