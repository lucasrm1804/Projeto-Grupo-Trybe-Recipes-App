import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as COMP from '../components';
import { randomFoods } from '../services/ApiFood';

export default function ExploreFoods() {
  const history = useHistory();
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    randomFoods(setRandomId);
  }, []);

  return (
    <div className="w-full h-auto mt-20">
      <div>
        <COMP.Header label="Explore Foods" />
      </div>
      <div>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
      </div>
      <div>
        <button
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
      </div>
      <div>
        <button
          data-testid="explore-surprise"
          type="button"
          onClick={ () => history.push(`/foods/${randomId}`) }
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
