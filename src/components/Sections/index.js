import Card from '../Card';
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
              const { name, poster_path, vote_average, overview } = drama;
              return (
                <Card
                  key={name}
                  name={name}
                  IMG_PATH={imagePath}
                  poster_path={poster_path}
                  vote_average={vote_average}
                  overview={overview}
                />
              );
            })}
      </div>
    </section>
  );
}

export default Sections;
