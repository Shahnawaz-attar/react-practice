import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/actions/actions";

const CounterApp = ({ count, increment, decrement }) => {
  return (
    <div>
      {count}
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProp = {
  increment,
  decrement,
};

export default connect(mapStateToProp, mapDispatchToProp)(CounterApp);
