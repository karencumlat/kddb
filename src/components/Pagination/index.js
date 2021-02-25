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
      <button
        className="pagination-previous"
        onClick={onClickPrev}
        aria-label="Previous"
        title="Previous"
      >
        <IoMdArrowDropleft />
      </button>
      <span className="divider"></span>
      <button
        className="pagination-next"
        onClick={onClickNext}
        aria-label="Next"
        title="Next"
      >
        <IoMdArrowDropright />
      </button>
    </div>
  );
}

export default Pagination;
