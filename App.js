// Importing CSS file for styling
import './App.css';

// Importing various components from their respective files
import ClickEvent from './components/ClickEvent';
import Counter from './components/Counter';
import Demo from './components/Demo';
import Form from './components/Form';
import FormClass from './components/FormClass';
import Greeting from './components/Greeting';
import Html from './components/Html';
import Message from './components/Message';
import Trial from './components/Trial';

// Define the main App component
function App() {
  return (
    <div className="App"> {/* Main container div with 'App' class */}
      { /* JSX Comment: Hello World!!! */ }
      <p>Hello World!!!</p>

      {/* Rendering various imported components */}
      <Greeting/> {/* Renders the Greeting component */}
      <Message/> {/* Renders the Message component */}

      {/* Passing props to Demo and Trial components */}
      <Demo name="Allen"/> {/* Renders Demo component with name prop set to "Allen" */}
      <Trial name="Jane"/> {/* Renders Trial component with name prop set to "Jane" */}

      <Counter/> {/* Renders the Counter component */}

      <ClickEvent name="Ritesh"/> {/* Renders ClickEvent component with name prop set to "Ritesh" */}

      <Form/> {/* Renders the Form component */}

      <FormClass/> {/* Renders the FormClass component */}

      <Html/> {/* Renders the Html component */}
    </div>
  );
}

export default App; // Exporting the App component as the default export
