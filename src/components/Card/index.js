import './card.css';

function Card(props) {
  const { name, overview, imagePath, poster_path, genre } = props;
  return (
    <div className="movie" key={name}>
      <img
        src={
          JSON.stringify(poster_path).includes('null')
            ? 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
            : imagePath + poster_path
        }
        alt={name}
      />
      <div className="movie-info">
        <h3>{name}</h3>
        <small>{genre}</small>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
}

export default Card;
