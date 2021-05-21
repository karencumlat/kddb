import { IoIosPlayCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';

import StyledPlayButton from './styles';

function PlayButton(props) {
  const { onClick, title } = props;
  return (
    <IconContext.Provider value={{ size: '1.5em', className: 'play-btn-icon' }}>
      <StyledPlayButton onClick={onClick} className="play-btn">
        <i>
          <IoIosPlayCircle />
        </i>
        {title}
      </StyledPlayButton>
    </IconContext.Provider>
  );
}

export default PlayButton;
