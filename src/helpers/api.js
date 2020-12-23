export const woGenre = 'without_genres=16|99|10762|10763|10764|10767';

export const URL_API = 'https://api.themoviedb.org/3/';

export const KD_API = `${URL_API}discover/tv?with_original_language=ko`;

export const API_KEY = 'api_key=299cd45add63bfb2f4b534e2c123c7bb';

// const API = [
//   {
//     name: ' SEARCH_API',
//     tag: 'search',
//     url: `https://api.themoviedb.org/3/search/tv?${API_KEY}&query="`,
//   },
//   {
//     name: ' LATEST_API',
//     tag: 'latest',
//     url: `${KD_API}&${woGenre}&first_air_date.gte=${latestDate}&first_air_date.lte=${currDate}&sort_by=first_air_date.desc&${API_KEY}`,
//   },
//   {
//     name: ' UPCOMING_API',
//     tag: 'upcoming',
//     url: `${KD_API}&${woGenre}&first_air_date.gte=${currDate}&sort_by=first_air_date.asc&${API_KEY}`,
//   },
//   {
//     name: ' ONAIR_API',
//     tag: 'onair',
//     url: `${URL_API}tv/on_the_air?${API_KEY}`,
//   },
//   {
//     name: ' WATCHED_API',
//     tag: 'watched',
//     url: `https://api.themoviedb.org/4/list/7069256?page=${page}&api_key=299cd45add63bfb2f4b534e2c123c7bb`,
//   },
//   {
//     name: ' WATCHING_API',
//     tag: 'watching',
//     url: `https://api.themoviedb.org/4/list/7069257?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`,
//   },
//   {
//     name: ' BEST20_API',
//     tag: 'best20',
//     url: `https://api.themoviedb.org/4/list/7069430?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`,
//   },
//   {
//     name: ' ACTION_API',
//     tag: 'action',
//     url: `${KD_API}&${API_KEY}&with_genres=${actionAdventure}`,
//   },
//   {
//     name: ' COMEDY_API',
//     tag: 'comedy',
//     url: `${KD_API}&${API_KEY}&with_genres=${comedy}`,
//   },
// ];
