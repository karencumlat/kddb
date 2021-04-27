import React, { useState, useRef, useCallback } from 'react';

import useDramaFetch from './helpers/useDramaFetch';
import { navItems } from './helpers/navItems';
import { genres } from './helpers/genres';
import './App.css';

import MobileMenu from './components/MobileMenu';
import Card from './components/Card';
import Feature from './components/Feature';
import Menu from './components/Menu';

export default function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [renderSection, setRenderSection] = React.useState('DISCOVER'); // Set which section to render, default `discover`

  const { dramas, hasMore, loading, error } = useDramaFetch(
    pageNumber,
    renderSection
  );

  const observer = useRef();
  const lastDramaRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore === true) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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
            setPageNumber(1);
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
              setPageNumber(1);
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
        <h2>{renderSection}</h2>
        <div className="card-group">
          {dramas.map((drama, index) => {
            const {
              name,
              poster_path,
              vote_average,
              overview,
              genre_ids,
            } = drama;
            const genre = genres.map((g) =>
              genre_ids.includes(g.id) === true ? g.name : ''
            );
            const filterGenre = genre.filter((g) => g !== '');
            if (renderSection === 'WATCHING') {
              return (
                <Feature
                  key={name}
                  name={name}
                  overview={overview}
                  genre={filterGenre
                    .toString()
                    .replace(/,/g, ' • ')
                    .replace(/Action & Adventure/g, 'Action')}
                  backdrop_path={drama.backdrop_path}
                  first_air_date={drama.first_air_date}
                />
              );
            }
            if (dramas.length === index + 1) {
              return (
                <div
                  className="card-group--content"
                  key={name}
                  ref={lastDramaRef}
                >
                  <Card
                    name={name}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    overview={overview}
                    genre={filterGenre
                      .toString()
                      .replace(/,/g, ' • ')
                      .replace(/Action & Adventure/g, 'Action')}
                  />
                </div>
              );
            } else {
              return (
                <div className="card-group--content" key={name}>
                  <Card
                    name={name}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    overview={overview}
                    genre={filterGenre
                      .toString()
                      .replace(/,/g, ' • ')
                      .replace(/Action & Adventure/g, 'Action')}
                  />
                </div>
              );
            }
          })}
        </div>

        <div>{loading === true ? 'Loading K-drama...' : ''}</div>
        <div>{error && 'Error'}</div>
      </main>
    </div>
  );
}
