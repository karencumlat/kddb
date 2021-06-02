import React, { useState } from 'react';
import { IoMdSearch, IoMdClose } from 'react-icons/io';

import StyledSearch, { SearchInput, Icon } from './styles';

function Search(props) {
  const { onChange, onBlur, onClick, placeholder, value } = props;
  const [onFocus, setFocus] = useState(false);

  function handleBlur() {
    onBlur();
    value === '' ? setFocus(false) : setFocus(true);
  }

  function handleClick() {
    onClick();
    setFocus(false);
  }

  return (
    <StyledSearch {...props}>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => setFocus(true)}
      />

      <Icon>
        {onFocus ? (
          <button onClick={handleClick}>
            <IoMdClose size={'1.5em'} />
          </button>
        ) : (
          <IoMdSearch size={'1.5em'} />
        )}
      </Icon>
    </StyledSearch>
  );
}

export default Search;
