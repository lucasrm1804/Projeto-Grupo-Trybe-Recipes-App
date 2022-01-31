import React from 'react';
import PropTypes from 'prop-types';
import * as COMP from '../components';
import getSavedUser from '../services/getUser';
import { saveUserInfos,
  saveMealsToken,
  savecocktailsToken,
} from '../services/SaveLoginInfo';

function Profile(props) {
  const { history } = props;
  const email = JSON.parse(getSavedUser());

  const handleClick = () => {
    saveUserInfos('');
    saveMealsToken('');
    savecocktailsToken('');
    history.push('/');
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div>
        <COMP.Header
          label="Profile"
          displaySearchButton={ false }
        />
      </div>
      <div>
        <span data-testid="profile-email">{email.email}</span>
      </div>
      <div className="flex flex-col items-center justify-between">
        <COMP.ProfileButton
          className="px-6 pt-4 pb-2"
          label="Done Recipes"
          testId="profile-done-btn"
          handleClick={ () => history.push('/done-recipes') }
        />
        <COMP.ProfileButton
          className="px-6 pt-4 pb-2"
          label="Favorite Recipes"
          testId="profile-favorite-btn"
          handleClick={ () => history.push('/favorite-recipes') }
        />
        <COMP.ProfileButton
          label="Logout"
          testId="profile-logout-btn"
          handleClick={ handleClick }
        />
      </div>
      <div>
        <COMP.Footer />
      </div>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
};

export default Profile;
