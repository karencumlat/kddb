import StyledButton from './styles';

function Button(props) {
  const { onClick, children } = props;
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
