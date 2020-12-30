import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import './dropdown.css';

function Dropdown(props) {
  const { items, onClick, selectedValue } = props;

  const [toggleNav, setToggleNav] = React.useState(false);

  const handleToggle = () => setToggleNav(!toggleNav);
  console.log(selectedValue);
  return (
    <>
      <button className="trigger-button" onClick={handleToggle}>
        <span>
          {items.map((item) => (item.name === selectedValue ? item.title : ''))}
        </span>{' '}
        <span>{toggleNav ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      {toggleNav ? (
        <div className="dropdown-menu">
          {items.map((item, index) => {
            return (
              <button
                key={item.name}
                onClick={onClick}
                value={item.name}
                className={
                  item.name === selectedValue
                    ? 'dropdown-menu--item active'
                    : 'dropdown-menu--item'
                }
              >
                {item.title}
              </button>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Dropdown;
