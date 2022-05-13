import React, { useState } from 'react';
import './styles.css'

export default function Contador() {
  const [count, setCount] = useState(0)

  function diminuirClick() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className='container'>
        <h1> Você clicou: {count}</h1>
        <div>
          <button onClick={diminuirClick}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  );
}