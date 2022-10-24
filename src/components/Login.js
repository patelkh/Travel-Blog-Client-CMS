import React from "react";
import "./componentStyle.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="form-container>">
        <h2 className="login-label">Login</h2>
        <form>
          <label>Username: </label>
          <input type="text" name="username" />
          <label>Password:</label>
          <input type="text" name="password" />
          <label><button className="login-button">Login</button></label>
        </form>
      </div>
    </div>
  );
}
