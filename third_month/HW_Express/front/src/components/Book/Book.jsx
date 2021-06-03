import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { url } from '../../helpers/constants';

function Book(props) {
  const id = props.match.params.id;
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
  };
  useEffect(() => getData(), []);

  const { title, author, bookDescr, date, image } = data;

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