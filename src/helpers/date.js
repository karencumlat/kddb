const current = new Date();
const yr = current.getFullYear();
const mo = current.getMonth() + 1;
const dy = current.getDate();

const delay = mo - 2;

export const latestDate =
  delay < 10 ? `${yr}-0${delay}-${dy}` : `${yr}-${delay}-${dy}`;

export const currDate = `${yr}-${mo}-${dy}`;
