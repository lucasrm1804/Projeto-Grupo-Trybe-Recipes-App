import React, { useContext } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';

export default function Drinks() {
  const { displaySearchBar } = useContext(HeaderContext);
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Drinks" />
      </div>

      <div>
        {displaySearchBar && <COMP.SearchBar title="Drinks" />}

      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
