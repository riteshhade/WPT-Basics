import React from 'react';

// Define a functional component named ClickEvent that accepts props as an argument
export default function ClickEvent(props) {
    // Define a function named click that shows an alert when the button is clicked
    const click = () => {
        alert("Clicked By " + props.name); // Display an alert with a message including the value of props.name
    }

    // JSX rendering
    return (
        <button onClick={click}>Click the button</button> // Button element triggering the click function when clicked
    );
}
