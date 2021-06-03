import React from 'react';
import { Link } from 'react-router-dom';

function CardView({ id, image, title, author }) {
  return (
    <Link to={`/book/${id}`} className="card">
      <img src={image} alt={title} className="card__img" />
      <p className="card__author">{author}</p>
      <p className="card__descr"><b>{title}</b></p>
    </Link>
  );
}

export default CardView;