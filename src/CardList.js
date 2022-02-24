import React from 'react';
import Card from './Card';
import { useGameContext } from './Provider';

export default function CardList({ cards, cardLocation }) {
  const { selectedCard, setSelectedCard, setFrom } = useGameContext();
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          cardLocation={cardLocation}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}
