import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReceitaAtualContext from './ReceitaAtualContext';

function ReceitaAtualProvider({ children }) {
  const [receita, setReceita] = useState([]);
  const [label, setLabel] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <ReceitaAtualContext.Provider
      value={ {
        receita,
        setReceita,
        label,
        setLabel,
        toggle,
        setToggle,
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
