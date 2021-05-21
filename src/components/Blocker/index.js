import StyledBlocker from './styles';
function Blocker(props) {
  const { onClick } = props;
  return <StyledBlocker onClick={onClick} {...props} />;
}

export default Blocker;
