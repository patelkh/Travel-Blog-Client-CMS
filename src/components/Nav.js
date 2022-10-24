import React from "react";
import { Link } from "react-router-dom";
import './componentStyle.css'

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-items">
                <li className="nav-item"><Link className="nav-item" to="/"><h1>Blog CMS</h1></Link></li>
                {/* display on home page */}
                {/* <li className="nav-item"><Link to="/addblog">Add Blog</Link></li>     */}
            </div>
            {/* need conditionally logic here too */}
            <div className="app-access">
                {/* add event listener */}
                <button className="login-button">Login</button>
                {/* <button className="access-button">Logout</button> */}
            </div>
        </nav>
    )
}