import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
