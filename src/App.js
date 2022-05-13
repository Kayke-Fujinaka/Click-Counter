import React, { useState } from 'react';
import './styles.css'

export default function Contador() {
  const [count, setCount] = useState(0)
  const [vezes, setVezes] = useState("")

  function aumentarClick() {
    setCount(count + 1)
    if (count === 0) {
      setVezes("vez")
    } else if (count > 0) {
      setVezes("vezes")
    }
    return
  }

  function diminuirClick() {
    if (count > 0) {
      setCount(count - 1)
    }
    if (count === 1) {
      setVezes("")
    } else if (count === 2) {
      setVezes("vez")
    }
  }



  return (
    <>
      <div className='container'>
        <h1> Você clicou: {count} {vezes}</h1>
        <div>
          <button onClick={diminuirClick}>-</button>
          <button onClick={aumentarClick}>+</button>
        </div>
      </div>
    </>
  );
}