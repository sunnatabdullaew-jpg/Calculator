import { useState } from 'react';
import '../App.css'; 

const Calculator = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1 >= 0 ? count - 1 : 0);
  const reset = () => setCount(0);
  const divide = () => setCount(count / 2);
  const multiply = () => setCount(count * 2);

  return (
    <div className="calculator">
        <h1>Calculator</h1>
      <h1>Number of the count: {count}</h1>
      <div className="buttons">
        <button className="btn increment" onClick={increment}>+</button>
        <button className="btn decrement" onClick={decrement}>-</button>
        <button className="btn reset" onClick={reset}>Reset</button>
        <button className="btn divide" onClick={divide}>/</button>
        <button className="btn multiply" onClick={multiply}>*</button>
      </div>
    </div>
  );
};

export default Calculator;
