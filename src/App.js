import React from 'react';

import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import Sections from './components/Sections';
import Pagination from './components/Pagination';

import { latestDate, currDate } from './helpers/date';
import { KD_API, API_KEY, woGenre } from './helpers/api';
import { navItems } from './helpers/navItems';

import './App.css';

function App() {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const DISCOVER_API = `${KD_API}&${API_KEY}&page=${page}&${woGenre}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/tv?${API_KEY}&query="`;
  const LATEST_API = `${KD_API}&${woGenre}&first_air_date.gte=${latestDate}&first_air_date.lte=${currDate}&sort_by=first_air_date.desc&${API_KEY}&page=${page}`;
  const UPCOMING_API = `${KD_API}&${woGenre}&first_air_date.gte=${currDate}&sort_by=first_air_date.asc&${API_KEY}`;
  const WATCHED_API = `https://api.themoviedb.org/4/list/7069256?page=${page}&api_key=299cd45add63bfb2f4b534e2c123c7bb`;
  const WATCHING_API = `https://api.themoviedb.org/4/list/7069257?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`;
  const BEST_API = `https://api.themoviedb.org/4/list/7069430?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`;

  const [renderSection, setRenderSection] = React.useState('');

  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResult, setSearchResult] = React.useState();

  const [discover, setDiscover] = React.useState();
  const [latest, setLatest] = React.useState();
  const [upcoming, setUpcoming] = React.useState();
  const [watched, setWatched] = React.useState();
  const [watching, setWatching] = React.useState();

  const [best, setBest] = React.useState();

  React.useEffect(() => {
    if (searchTerm) loadSearch(SEARCH_API + searchTerm);
    renderSection === 'latest'
      ? loadResults(LATEST_API)
      : renderSection === 'upcoming'
      ? loadResults(UPCOMING_API)
      : renderSection === 'watched'
      ? loadResults(WATCHED_API)
      : renderSection === 'watching'
      ? loadResults(WATCHING_API)
      : renderSection === 'discover'
      ? loadResults(DISCOVER_API)
      : loadResults(BEST_API);
  }, [searchTerm, page, renderSection]);

  async function loadSearch(url) {
    const res = await fetch(url);
    const data = await res.json();
    const searchResults = data.results.filter(
      (result) => result.original_language === 'ko'
    );

    setSearchResult(searchResults);
  }

  async function loadResults(url) {
    const res = await fetch(url);
    const data = await res.json();

    setTotalPages(data.total_pages);

    renderSection === 'latest'
      ? setLatest(data.results)
      : renderSection === 'upcoming'
      ? setUpcoming(data.results)
      : renderSection === 'watched'
      ? setWatched(data.results)
      : renderSection === 'watching'
      ? setWatching(data.results)
      : renderSection === 'discover'
      ? setDiscover(data.results)
      : setBest(data.results);
  }

  function searchDrama(e) {
    setSearchTerm(e.target.value);
  }

  function renderPagination() {
    return renderSection === 'watched' ||
      renderSection === 'latest' ||
      renderSection === 'discover' ? (
      <section className="section-pagination">
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickPrev={() => (page === 1 ? setPage(1) : setPage(page - 1))}
          onClickNext={() =>
            page === totalPages ? setPage(page) : setPage(page + 1)
          }
        />
      </section>
    ) : (
      ''
    );
  }

  return (
    <div className="App">
      <header>
        <h1 onClick={() => window.location.reload()}>KDDb</h1>
        <nav>
          {navItems.map((item) => {
            return (
              <button
                onClick={() => {
                  setRenderSection(item.name);
                  setPage(1);
                }}
                key={item.name}
                className={item.name === renderSection ? 'active' : ''}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
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

      <main id="main">
        {searchTerm ? (
          <Sections
            drama={searchResult}
            imagePath={IMG_PATH}
            title="Search Result"
          />
        ) : renderSection === 'upcoming' ? (
          <Sections drama={upcoming} imagePath={IMG_PATH} title="Coming Soon" />
        ) : renderSection === 'watched' ? (
          <Sections drama={watched} imagePath={IMG_PATH} title="Watched" />
        ) : renderSection === 'watching' ? (
          <Sections
            drama={watching}
            imagePath={IMG_PATH}
            title="Currently Watching"
          />
        ) : renderSection === 'latest' ? (
          <Sections drama={latest} imagePath={IMG_PATH} title="New Releases" />
        ) : renderSection === 'discover' ? (
          <Sections drama={discover} imagePath={IMG_PATH} title="Discover" />
        ) : (
          <Sections
            drama={best}
            imagePath={IMG_PATH}
            title="KDDb's Best of 2020"
          />
        )}
      </main>
      {renderPagination()}
    </div>
  );
}

export default App;
