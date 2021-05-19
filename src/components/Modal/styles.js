import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledModal = styled.div`
  background: ${TOKENS.COLOR.BLACK};
  color: ${TOKENS.COLOR.WHITE};
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;

  .close-btn {
    position: absolute;
    top: 0.125em;
    right: 0.5em;
    padding: 0;
    font-size: 2em;
  }

  .close-btn-icon{
    color: ${TOKENS.COLOR.WHITE}
  }

  h3 {
    margin: 1em;
  }

  .modal-content {
    height: 100%;
  }

  .modal-content > * {
    flex: 1;
  }

  }
`;

export default StyledModal;
