import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./componentStyle.css";

export default function Nav() {
  //   function ShowMenu() {
  //     if (auth) {
  //       return (
  //         <Link className="add-link" to="/add">
  //           Add Blog
  //         </Link>
  //       );
  //     }
  //   }

  return (
    <nav className="nav">
      <div className="nav-items">
        <li className="nav-item">
          <Link className="nav-item" to="/home">
            <h1>Blog CMS</h1>
          </Link>
        </li>
        {/* display on home page */}
        <Link className="add-link" to="/add">
          Add Blog
        </Link>
      </div>
      {/* need conditionally logic here too */}
      <div className="app-access">
        {/* add event listener */}
        {/* <button className="login-button">Login</button> */}
        {/* <button className="access-button">Logout</button> */}
      </div>
    </nav>
  );
}
