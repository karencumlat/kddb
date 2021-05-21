import styled from 'styled-components';
import TOKENS from '../Tokens';

export const StyledPlayButton = styled.button`
  background-color: ${TOKENS.COLOR.RED};
  color: ${TOKENS.COLOR.WHITE};
  width: fit-content;
  border-radius: 2.125rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    margin-top: 1rem;
  }
`;

export default StyledPlayButton;
