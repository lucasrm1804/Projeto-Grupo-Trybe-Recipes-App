import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DoneButtonShare from '../ButtonShare/DoneButtonShare';
import shareIcon from '../../images/shareIcon.svg';

function DoneCards(props) {
  const {
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags,
    i,
  } = props;

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          className="object-contain h-48 w-full"
          src={ image }
          alt={ name }
          data-testid={ `${i}-horizontal-image` }
        />

        <span
          data-testid={ `${i}-horizontal-top-text` }
        >
          { `${nationality} - ${category}` }
          { alcoholicOrNot === 'Alcoholic' || alcoholicOrNot === 'Non alcoholic'
            ? <span>{ alcoholicOrNot }</span>
            : null }
        </span>

        <span
          data-testid={ `${i}-horizontal-name` }
        >
          { name }
        </span>
      </Link>

      <span
        data-testid={ `${i}-horizontal-done-date` }
      >
        { doneDate }
      </span>

      <div
        src={ shareIcon }
        alt="Share Icon"
      >
        <DoneButtonShare
          testId={ `${i}-horizontal-share-btn` }
        />

      </div>

      <div>
        {
          tags.map((tag) => (
            <span
              data-testid={ `${i}-${tag}-horizontal-tag` }
              key={ i }
            >
              { tag }
            </span>
          ))
        }
      </div>

      <div>
        <span>{ nationality }</span>
      </div>

    </div>
  );
}

DoneCards.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default DoneCards;
