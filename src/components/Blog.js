import React from "react";
import "./componentStyle.css";
import { MdEdit, MdDeleteOutline } from "react-icons/md";

export default function Blog({ blog, onEdit }) {
  return (
    <div className="blog-container" key={blog._id}>
      <div className="blog-details">
        <h2 className="blog-title">{blog.title}</h2>
        <p>
          <b>Written by:</b> {blog.author}
        </p>
        <p>{blog.description}</p>
        <div className="blog-buttons">
          <MdEdit className="mdEdit" onClick={() => onEdit(blog)} />
          <MdDeleteOutline className="mdDelete" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
