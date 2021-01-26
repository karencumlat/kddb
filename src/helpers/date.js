const current = new Date();
const yr = current.getFullYear();
const mo = current.getMonth() + 1;
const dy = current.getDate();

let day;
let delay;

if (dy < 10) {
  day = `0${dy}`;
} else {
  day = dy;
}

if (mo === 1) {
  delay = 12;
} else {
  delay = mo - 1;
}

export const latestDate =
  delay < 10 ? `${yr}-0${delay}-${day}` : `${yr}-${delay}-${day}`;

export const currDate = mo < 10 ? `${yr}-0${mo}-${day}` : `${yr}-${mo}-${day}`;
