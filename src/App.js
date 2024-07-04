// Importing CSS file for styling
import './App.css';

// Importing the ApplicationForm component from its file
import ApplicationForm from './component/ApplicationForm';

// Importing React and 'component' should be 'Component' (capitalized)
import React, { Component } from 'react';

// Defining the functional component App
function App() {
  return (
    <div>
      {/* Rendering the ApplicationForm component */}
      <ApplicationForm/>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
