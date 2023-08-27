import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return new Error("dsfasdef");
  }
};

const ReducerEX = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      count {state.count}
      <button onClick={() => dispatch({ type: "increament" })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default ReducerEX;
