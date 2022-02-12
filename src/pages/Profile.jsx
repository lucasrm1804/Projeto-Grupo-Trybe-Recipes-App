import React from 'react';
import PropTypes from 'prop-types';
import * as COMP from '../components';
import { getSavedUser } from '../services/GetLocalStorage';
import { saveUserInfos,
  saveMealsToken,
  savecocktailsToken,
} from '../services/SaveLocalStorage';

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
    <div className="w-full h-auto flex flex-col items-center justify-start">
      <div className="w-full h-auto">
        <COMP.Header
          label="Profile"
          displaySearchButton={ false }
        />
      </div>
      <div className="flex flex-col items-center mt-20 py-2">
        <img
          src="https://pbs.twimg.com/profile_images/3487195755/c01d88da00ffc3942d65cc1a6b5ced74_400x400.jpeg"
          className="rounded-full w-28 shadow-lg"
          alt="Avatar"
        />
        <span
          className="font-medium leading-tight text-3xl mt-6 text-blue-600"
          data-testid="profile-email"
        >
          {email && email.email}
        </span>
      </div>
      <div className=" w-full h-50 flex flex-col items-center mt-4">
        <div className=" w-full h-auto flex flex-col items-center justify-between">
          <COMP.ProfileButton
            className="px-6 pt-4 pb-2 "
            label="Done Recipes"
            testId="profile-done-btn"
            handleClick={ () => history.push('/done-recipes') }
          />
          <COMP.ProfileButton
            className="px-6 pt-4 pb-2 mt-4"
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
      </div>
      <div className="flex justify-center">
        <div className=" fixed bottom-0 w-full flex max-w-sm items-end ">
          <COMP.Footer />
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
