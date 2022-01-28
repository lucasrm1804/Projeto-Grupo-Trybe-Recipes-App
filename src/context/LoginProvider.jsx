import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLoginDisabled, setButtonLoginDisabled] = useState(true);

  return (
    <LoginContext.Provider
      value={ {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        buttonLoginDisabled,
        setButtonLoginDisabled,
      } }
    >
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
