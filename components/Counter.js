import React, { useState } from 'react';

// Define a functional component named Counter
export default function Counter() {
  // Define state variables using the useState hook
  const [count, setCount] = useState(0);

  // Function to increment the count state
  const incrementCount = () => {
    setCount(count + 1); // Update count state by incrementing it by 1
  };

  // Function to decrement the count state, with a check to prevent count from going below 0
  const decrementCount = () => {
    if (count === 0) return; // Prevent decrementing below 0
    setCount(count - 1); // Update count state by decrementing it by 1
  };

  // JSX rendering
  return (
    <div>
      <h1>Count: {count}</h1> {/* Display the current value of count */}
      <button onClick={incrementCount}>Increment</button> {/* Button to increment count */}
      <button onClick={decrementCount}>Decrement</button> {/* Button to decrement count */}
    </div>
  );
}
