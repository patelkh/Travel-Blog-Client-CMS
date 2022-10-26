import React from "react";
import Blogs from "../components/Blogs";
import "./pageStyle.css";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";

export default function Home({ setBlogToEdit }) {
  const navigate = useNavigate();

  function onEdit(blog) {
    setBlogToEdit(blog);
    navigate("/edit");
  }

  const onDelete = async (event, blog) => {
    try {
      const auth = isAuthenticated();
      if (auth !== false) {
        const response = fetch(`http://localhost:8080/api/delete/${blog._id}`, {
          method: "POST",
          body: JSON.stringify({
            blog_id: blog._id,
          }),
          headers: {
            Authorization: "Bearer " + auth,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        });
        // window.location.reload();
      }
    } catch (error) {
      window.location.reload() 
    }
  };

  return (
    <div className="home-container">
      <h2>Travel Blogs:</h2>
      <div className="blog-container">
        <Blogs onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
