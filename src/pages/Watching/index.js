import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { genres } from '../../helpers/genres';

import Feature from '../../components/Feature';
import Modal from '../../components/Modal';

function Watching(props) {
  const { renderSection, dramas } = props;

  const [id, setId] = useState('');
  const [videoKey, setVideoKey] = useState();
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setVideoKey();
  }, [id]);

  useEffect(() => {
    let cancel;

    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=299cd45add63bfb2f4b534e2c123c7bb&language=ko-KR`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.table(res.data);
        const key = res.data.results.filter(
          (video) => video.type === 'Trailer'
        );
        console.log(key[0]);
        setVideoKey(key[0].key);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [id]);

  return (
    <>
      {openModal === true && (
        <Modal heading="Play Trailer" onClose={() => setOpenModal(false)}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            width="auto"
            height="100%"
          />
        </Modal>
      )}
      <h2>{renderSection}</h2>
      <div className="card-group">
        {dramas.length < 1 && renderSection === 'SEARCH' ? (
          <>
            TODO: Create Error (No results) Component
            <p> no result found</p>
          </>
        ) : (
          dramas.map((drama, index) => {
            const { name, overview, genre_ids, id } = drama;
            const genre = genres.map((g) =>
              genre_ids.includes(g.id) === true ? g.name : ''
            );
            const filterGenre = genre.filter((g) => g !== '');

            return (
              <Feature
                key={name}
                name={name}
                overview={overview}
                genre={filterGenre
                  .toString()
                  .replace(/,/g, ' • ')
                  .replace(/Action & Adventure/g, 'Action')}
                backdrop_path={drama.backdrop_path}
                first_air_date={drama.first_air_date}
                id={id}
                onPlayClick={() => {
                  setId(id);
                  setOpenModal(true);
                }}
              />
            );
          })
        )}
      </div>
      {error && 'Error'}
    </>
  );
}

export default Watching;
