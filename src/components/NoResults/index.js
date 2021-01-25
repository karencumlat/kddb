import { IoIosFilm } from 'react-icons/io';

import './noresults.css';

function NoResults() {
  return (
    <div className="container--no-results">
      <i className="fc-film-reel">
        <IoIosFilm className="spin" />
      </i>
      <h2>No Results Found</h2>
      <small>
        We could not find what you are looking for. <br />
        Please try again or discover new KDramas from our full list.
      </small>
      <button
        onClick={() => window.location.reload()}
        className="no-results--btn"
      >
        Discover K-Dramas
      </button>
    </div>
  );
}

export default NoResults;
