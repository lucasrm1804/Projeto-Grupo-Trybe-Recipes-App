import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitaAtualContext from './ReceitaAtualContex';

function ReceitaAtualProvider({ children }) {
  const [receita, setReceita] = useState([]);

  return (
    <ReceitaAtualContext.Provider
      value={ {
        receita,
        setReceita,
      } }
    >
      {children}
    </ReceitaAtualContext.Provider>
  );
}

ReceitaAtualProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReceitaAtualProvider;
