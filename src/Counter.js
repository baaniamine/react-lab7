import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Compteur : {count}</p>
      <button
        type="button"
        className="button button--primary"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
