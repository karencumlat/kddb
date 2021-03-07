import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';

import './card.css';

import { IMG_PATH } from '../../helpers/api';

function Card(props) {
  const { name, overview, poster_path, genre } = props;
  const imagePath = IMG_PATH;

  const [onOverView, setOverview] = React.useState(true);

  return (
    <div className="card" key={name}>
      <img
        src={
          JSON.stringify(poster_path).includes('null')
            ? 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80'
            : imagePath + poster_path
        }
        loading="lazy"
        alt={name}
      />
      <div className="card-info">
        <h3 title={name}>{name}</h3>
        <small>{genre ? genre : <span>&nbsp;</span>}</small>
      </div>
      {onOverView === true ? (
        <div className="overview">
          <IconContext.Provider
            value={{ size: '2em', className: 'overview-close-btn' }}
          >
            <button
              onClick={() => {
                setOverview(!onOverView);
                setTimeout(() => setOverview(true), 1000);
              }}
            >
              <IoIosCloseCircle />
            </button>
          </IconContext.Provider>
          <h3 title={name}>{name}</h3>
          <small>{genre ? genre : ''}</small>
          <p>{overview}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
