import Card from '../Card';
import { genres } from '../../helpers/genres';

import './cardgroup.css';

function CardGroup(props) {
  const { drama, title } = props;
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="card-group">
        {drama == null
          ? 'loading k-drama...'
          : drama.length === 0
          ? 'search again...'
          : drama.map((drama) => {
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
            })}
      </div>
    </div>
  );
}

export default CardGroup;
