import React from 'react';
import Items from './items';

const Card = props => {
  return (
    <div className="cards" style={{ background: props.bgColor }}>
      <h1>{props.title}</h1>
      <Items
        items={props.items}
        onMove={props.onCardAction}
        onComplete={props.onComplete}
        isActive={props.title === 'active'}
      />
    </div>
  );
};

export default Card;
