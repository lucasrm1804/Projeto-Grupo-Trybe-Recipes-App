import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContext from './HeaderContext';

function HeaderProvider({ children }) {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  return (
    <HeaderContext.Provider
      value={ {
        displaySearchBar,
        setDisplaySearchBar,
      } }
    >
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
