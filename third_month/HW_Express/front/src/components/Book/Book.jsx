import './Book.scss';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { url } from '../../helpers/constants';

function Book(props) {
  const [book, setBook] = useState({});
  const id = props.match.params.id;
  const getBookData = async () => {
    const res = await fetch(`${url}?id=${id}`);
    const data = await res.json();
    setBook(data.books[0]);
  };
  useEffect(() => {
    getBookData();
  }, []);

  const { title, author, bookDescr, writeDate, image } = book;
  return (
    <div className="container">
      <div className="book">
        <img src={image} alt={title} />
        <div>
          <h1>{title} | {author}</h1>
          <p className="book__date">{writeDate} г.</p>
          <p className="book__descr">{bookDescr}</p>
        </div>
      </div>

    </div>
  );
}

export default withRouter(Book);