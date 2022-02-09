import React from 'react';
import { useHistory } from 'react-router-dom';
import * as COMP from '../components';

export default function Explore() {
  const history = useHistory();

  return (
    <>
      <COMP.Header label="Explore" />
      <div className="w-full h-auto mt-20">
        <button
          className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white
          font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
           focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
          ease-in-out"
          data-testid="explore-foods"
          type="button"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods 🍽️
        </button>

        <button
          className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600
          font-medium text-xs leading-normal uppercase rounded hover:bg-black
          hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150
          ease-in-out"
          data-testid="explore-drinks"
          type="button"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks 🍸
        </button>
      </div>
      <COMP.Footer />
    </>
  );
}
