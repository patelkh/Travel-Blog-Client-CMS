import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "./auth/authHelper";
import Nav from "./components/Nav";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./App.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState([]);

  useEffect(() => {
    if (isAuthenticated() !== false) {
      setIsVerified(true);
    }
  }, [isVerified]);

  return (
    <div className="App">
      <Router>
        <Nav isVerified={isVerified} setIsVerified={setIsVerified} />
        <Routes>
          <Route
            path="/"
            element={<Signin setIsVerified={setIsVerified} />}
          ></Route>
          <Route
            path="/home"
            element={<Home setBlogToEdit={setBlogToEdit} />}
          ></Route>
          <Route path="/edit" element={<Edit blog={blogToEdit} />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
