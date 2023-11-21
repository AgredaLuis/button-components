// src/pages/HomePage.tsx
import React from 'react';
import CardList from '@/components/molecules/CardList';

const CartListPage: React.FC = () => {
  const sampleCards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Lista de cartas</h1>
      <CardList cards={sampleCards} />
    </div>
  );
};

export default CartListPage;
