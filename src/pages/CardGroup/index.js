import React from 'react';

import { genres } from '../../helpers/genres';

import Card from '../../components/Card';
import NoResults from '../../components/NoResults';

const CardGroup = React.forwardRef((props, ref) => {
  const { renderSection, dramas } = props;
  return (
    <>
      <div className="card-group">
        {dramas.length < 1 && renderSection === 'SEARCH' ? (
          <NoResults />
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

export default CardGroup;
