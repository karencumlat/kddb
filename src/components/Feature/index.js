import React from 'react';

import './feature.css';

function Feature(props) {
  const { title, drama } = props;

  const id = drama[0].id;

  const [dramaID, setDramaID] = React.useState();
  console.log(id);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Feature;
