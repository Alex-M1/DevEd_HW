import React, { useContext } from 'react';
import { CurrentPage } from '../App/App';

function PaginationElem({ title, onPaginationClick }) {
  const currentPage = useContext(CurrentPage);
  const paginationClick = () => {
    onPaginationClick(+title);
  };
  return (
    <li
      className={`${title === currentPage ? 'active' : ''}`}
      onClick={paginationClick}
    >
      {title}
    </li>
  );
}

export default PaginationElem;