import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function DetailBody(props) {
  const { ingredients, instructions, quantity, id, label } = props;
  const history = useHistory();
  // const [redirect, setRedirect] = useState(false);
  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
      <h3 className="font-bold">Ingredients</h3>
      <ol>
        {
          ingredients.map((ing, i) => (
            ing && (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                { `${ing} - ${quantity[i]}` }
              </li>
            )
          ))
        }
      </ol>
      <h3 className="font-bold">Instructions.</h3>
      <p data-testid="instructions">{instructions}</p>

      {/* <Link to={ `/${label}/${id}/in-progress` }> */}
      <button
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/${label}/${id}/in-progress`) }
        type="button"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
        border-b-4 border-blue-700 hover:border-blue-500 rounded "
      >
        Iniciar Receita
      </button>

      {/* </Link> */}

      {/* {redirect && <Redirect to={ `/${label}/${id}/in-progress` } /> } */}
    </div>

  );
}

DetailBody.propTypes = {
  ingredients: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

};
