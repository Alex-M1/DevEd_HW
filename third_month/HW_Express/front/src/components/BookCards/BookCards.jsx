import './BookCards.scss';
import React, { useMemo } from 'react';
import CardView from './CardView';
import Pagination from '../Pagination';


function BookCards(props) {
  const card = useMemo(() => {
    return props.data.books.map(el => <CardView
      id={el.id}
      image={el.image}
      title={el.title}
      author={el.author}
      key={el.id}
    />);
  }, [props.data.books]);


  return (
    <div className="container">
      <div className="book-cards">
        {card}
      </div>
      <Pagination
        pages={props.data.pages}
        onPaginationClick={props.onPaginationClick}
      />
    </div>
  );
}

export default BookCards;