import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Signin from "./pages/Signin";
import Home from './pages/Home';
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "./App.css";



function App() {

  const [blogToEdit, setBlogToEdit] = useState([]);

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/home" element={<Home setBlogToEdit={setBlogToEdit}/>}></Route>
          <Route path="/edit" element={<Edit blog={blogToEdit}/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
