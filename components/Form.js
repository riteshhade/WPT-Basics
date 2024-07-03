import React from "react";

// Define a functional component named Form
export default function Form() {
  // JSX rendering
  return (
    <div>
      <form>
        {/* Input field for entering first name */}
        <label>
          Enter Your FirstName:
          <input type="text" />
        </label>
        <br></br>

        {/* Input field for entering last name */}
        <label>
          Enter Your LastName:
          <input type="text" />
        </label>
        <br></br>

        {/* Input field for entering date of birth */}
        <label>
          Enter Your Dob:
          <input type="date" />
        </label>
        <br></br>

        {/* Input field for entering education */}
        <label>
          Enter Your Education:
          <input type="text" />
        </label>
        <br></br>

        {/* Submit button for submitting the form */}
        <input type="submit" />
      </form>
    </div>
  );
}
