import { useState } from "react";
import { ExpensiveCalculation } from "./ExpensiveCalculation";

function ParentMemo() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <ExpensiveCalculation num={number} />
    </div>
  );
}

export default ParentMemo;
