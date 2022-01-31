import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContext from './HeaderContext';

function HeaderProvider({ children }) {
  const [displaySearchButton, setDisplaySearchButton] = useState(false);
  return (
    <HeaderContext.Provider
      value={ {
        displaySearchButton,
        setDisplaySearchButton,

      } }
    >
      {' '}
      {children}
      {' '}

    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
