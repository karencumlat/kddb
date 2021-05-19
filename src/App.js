import React, { useState, useRef, useCallback, useEffect } from 'react';

import logo from './logo.svg';
import useDramaFetch from './helpers/useDramaFetch';
import { navItems } from './helpers/navItems';
import { genres } from './helpers/genres';
import './App.css';

import MobileMenu from './components/MobileMenu';
import Card from './components/Card';
import Feature from './components/Feature';
import Menu from './components/Menu';

import Discover from './pages/Discover';
import Latest from './pages/Latest';
import Upcoming from './pages/Upcoming';
import Watching from './pages/Watching';
import Watched from './pages/Watched';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function App(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [renderSection, setRenderSection] = useState(''); // Set which section to render, default `discover`
  const [searchQuery, setSearchQuery] = useState('');

  const { dramas, hasMore, loading, error } = useDramaFetch(
    pageNumber,
    renderSection,
    searchQuery
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

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setPageNumber(1);
    setRenderSection('SEARCH');
  }

  useEffect(() => {
    setRenderSection(window.localStorage.getItem('section'));
    console.log(window.localStorage.getItem('section'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('section', renderSection);
  }, [renderSection]);

  return (
    <Router>
      <Switch>
        <Route exact path="/kddb">
          <Redirect to="/discover" />
        </Route>
        <Route exact path="/">
          <Redirect to="/discover" />
        </Route>
        <div className="app">
          <header className="app-header">
            <img
              src={logo}
              alt="KDDB logo"
              onClick={() => window.location.reload()}
              className="logo"
            />
            <nav className="app-header--nav">
              <ul className="menu">
                {navItems.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => {
                          setPageNumber(1);
                          setRenderSection(item.name);
                        }}
                        className={item.name === renderSection ? 'active' : ''}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <input
              type="text"
              id="search"
              className="search"
              placeholder="Search K-Drama..."
              onChange={handleSearch}
              onBlur={() => searchQuery === '' && setRenderSection('DISCOVER')}
            />
          </header>

          <main id="main" className="app-main">
            <Route path="/discover">
              <Discover
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path="/latest">
              <Latest
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path="/upcoming">
              <Upcoming
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path="/watching">
              <Watching
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path="/watched">
              <Watched
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>{' '}
            <div>{loading === true ? 'Loading K-drama...' : ''}</div>
            <div>{error && 'Error'}</div>
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
