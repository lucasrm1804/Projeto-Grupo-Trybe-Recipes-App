import React from 'react';
import * as COMP from '../components';

export default function Foods() {
  return (
    <div>
      <div>
        <COMP.Header showSearch label="Foods" />
      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>

    </div>);
}
