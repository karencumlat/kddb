import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import useDramaFetch from './helpers/useDramaFetch';
import { navItems } from './helpers/navItems';
import './App.css';

import SkeletonCard from './components/SkeletonCard';

import CardGroup from './pages/CardGroup';
import Watching from './pages/Watching';

function App(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [renderSection, setRenderSection] = useState('DISCOVER'); // Set which section to render, default `discover`
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
      <div className="app">
        {/** Mobile Navigation*/}
        <header className="app-header--mobile">
          <img
            src={logo}
            alt="KDDB logo"
            onClick={() => window.location.reload()}
            className="logo"
          />
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
          <input
            type="text"
            id="mobile-search"
            className="search"
            placeholder="Search K-Drama..."
            onChange={handleSearch}
            onBlur={() => searchQuery === '' && setRenderSection('DISCOVER')}
          />
        </header>
        {/** Web Navigation*/}
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
          <Switch>
            <Route path="/kddb/watching">
              <Watching
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path={`/kddb/${renderSection}`}>
              <CardGroup
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
            <Route path="/kddb">
              <CardGroup
                dramas={dramas}
                renderSection={renderSection}
                ref={lastDramaRef}
              />
            </Route>
          </Switch>
          {loading ? <SkeletonCard /> : ''}
          {error && 'Error'}
        </main>
      </div>
    </Router>
  );
}

export default App;
