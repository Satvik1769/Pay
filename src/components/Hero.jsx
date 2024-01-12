import React, { useState } from 'react';
import Card from './Card';
import Table from './Table';
import '../App.css';

export default function Hero() {
  const [isClicked, setClicked] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    <Card title="Next Payout" value={23000} orders={23} color="blue" />,
    <Card title="Amount Pending" value="92,312.20" orders={13} color="white" />,
    <Card title="Amount Processed" value="23,92,312.19" orders={0} color="white" />,
  ];

  const handleButtonClick = () => {
    setClicked((click) => !click);
    setCurrentIndex(0); // Reset to the first card when button is clicked
  };

  const handleNextCard = () => {
    setCurrentIndex((index) => (index + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentIndex((index) => (index - 1 + cards.length) % cards.length);
  };

  return (
    <>
      <div className="m-7">
        <h1 className="mt-5 font-semibold text-lg">Overview</h1>
        <div className="flex overflow-x-auto" id="scroll">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-container ${index === currentIndex ? 'active' : ''}`}
            >
              {card}
            </div>
          ))}
        </div>
        <button
          className={`text-white font-bold py-2 px-4 rounded-full mr-5`}
          onClick={handleButtonClick}
          style={{ backgroundColor: isClicked ? '#D9D9D9' : '#146EB4' }}
        >
          {isClicked ? 'Payouts(22)' : 'Refunds(6)'}
        </button>
        <div className="flex items-center">
          <button className="flex items-center" onClick={handlePrevCard}>
            Prev
          </button>
          <button className="flex items-center" onClick={handleNextCard}>
            Next
          </button>
        </div>
      </div>
      <Table size={isClicked ? 5 : 6} />
    </>
  );
}
