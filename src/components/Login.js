import React from "react";
import "./componentStyle.css";
import { authenticate } from "../auth/authHelper";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Success");

  const DisplayError = () => {
    if (errorMessage !== "Success") {
      return (
        <div className="login-message-container">
          <p className="login-message">{errorMessage}</p>
        </div>
      );
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      let data = await response.json();
      if (data.message === "Success") {
        authenticate(data.token);
      } else {
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container>">
        <h2 className="login-label">Login</h2>
        <DisplayError />
        <form onSubmit={handleLogin} className="login-form">
          <label>Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
          />
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
          />
          <input className="login-button" type="submit" />
        </form>
      </div>
    </div>
  );
}
