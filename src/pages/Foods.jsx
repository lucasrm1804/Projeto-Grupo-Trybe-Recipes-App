import React, { useContext } from 'react';
import * as COMP from '../components';
import HeaderContext from '../context/Header/HeaderContext';

export default function Foods() {
  const { displaySearchBar } = useContext(HeaderContext);
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Foods" />
      </div>

      <div>
        {displaySearchBar && <COMP.SearchBar title="Foods" />}

      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
