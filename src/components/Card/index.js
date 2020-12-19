import getClassByRate from '../../helpers/getClassByRate';
import './card.css';

function Card(props) {
  return (
    <div className="movie" key={props.name}>
      <img
        src={
          JSON.stringify(props.poster_path).includes('null')
            ? 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
            : props.IMG_PATH + props.poster_path
        }
        alt={props.name}
      />
      <div className="movie-info">
        <h3>{props.name}</h3>
        <span className={getClassByRate(props.vote_average)}>
          {props.vote_average === 0 ? 'NR' : props.vote_average}
        </span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {props.overview}
      </div>
    </div>
  );
}

export default Card;
