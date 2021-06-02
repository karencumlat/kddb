import { IoIosFilm } from 'react-icons/io';

import './noresults.css';

function NoResults(props) {
  return (
    <div className="container--no-results">
      <i className="fc-film-reel">
        <IoIosFilm className="spin" size="8rem" />
      </i>
      <h2>No Results Found</h2>
      <small>
        We could not find what you are looking for. <br />
        Please try again or discover new KDramas from our full list.
      </small>
    </div>
  );
}

export default NoResults;
