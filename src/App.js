import React from 'react';
import './App.css';

//useState
import { useState } from 'react'; 


function Calculator() {

  const [numbers, setNumbers] = useState('');
  return (
    <>
      <div className="container">
        <div className="calculator">
        <input type='text' value={numbers}/>
      <br/>
      <div className='keypad'>
      <button 
      value="1"
      onClick={(e) => setNumbers(numbers + e.target.value)}>1</button>
      <button
      value="2"
      onClick={(e) => setNumbers(numbers + e.target.value)}>2</button>
      <button
      value="3"
      onClick={(e) => setNumbers(numbers + e.target.value)}>3</button>
      <button
      className='operator'
      value="+"
      onClick={(e) => setNumbers(numbers + e.target.value)}>+</button>
      
      <button
      value="4"
      onClick={(e) => setNumbers(numbers + e.target.value)}>4</button>
      <button
      value="5"
      onClick={(e) => setNumbers(numbers + e.target.value)}>5</button>
      <button
      value="6"
      onClick={(e) => setNumbers(numbers + e.target.value)}>6</button>
      <button
      className='operator'
      value="-"
      onClick={(e) => setNumbers(numbers + e.target.value)}>-</button>
      
      <button
      value="7"
      onClick={(e) => setNumbers(numbers + e.target.value)}>7</button>
      <button
      value="8"
      onClick={(e) => setNumbers(numbers + e.target.value)}>8</button>
      <button
      value="9"
      onClick={(e) => setNumbers(numbers + e.target.value)}>9</button>
      <button
      className='operator'
      value="*"
      onClick={(e) => setNumbers(numbers + e.target.value)}>x</button>
      
      <button

      value="0"
      onClick={(e) => setNumbers(numbers + e.target.value)}>0</button>
      <button
      value="."
      onClick={(e) => setNumbers(numbers + e.target.value)}>.</button>
      
      <button

      value="00"
      onClick={(e) => setNumbers(numbers + e.target.value)}>00</button>

      <button
      className='operator'
      value="/"
      onClick={(e) => setNumbers(numbers + e.target.value)}>÷</button>
      
      <button
      className='Special'
      value=""
      onClick={(e) => setNumbers('')
      }>C
      </button>

      <button
      className='Special'
      value="="
      onClick={(e) => setNumbers(eval(numbers))}>=</button>

    </div>
        </div>
       
      </div> 
      
    </>
  );
}

export default Calculator;