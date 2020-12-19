import React from 'react';
import renderDefault from './helpers/renderDefault';
import renderSearch from './helpers/renderSearch';

import { latestDate, currDate } from './helpers/date';

import { URL_API, KD_API, API_KEY } from './helpers/api';

import './App.css';

function App() {
  const [page, setPage] = React.useState(1);

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const SEARCH_API = `https://api.themoviedb.org/3/search/tv?${API_KEY}&query="`;
  const LATEST_API = `${KD_API}first_air_date.gte=${latestDate}&first_air_date.lte=${currDate}&sort_by=first_air_date.desc&${API_KEY}`;
  const UPCOMING_API = `${KD_API}first_air_date.gte=${currDate}&sort_by=first_air_date.asc&${API_KEY}`;
  const ONAIR_API = `${URL_API}tv/on_the_air?api_key=299cd45add63bfb2f4b534e2c123c7bb`;

  const [kDramas, setKDramas] = React.useState();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [upcoming, setUpcoming] = React.useState();
  const [searchResult, setSearchResult] = React.useState();
  const [onAir, setOnAir] = React.useState();

  React.useEffect(() => {
    if (searchTerm) loadSearch(SEARCH_API + searchTerm);
    else {
      loadKDrama(LATEST_API);
      loadUpcoming(UPCOMING_API);
      loadOnAir(ONAIR_API);
    }
  }, [searchTerm]);

  async function loadSearch(url) {
    const res = await fetch(url);
    const data = await res.json();
    const searchResults = data.results.filter(
      (result) => result.original_language === 'ko'
    );

    setSearchResult(searchResults);
  }

  async function loadKDrama(url) {
    const res = await fetch(url);
    const data = await res.json();
    setKDramas(data.results);
  }

  async function loadUpcoming(url) {
    const res = await fetch(url);
    const data = await res.json();

    setUpcoming(data.results);
  }

  async function loadOnAir(url) {
    const res = await fetch(url);
    const data = await res.json();
    const onAirResults = data.results.filter(
      (result) => result.original_language === 'ko'
    );

    setOnAir(onAirResults);
  }

  function searchDrama(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1 onClick={() => window.location.reload()}>K-Drama List</h1>
        <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search..."
            onChange={searchDrama}
          />
        </form>
      </header>
      {/* <nav>
        <button>Now Airing</button>
        <button onClick={() => (page === 1 ? setPage(1) : setPage(page - 1))}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </nav> */}
      <main id="main">
        {searchTerm
          ? renderSearch(searchResult, IMG_PATH)
          : renderDefault(upcoming, IMG_PATH, kDramas, onAir)}
      </main>
    </div>
  );
}

export default App;
