import React from "react";
import Blogs from "../components/Blogs";
import "./pageStyle.css";
import { useNavigate } from "react-router-dom";

export default function Home({setBlogToEdit}) {
  const navigate = useNavigate();

  function onEdit(blog)  {
    setBlogToEdit(blog)
    navigate('/edit')
  };

  return (
    <div className="home-container">
      <h2>Travel Blogs:</h2>
      <div className="blog-container">
        <Blogs onEdit={onEdit}/>
      </div>
    </div>
  );
}
