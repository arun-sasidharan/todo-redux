import React from 'react';

const Items = props => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          {props.isActive && (
            <React.Fragment>
              <button onClick={() => props.onMove(index)}>Delete</button>
              <button onClick={() => props.onComplete(index)}>Done</button>
            </React.Fragment>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Items;
