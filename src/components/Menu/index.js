import './menu.css';

function Menu(props) {
  const { items, onClick, selectedItem } = props;

  return (
    <div className="menu">
      {items.map((item) => {
        return (
          <button
            onClick={onClick}
            key={item.name}
            value={item.name}
            className={item.name === selectedItem ? 'active' : ''}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

export default Menu;
