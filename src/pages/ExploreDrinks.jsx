import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as COMP from '../components';
import { randomDrinks } from '../services/ApiDrinks';

export default function ExploreDrinks() {
  const history = useHistory();
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    randomDrinks(setRandomId);
  }, []);
  return (
    <div className="w-full h-auto mt-20">
      <div>
        <COMP.Header label="Explore Drinks" />
      </div>
      <div>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
      </div>
      <div>
        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ () => history.push(`/drinks/${randomId}`) }
        >
          Surprise me!
        </button>
      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
