import React from 'react';
import AgeCalculator from './components/AgeCalculator';
import ExampleComponent from './components/ExampleComponent';
import ColorPicker from './components/ColorPicker';
import Greetings from './components/Greetings';
import Details from './components/Details';
import Order from './components/Order';
import Markdown from './components/markdown';

// npm create vite@latest

function App() {
  return (
    <div>
      <AgeCalculator />
      <ExampleComponent />
      <ColorPicker />
      <Greetings/>
      <Details/>
      <Order/>
      <Markdown/>
    </div>
  );
}

export default App;
