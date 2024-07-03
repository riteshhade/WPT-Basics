import React, { Component } from 'react';

// Define a class-based component named Trial that extends Component
export default class Trial extends Component {
  // Render method required by React for class-based components
  render() {
    // Return JSX content: a heading element displaying a personalized greeting
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
