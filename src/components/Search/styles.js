import styled from 'styled-components';
import TOKENS from '../Tokens';

export const SearchInput = styled.input`
  background-color: ${TOKENS.COLOR.GRAY90};
  border-radius: 50px;
  border: 0.125rem solid transparent;
  font-family: inherit;
  padding: 0.5rem 1rem;
  color: ${TOKENS.COLOR.WHITE};
  width:100%;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  :focus {
    outline:none;
    color: ${TOKENS.COLOR.WHITE};
    border: 0.125rem solid ${TOKENS.COLOR.WHITE};
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
`;

export const Icon = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 0.5rem;
  color: ${TOKENS.COLOR.GRAY};
  > button {
    color: ${TOKENS.COLOR.GRAY};
  }
`;

const StyledSearch = styled.div`
  display: flex;
  position: relative;
  min-width: 250px;
`;
export default StyledSearch;
