import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

export default function BotaoPerfil() {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={ () => history.push('/profile') }
      src={ profileIcon }
    >
      <img
        className="h-8"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profile icon"
      />
    </button>
  );
}
