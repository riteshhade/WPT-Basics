import React from 'react';

// Define a functional component named Demo that accepts props as an argument
export default function Demo(props) {
  // Return JSX content: a heading element displaying a personalized greeting
  return <h1>Hello, {props.name}!</h1>;
}
