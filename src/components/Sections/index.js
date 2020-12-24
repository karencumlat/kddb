import Card from '../Card';
import { genres } from '../../helpers/genres';
import './sections.css';

function Sections(props) {
  const { drama, imagePath, title } = props;
  return (
    <section>
      <h2>{title}</h2>
      <div className="content">
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
                <Card
                  key={name}
                  name={name}
                  imagePath={imagePath}
                  poster_path={poster_path}
                  vote_average={vote_average}
                  overview={overview}
                  genre={filterGenre
                    .toString()
                    .replace(/,/g, ' • ')
                    .replace(/Action & Adventure/g, 'Action')}
                />
              );
            })}
      </div>
    </section>
  );
}

export default Sections;
