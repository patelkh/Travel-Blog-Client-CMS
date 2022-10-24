import React from "react";
import Blogs from "../components/Blogs";
import Login from "../components/Login";
import "./pageStyle.css";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <Login/>
      </div>
      <div className="blog-container">
        <Blogs />
      </div>
    </div>
  );
}
