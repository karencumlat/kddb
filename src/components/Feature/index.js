import React from 'react';
import NoResults from '../NoResults';

import { URL_API, API_KEY, EN_US } from '../../helpers/api';

import './feature.css';

function Feature(props) {
  const i = localStorage.getItem('featID');

  const [isLoading, setLoading] = React.useState(true);
  const { title, id } = props;
  const [info, setInfo] = React.useState();
  const [credits, setCredits] = React.useState();

  // const FEAT_API = `${URL_API}tv/${i}?${API_KEY}${EN_US}`;
  // const CAST_API = `${URL_API}tv/${i}/credits?${API_KEY}${EN_US}`;

  React.useEffect(() => {
    loadInfo();
  }, [i]);

  async function loadInfo() {
    Promise.all([
      fetch(`${URL_API}tv/${i}?${API_KEY}${EN_US}`),
      fetch(`${URL_API}tv/${i}/credits?${API_KEY}${EN_US}`),
    ])
      .then(function (res) {
        return Promise.all(
          res.map(function (res) {
            return res.json();
          })
        );
      })
      .then(function (data) {
        data.forEach((d, index) => {
          if (index === 0) {
            setInfo(d);
          } else {
            setCredits(d);
          }
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    setLoading(false);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function render() {
    if (info !== null) {
      console.log(info.name);
    } else {
      <NoResults />;
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      {render()}
    </div>
  );
}

export default Feature;
