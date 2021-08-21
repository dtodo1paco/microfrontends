import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Your click count: <strong>{count}</strong></p>
      <p>
        Click + to increment count
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <p>
        Click - to decrement count
        <button onClick={() => setCount(count - 1)}>-</button>
      </p>
    </div>
  );
};

export default Counter;