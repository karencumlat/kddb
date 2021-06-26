import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { genres } from '../../helpers/genres';

import Feature from '../../components/Feature';
import Blocker from '../../components/Blocker';
import Modal from '../../components/Modal';
import NoResults from '../../components/NoResults';

function Watching(props) {
  const { renderSection, dramas } = props;

  const [id, setId] = useState('');
  const [videoKey, setVideoKey] = useState();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setVideoKey();
  }, [id]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=299cd45add63bfb2f4b534e2c123c7bb&language=ko-KR`,
    })
      .then((res) => {
        const key = res.data.results.filter(
          (video) => video.type === 'Trailer'
        );

        setVideoKey(key[0].key);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <>
      {openModal === true && (
        <>
          <Modal heading="Play Trailer" onClose={() => setOpenModal(false)}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              width="auto"
              height="100%"
            />
          </Modal>
          <Blocker onClick={() => setOpenModal(false)} />
        </>
      )}

      <div className="card-group">
        {dramas.length < 1 && renderSection === 'SEARCH' ? (
          <NoResults />
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
    </>
  );
}

export default Watching;
