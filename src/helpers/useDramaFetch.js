import { useEffect, useState } from 'react';
import axios from 'axios';

import { URL_API, KD_API, API_KEY, woGenre } from './api';
import { currDate } from './date';

function useDramaFetch(pageNumber, renderSection, searchQuery) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dramas, setDramas] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setDramas([]);
  }, [renderSection, searchQuery]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    const API_URL = {
      SEARCH: `https://api.themoviedb.org/3/search/tv?${API_KEY}&page=${pageNumber}&query=${searchQuery}"`,
      DISCOVER: `${KD_API}&${API_KEY}&page=${pageNumber}&${woGenre}`,
      LATEST: `${URL_API}tv/on_the_air?with_original_language=ko&${woGenre}&${API_KEY}&page=${pageNumber}`,
      UPCOMING: `${KD_API}&${woGenre}&first_air_date.gte=${currDate}&sort_by=first_air_date.asc&${API_KEY}&page=${pageNumber}`,
      WATCHING: `https://api.themoviedb.org/4/list/7069257?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb`,
      WATCHED: `https://api.themoviedb.org/4/list/7069256?page=${pageNumber}&api_key=299cd45add63bfb2f4b534e2c123c7bb`,
    };

    axios({
      method: 'GET',
      url: API_URL[renderSection],
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const searchResults = res.data.results.filter(
          (result) => result.original_language === 'ko'
        );

        if (renderSection === 'SEARCH') {
          setDramas((prevDramas) => {
            return [...new Set([...prevDramas, ...searchResults])];
          });
        } else {
          setDramas((prevDramas) => {
            return [...new Set([...prevDramas, ...res.data.results])];
          });
        }
        setHasMore(res.data.total_pages > res.data.page);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber, renderSection, searchQuery]);
  return { loading, error, dramas, hasMore };
}

export default useDramaFetch;
