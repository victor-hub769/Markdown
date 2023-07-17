import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AgeCalculator from './components/AgeCalculator';
import ExampleComponent from './components/ExampleComponent';
import ColorPicker from './components/ColorPicker';
import Greetings from './components/Greetings';
import Details from './components/Details';
import Order from './components/Order';
import Markdown from './components/markdown';
import Apis from './components/Apis';
import Restaraunt from './components/Restaraunt';
import Bootstrap from './components/Bootstrap';


// npm create vite@latest

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AgeCalculator />} />
          <Route Exact path="/example" element={<ExampleComponent />} />
          <Route Exact path="/colorpicker" element={<ColorPicker />} />
          <Route Exact path="/greetings" element={<Greetings />} />
          <Route Exact path="/details" element={<Details />} />
          <Route Exact path="/order" element={<Order />} />
          <Route Exact path="/markdown" element={<Markdown />} />
          <Route Exact path='/Apis' element={<Apis />}></Route>
          <Route Exact path='/Restaraunt' element={<Restaraunt/>}></Route>
          <Route Exact path='/Bootstrap' element ={<Bootstrap/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
