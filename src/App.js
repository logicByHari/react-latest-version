import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <Navbar title="Harsh PWA" />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={ <About />}>
             
            </Route>
            <Route exact path="/" element={<TextForm />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
