import Card from '../components/Card';

function renderDefault(upcoming, IMG_PATH, kDramas, onAir) {
  return (
    <>
      <section className="onair">
        <h3>On Air</h3>
        <div className="content">
          {onAir == null
            ? 'loading k-drama...'
            : onAir
                .filter((drama, index) => index < 5)
                .map((drama) => {
                  const { name, poster_path, vote_average, overview } = drama;

                  return (
                    <Card
                      key={name}
                      name={name}
                      IMG_PATH={IMG_PATH}
                      poster_path={poster_path}
                      vote_average={vote_average}
                      overview={overview}
                    />
                  );
                })}
        </div>
      </section>

      <section className="upcoming">
        <h3>Upcoming</h3>
        <div className="content">
          {upcoming == null
            ? 'loading k-drama...'
            : upcoming
                .filter((drama, index) => index < 5)
                .map((drama) => {
                  const { name, poster_path, vote_average, overview } = drama;

                  return (
                    <Card
                      key={name}
                      name={name}
                      IMG_PATH={IMG_PATH}
                      poster_path={poster_path}
                      vote_average={vote_average}
                      overview={overview}
                    />
                  );
                })}
        </div>
      </section>
      <section className="discover">
        <h3>Discover</h3>
        <div className="content">
          {kDramas == null
            ? 'loading k-drama...'
            : kDramas
                .filter((drama, index) => index < 5)
                .map((drama) => {
                  const { name, poster_path, vote_average, overview } = drama;
                  return (
                    <Card
                      key={name}
                      name={name}
                      IMG_PATH={IMG_PATH}
                      poster_path={poster_path}
                      vote_average={vote_average}
                      overview={overview}
                    />
                  );
                })}
        </div>
      </section>
    </>
  );
}

export default renderDefault;
