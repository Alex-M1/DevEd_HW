import React, { useContext, useMemo } from 'react';
import { CurrentPage } from '../App/App';
import './Pagination.scss';
import PaginationElem from './PaginationElem';

function Pagination({ pages, onPaginationClick }) {
  const currentPage = useContext(CurrentPage);
  const setElements = () => {
    let pagesEl = [];
    for (let i = 1; i <= pages; i++) {
      pagesEl[i - 1] = (
        <PaginationElem
          key={i}
          title={i}
          onPaginationClick={onPaginationClick}
        />
      );
    }
    return pagesEl;
  };
  const elems = useMemo(setElements, [pages]);
  const prevClick = () => {
    if (currentPage > 1) {
      onPaginationClick(currentPage - 1);
    }
  };
  const nextClick = () => {
    if (currentPage < pages) {
      onPaginationClick(currentPage + 1);
    }
  };

  return (
    <ul className="pagination">
      <li onClick={prevClick}>prev</li>
      {elems}
      <li onClick={nextClick}>next</li>
    </ul>
  );
}

export default Pagination;