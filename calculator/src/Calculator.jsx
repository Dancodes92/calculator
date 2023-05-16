import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState('');

  const performOperation = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 !== 0) {
          setResult(num1 / num2);
        } else {
          alert('Error: Division by zero is not allowed.');
        }
        break;
      default:
        return;
    }
  };

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>
      <input type="number" value={firstNumber} onChange={e => setFirstNumber(e.target.value)} placeholder="First number" />
      <div className="operators">
        <button onClick={() => setOperator('+')}>+</button>
        <button onClick={() => setOperator('-')}>-</button>
        <button onClick={() => setOperator('*')}>*</button>
        <button onClick={() => setOperator('/')}>/</button>
      </div>
      <input type="number" value={secondNumber} onChange={e => setSecondNumber(e.target.value)} placeholder="Second number" />
      <button onClick={performOperation}>=</button>
      <h2>{result}</h2>
    </div>
  );
};

export default Calculator;
