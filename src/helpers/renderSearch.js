import Card from '../components/Card';

function renderSearch(searchResult, IMG_PATH) {
  return (
    <section className="search">
      <h3>Search Result</h3>
      <div className="content">
        {searchResult == null
          ? 'loading k-drama...'
          : searchResult.length === 0
          ? 'search again...'
          : searchResult
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
  );
}

export default renderSearch;
