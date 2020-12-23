import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import './pagination.css';

function Pagination(props) {
  const { page, totalPages, onClickPrev, onClickNext } = props;
  return (
    <div className="pagination">
      <span className="pagination-number">
        {page} of {totalPages} pages
      </span>
      <span className="divider"></span>
      <button className="pagination-previous" onClick={onClickPrev}>
        <IoMdArrowDropleft />
      </button>
      <span className="divider"></span>
      <button className="pagination-next" onClick={onClickNext}>
        <IoMdArrowDropright />
      </button>
    </div>
  );
}

export default Pagination;
