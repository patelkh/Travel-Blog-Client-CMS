import React from "react";
import { MdAdd } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import { clearJWT } from "../auth/authHelper";
import "./componentStyle.css";

export default function Nav({ isVerified, setIsVerified }) {
  const navigate = useNavigate();

  function ShowAddMenu() {
    if (isVerified) {
      return (
        <><MdAdd /><Link className="add-link" to="/add">
          Add Blog
        </Link></>
      );
    }
  }

  function ShowLogoutMenu() {
    if (isVerified) {
      return (
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      );
    }
  }

  function logout() {
    clearJWT();
    setIsVerified(false);
    navigate("/");
  }

  return (
    <nav className="nav">
      <div className="nav-items">
        <li className="nav-item">
          <h1 className="nav-item">Blog CMS</h1>
        </li>
        <li className="nav-item">
          <ShowAddMenu />
        </li>
      </div>
      <div className="app-access">
        <ShowLogoutMenu />
      </div>
    </nav>
  );
}
