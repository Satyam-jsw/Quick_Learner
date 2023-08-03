import React, { useState } from 'react';
import './Card.css';
import { marked } from 'marked'
const Card = ({ ques, ans }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className='head'>
            <h1>Question: </h1>
          </div>
          <div className='ques' dangerouslySetInnerHTML={{ __html: marked(ques) }} />
          <div><p className='desc'>Click to view answer</p></div>
        </div>
        <div className="flip-card-back">
          <div className='head'>
            <h1>Answer: </h1>
          </div>
          <div className='ans' dangerouslySetInnerHTML={{ __html: marked(ans) }} />
          <div><p className='desc'>Click to view question</p></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
