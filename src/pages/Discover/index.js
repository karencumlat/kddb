import React from 'react';

import { genres } from '../../helpers/genres';

import Card from '../../components/Card';

const Discover = React.forwardRef((props, ref) => {
  const { renderSection, dramas } = props;
  return (
    <>
      <h2>{renderSection}</h2>
      <div className="card-group">
        {dramas.length < 1 && renderSection === 'SEARCH' ? (
          <>
            TODO: Create Error (No results) Component
            <p> no result found</p>
          </>
        ) : (
          dramas.map((drama, index) => {
            const { name, poster_path, vote_average, overview, genre_ids } =
              drama;
            const genre = genres.map((g) =>
              genre_ids.includes(g.id) === true ? g.name : ''
            );
            const filterGenre = genre.filter((g) => g !== '');

            if (dramas.length === index + 1) {
              return (
                <div className="card-group--content" key={name} ref={ref}>
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
          })
        )}
      </div>
    </>
  );
});

export default Discover;
