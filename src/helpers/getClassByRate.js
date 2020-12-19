function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else if (vote === 0) {
    return 'default';
  } else {
    return 'red';
  }
}

export default getClassByRate;
