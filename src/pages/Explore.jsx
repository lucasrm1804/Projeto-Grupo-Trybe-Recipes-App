import React from 'react';
import { useHistory } from 'react-router-dom';
import * as COMP from '../components';

export default function Explore() {
  const history = useHistory();

  return (
    <>
      <COMP.Header label="Explore" />
      <div>
        <button
          data-testid="explore-foods"
          type="button"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          data-testid="explore-drinks"
          type="button"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <COMP.Footer />
    </>
  );
}
