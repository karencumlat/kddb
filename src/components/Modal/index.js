import { IoIosClose } from 'react-icons/io';
import { IconContext } from 'react-icons';
import Button from '../Button';

import StyledModal from './styles';
function Modal(props) {
  const { onClose, heading, children } = props;

  return (
    <StyledModal {...props}>
      <div>
        <h3>{heading}</h3>
        <IconContext.Provider
          value={{ size: '2em', className: 'close-btn-icon' }}
        >
          <Button onClick={onClose} ghost className="close-btn">
            <IoIosClose />
          </Button>
        </IconContext.Provider>
      </div>

      <div className="modal-content">{children}</div>
    </StyledModal>
  );
}

export default Modal;
