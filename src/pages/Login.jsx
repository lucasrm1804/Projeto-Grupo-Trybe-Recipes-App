import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as COMP from '../components';
import LoginContext from '../context/Login/LoginContext';
import { saveUserInfos,
  saveMealsToken,
  savecocktailsToken,
} from '../services/SaveLocalStorage';

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    buttonLoginDisabled,
    setButtonLoginDisabled,
  } = useContext(LoginContext);

  const { history } = props;

  useEffect(() => {
    const validation = /\S+@\S+\.\S+/;
    const SEVEN = 7;
    if (validation.test(email) && SEVEN <= password.length) {
      setButtonLoginDisabled(false);
    } else {
      setButtonLoginDisabled(true);
    }
  }, [email, password, setButtonLoginDisabled]);

  const handleClick = () => {
    const user = { email };
    saveUserInfos(JSON.stringify(user));
    saveMealsToken(1);
    savecocktailsToken(1);
    history.push('/foods');
  };

  return (
    <div className="login w-full h-full">
      <div className="w-full h-full flex flex-col items-center py-40">
        <div className="w-full h-28 flex flex-col items-center justify-between">
          <COMP.LoginInput
            placeholder="Digite seu email"
            type="text"
            id="email"
            testId="email-input"
            value={ email }
            handleChange={ setEmail }
          />
          <COMP.LoginInput
            placeholder="digite sua senha"
            type="password"
            id="password"
            testId="password-input"
            value={ password }
            handleChange={ setPassword }
          />
        </div>
        <div className="w-full h-36 flex flex-col items-center justify-between">
          <COMP.LoginButton
            label="Play"
            testId="login-submit-btn"
            isDisabled={ buttonLoginDisabled }
            handleClick={ handleClick }
          />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
