import React, { useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests

function ApplicationForm() {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Sending POST request to the server
      await axios.post("http://localhost:3000/register", {
        name: name,
        email: email,
        gender: gender,
        number: number,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
      });

      // Displaying success message and resetting form fields
      alert("Form Submitted Successfully.....");
      setName("");
      setEmail("");
      setGender("");
      setNumber("");
      setAddress("");
      setCity("");
      setState("");
      setPincode("");
    } catch (err) {
      // Handling errors and displaying error message
      console.error(err);
      alert("Something went Wrong!!");
    }
  };

  // JSX for rendering the form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        {/* Email input field */}
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        {/* Gender radio buttons */}
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <br />

        {/* Contact number input field */}
        Contact No:
        <input
          type="number"
          placeholder="Contact Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />

        {/* Address textarea */}
        Address:
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />

        {/* City input field */}
        City:
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />

        {/* State input field */}
        State:
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <br />

        {/* Pincode input field */}
        Pincode:
        <input
          type="number"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
