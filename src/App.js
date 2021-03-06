import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import useDramaFetch from './helpers/useDramaFetch';
import { navItems } from './helpers/navItems';
import './App.css';

import SkeletonCard from './components/SkeletonCard';
import Search from './components/Search';

import CardGroup from './pages/CardGroup';
import Watching from './pages/Watching';

function App(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [renderSection, setRenderSection] = useState('DISCOVER'); // Set which section to render, default `discover`
  const [searchQuery, setSearchQuery] = useState('');

  // onLoad
  useEffect(() => {
    setRenderSection('DISCOVER');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('section', renderSection);
  }, [renderSection]);

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
    e.preventDefault();
    setSearchQuery(e.target.value);
    setPageNumber(1);
    setRenderSection('SEARCH');
  }

  return (
    <HashRouter>
      <div className="app">
        {/** Mobile Navigation*/}
        <header className="app-header--mobile">
          <Link to="/">
            <img
              src={logo}
              alt="KDDB logo"
              className="logo"
              onClick={() => {
                setRenderSection('DISCOVER');
              }}
            />
          </Link>
          <nav className="app-header--mobile--nav">
            <ul className="mobile-menu">
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
                      <IconContext.Provider
                        value={{ size: '1.25em', className: 'mobile-icon' }}
                      >
                        {item.icon}
                      </IconContext.Provider>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Search
            className="mobile-menu--search"
            placeholder="Search K-Drama..."
            onChange={handleSearch}
            onBlur={() => searchQuery === '' && setRenderSection('DISCOVER')}
            value={searchQuery}
            onClick={() => {
              setSearchQuery('');
              setRenderSection('DISCOVER');
            }}
          />
        </header>
        {/** Web Navigation*/}
        <header className="app-header">
          <Link to="/">
            <img
              src={logo}
              alt="KDDB logo"
              onClick={() => {
                setRenderSection('DISCOVER');
              }}
              className="logo"
            />
          </Link>
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

          <Search
            className="search"
            placeholder="Search K-Drama..."
            onChange={handleSearch}
            onBlur={() => searchQuery === '' && setRenderSection('DISCOVER')}
            value={searchQuery}
            onClick={() => {
              setSearchQuery('');
              setRenderSection('DISCOVER');
            }}
          />
        </header>

        <main id="main" className="app-main">
          <Switch>
            <Route
              path="/watching"
              exact
              render={() => (
                <Watching dramas={dramas} renderSection={renderSection} />
              )}
            />
            <Route
              path={`/${renderSection}`}
              exact
              render={() => (
                <CardGroup
                  dramas={dramas}
                  renderSection={renderSection}
                  ref={lastDramaRef}
                />
              )}
            />
            <Route exact path="/">
              <Redirect to="/discover" />
            </Route>
          </Switch>
          {loading ? <SkeletonCard /> : ''}
          {error && 'Error'}
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
