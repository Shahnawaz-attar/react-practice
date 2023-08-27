import React, { useState, useMemo } from "react";

export function ExpensiveCalculation({ num }) {
  // Simulate a costly calculation

  const result = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }, [num]);

  return <div>Result: {result}</div>;
}
