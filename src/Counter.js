import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Compteur : {count}</p>
      <button
        type="button"
        className="button button--primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <p className="counter__hint">
        Chaque clic incrmente le compteur sans recharger l&apos;interface.
      </p>
    </div>
  );
}

export default Counter;
