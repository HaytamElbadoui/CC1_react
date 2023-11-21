// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Composants/Navbar/NavBar';
import Home from './Composants/HOME/home';
import Calcul from './Composants/calculatrice/calcul';
import Api from './Composants/apii/api2';
import Slider from './Composants/Slider/slider';
import Todo from './Composants/Liste/todol';
import PageError from './Composants/pageerror/PageError';
import { LangContextProvider } from './Composants/multi/context/langContext';
import ToggleLangs from './Composants/multi/ToggleLangs/ToggleLangs';
import '../src/App.css';


function App() {

  return (
    <LangContextProvider>
     
        <div>
          <NavBar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Tp1' element={<Calcul />} />
          <Route path='/Tp2' element={<Slider />} />
          <Route path='/Tp3' element={<Todo />} />
          <Route path='/Tp4' element={<Api />} />
          <Route path='/Tp5' element={<ToggleLangs />} />
          <Route path='*' element={<PageError />} />
        </Routes> 

        </div>
    
    </LangContextProvider>
  );
}

export default App;

  
 