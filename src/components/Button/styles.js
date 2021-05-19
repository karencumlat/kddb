import styled, { css } from 'styled-components';
import TOKENS from '../Tokens';

const StyledButton = styled.button`
  padding: 0.5em;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  ${(props) =>
    props.primary &&
    css`
      background: ${TOKENS.COLOR.GREEN};
      color: ${TOKENS.COLOR.WHITE};
    `};

  ${(props) =>
    props.secondary &&
    css`
      background: ${TOKENS.COLOR.BLACK};
      color: ${TOKENS.COLOR.WHITE};
    `};

  ${(props) =>
    props.tertiary &&
    css`
      background: ${TOKENS.COLOR.WHITE};
      border: ${TOKENS.COLOR.BLACK} 1px solid;
      color: ${TOKENS.COLOR.BLACK};

      &:hover {
        background: ${TOKENS.COLOR.GREEN};
        color: ${TOKENS.COLOR.WHITE};
        border-color: ${TOKENS.COLOR.GREEN};
      }
    `};

  ${(props) =>
    props.ghost &&
    css`
      color: ${TOKENS.COLOR.BLACK};

      &:hover {
        color: ${TOKENS.COLOR.GREEN};
      }
    `};
`;

export default StyledButton;
