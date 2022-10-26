import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/authHelper";
import { useNavigate } from "react-router-dom";
import "./componentStyle.css";
import Blog from "./Blog";

export default function Blogs({ onEdit, onDelete}) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const auth = isAuthenticated();
    if (auth !== false) {
      try {
        const response = await fetch("http://localhost:8080/api/blogs", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + auth,
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        });
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }
  };

  //get blogs
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blogs-container">
      {/* {blogs.map((blog) => {
                return <li key={blog._id}>{blog.title}</li>
            })} */}
      {blogs.map((blog, index) => {
        return <Blog blog={blog} key={index} onEdit={onEdit} onDelete={onDelete} />;
      })}
    </div>
  );
}
