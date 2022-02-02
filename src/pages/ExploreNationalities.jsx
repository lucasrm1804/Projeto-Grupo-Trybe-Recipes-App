import React from 'react';
import * as COMP from '../components';

export default function ExploreNationalities() {
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Explore Nationalities" />
      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-3 w-full flex max-w-sm ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
