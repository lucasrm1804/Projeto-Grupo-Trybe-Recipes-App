import React from 'react';
import PropTypes from 'prop-types';

export default function FilterButtonsFoods(props) {
  const { categoryName } = props;

  return (

    <div>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
      >
        {categoryName}
      </button>

    </div>);
}

FilterButtonsFoods.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
