import React from "react";

// Define a functional component named Html
export default function Html() {
  // JSX rendering
  return (
    <div>
      {/* Heading */}
      <h1>HTML</h1>
      
      {/* Paragraph */}
      <p>This is a login page</p>
      
      {/* Form element */}
      <form>
        {/* Email input field */}
        Email:
        <input type="email" name="email" />
        <br />
        
        {/* Password input field */}
        Password:
        <input type="password" name="Password" />
        <br />
        
        {/* Submit button */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
