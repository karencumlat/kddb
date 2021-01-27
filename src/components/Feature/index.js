import React from 'react';

import { IMG_PATH } from '../../helpers/api';

import './feature.css';

function Feature(props) {
  const { name, overview, genre, backdrop_path, first_air_date } = props;
  const imagePath = IMG_PATH;

  return (
    <div className="watching-container">
      <div
        className="watching--backdrop"
        style={{
          backgroundImage: `url(${imagePath + backdrop_path})`,
        }}
      >
        <div className="backdrop--info">
          <h4 className="backdrop--info-title">{name}</h4>
          <small className="backdrop--info-subtitle">
            {first_air_date.substring(0, 4)} • {genre}
          </small>
          <p className="backdrop--info-overview">{overview}</p>
        </div>
      </div>
      <div className="backdrop--info-mobile">
        <h4 className="backdrop--info-title">{name}</h4>
        <small className="backdrop--info-subtitle">
          {first_air_date.substring(0, 4)} • {genre}
        </small>
        <p className="backdrop--info-overview">{overview}</p>
      </div>
    </div>
  );
}

export default Feature;
