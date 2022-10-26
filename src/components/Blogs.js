import React, { useEffect, useState } from "react";
import "./componentStyle.css";
import Blog from "./Blog";

export default function Blogs({onEdit}) {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await fetch(
      "https://kays-travel-blog-api.herokuapp.com/blogs/view"
    );
    const data = await response.json();
    setBlogs(data);
  };

  //get blogs
  useEffect(() => {
    fetchBlogs().catch(console.error);
  }, []);

  

  return (
    <div className="blogs-container">
      {/* {blogs.map((blog) => {
                return <li key={blog._id}>{blog.title}</li>
            })} */}
      {blogs.map((blog, index) => {
        return <Blog blog={blog} key={index} onEdit={onEdit} />;
      })}
    </div>
  );
}
