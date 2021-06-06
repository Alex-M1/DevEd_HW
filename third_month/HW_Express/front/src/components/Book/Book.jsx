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

  const { title, author, bookDescr, date, image } = book;

  return (
    <div className="conatainer">
      <img src={image} alt={title} />
      <div>
        <p>{title} | {author}</p>
        <p>{date}</p>
        <p>{bookDescr}</p>
      </div>
    </div>
  );
}

export default withRouter(Book);