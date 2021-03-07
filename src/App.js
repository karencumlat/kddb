import React from 'react';

import MobileMenu from './components/MobileMenu';

import CardGroup from './components/CardGroup';
import Menu from './components/Menu';
import Pagination from './components/Pagination';

import { URL_API, KD_API, API_KEY, woGenre, EN_US } from './helpers/api';
import { currDate } from './helpers/date';
import { navItems } from './helpers/navItems';

import './App.css';

function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const SEARCH_API = `https://api.themoviedb.org/3/search/tv?${API_KEY}&${EN_US}&page=${page}&query="`;
  const DISCOVER_API = `${KD_API}&${API_KEY}&page=${page}&${woGenre}`;
  const LATEST_API = `${URL_API}tv/on_the_air?with_original_language=ko&${woGenre}&${API_KEY}&page=${page}`;
  const UPCOMING_API = `${KD_API}&${woGenre}&first_air_date.gte=${currDate}&sort_by=first_air_date.asc&${API_KEY}`;
  const WATCHING_API = `https://api.themoviedb.org/4/list/7069257?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`;
  const WATCHED_API = `https://api.themoviedb.org/4/list/7069256?page=${page}&api_key=299cd45add63bfb2f4b534e2c123c7bb`;

  // Set which section to render, default `discover`
  const [renderSection, setRenderSection] = React.useState('discover');

  //TODO: Fix searching without typing exact title
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResult, setSearchResult] = React.useState();

  //Data from API
  const [discover, setDiscover] = React.useState();
  const [latest, setLatest] = React.useState();
  const [upcoming, setUpcoming] = React.useState();
  const [watching, setWatching] = React.useState();
  const [watched, setWatched] = React.useState();

  React.useEffect(() => {
    // Loads URL to fetch data from API
    if (searchTerm) loadSearch(SEARCH_API + searchTerm);
    renderSection === 'latest'
      ? loadResults(LATEST_API)
      : renderSection === 'upcoming'
      ? loadResults(UPCOMING_API)
      : renderSection === 'watched'
      ? loadResults(WATCHED_API)
      : renderSection === 'watching'
      ? loadResults(WATCHING_API)
      : loadResults(DISCOVER_API);
  }, [searchTerm, page, renderSection]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  async function loadSearch(url) {
    const res = await fetch(url);
    const data = await res.json();
    setTotalPages(data.total_pages);

    const searchResults = data.results.filter(
      (result) => result.original_language === 'ko'
    );

    setSearchResult(searchResults);
    setLoading(false);
  }

  // Fetch API data
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
      : setDiscover(data.results);

    setLoading(false);
  }

  // function searchDrama(e) {
  //   setSearchTerm(e.target.value);
  // }

  function renderPagination() {
    return totalPages > 1 ? (
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
    <div className="app">
      {/** Mobile Navigation*/}
      <header className="app-header--mobile">
        <span className="app-header--mobile-nav">
          <h1 onClick={() => window.location.reload()}>KDDB</h1>
        </span>
        <MobileMenu
          selectedItem={renderSection}
          items={navItems}
          onClick={(e) => {
            setRenderSection(e.target.value);
            setPage(1);
          }}
        />
        {/* <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search K-Drama..."
            onChange={searchDrama}
          />
        </form> */}
      </header>
      {/** Web Navigation*/}
      <header className="app-header">
        <h1 onClick={() => window.location.reload()}>KDDB</h1>

        <nav className="app-header--nav">
          <Menu
            selectedItem={renderSection}
            items={navItems}
            onClick={(e) => {
              setPage(1);
              setRenderSection(e.target.value);
            }}
          />
        </nav>
        {/* <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search K-Drama..."
            onChange={searchDrama}
          />
        </form> */}
      </header>

      <main id="main" className="app-main">
        {searchTerm ? (
          <CardGroup drama={searchResult} title="Search Result" />
        ) : renderSection === 'upcoming' ? (
          <CardGroup drama={upcoming} title="Coming Soon" />
        ) : renderSection === 'watched' ? (
          <CardGroup drama={watched} title="Watched" />
        ) : renderSection === 'watching' ? (
          <CardGroup drama={watching} title="Watching" />
        ) : renderSection === 'latest' ? (
          <CardGroup drama={latest} title="New Releases" />
        ) : (
          <CardGroup drama={discover} title="Discover" />
        )}
      </main>
      {renderPagination()}
    </div>
  );
}

export default App;
