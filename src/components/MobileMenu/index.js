import { IconContext } from 'react-icons';
import './mobilemenu.css';

function MobileMenu(props) {
  const { items, onClick, selectedValue } = props;

  return (
    <div className="mobile-menu">
      {items.map((item) => {
        return (
          <button
            onClick={onClick}
            value={item.name}
            className={item.name === selectedValue ? 'active' : ''}
            key={item.name}
          >
            <IconContext.Provider
              value={{ size: '1.25em', className: 'mobile-icon' }}
            >
              <span className="mobile-menu--item-icon" value={item.name}>
                {item.icon}
              </span>
            </IconContext.Provider>
          </button>
        );
      })}
    </div>
  );
}

export default MobileMenu;
