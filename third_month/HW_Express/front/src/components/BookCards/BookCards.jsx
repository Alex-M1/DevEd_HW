import './BookCards.scss';
import React, { useMemo } from 'react';
import CardView from './CardView';

function BookCards(props) {
  const card = useMemo(() => {
    return props.data.map(el => <CardView
      id={el.id}
      image={el.image}
      title={el.title}
      author={el.author}
      key={el.id}
    />);
  }, [props.data]);

  return (
    <div className="container">
      <div className="book-cards">
        {card}
      </div>
    </div>
  );
}

export default BookCards;