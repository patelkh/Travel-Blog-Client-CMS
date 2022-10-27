import React, { useState } from "react";
import { isAuthenticated } from "../auth/authHelper";
import { useNavigate } from "react-router-dom";

import "./pageStyle.css";

export default function Edit({ blog }) {
  const [_id, setId] = useState(blog._id);
  const [title, setTitle] = useState(blog.title);
  const [description, setDes] = useState(blog.description);
  const [author, setAuthor] = useState(blog.author);
  const [location, setLocation] = useState(blog.location);
  const navigate = useNavigate();

  const handleSave = async (event) => {
    event.preventDefault()
    const auth = isAuthenticated();
    if (auth !== false) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/update/${_id}`,
          {
            method: "POST",
            body: JSON.stringify({
              blog_id: _id,
              title: title,
              description: description,
              author: author,
              location: location,
            }),
            headers: {
              Authorization: "Bearer " + auth,
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
            },
          }
        );
        if (response.status === 200) {
          alert("Saved successfully!");
          navigate("/home");
        } else {
          alert("Save unsuccessfull!");
        }
      } catch (error) {
        console.log(error);
        alert("Server is down. Try again later.")
        navigate("/home");
      }
    }
  };

  return (
    <div className="edit-container">
      <h1>Edit</h1>
      <div className="edit-form-container">
        <form onSubmit={handleSave} className="edit-form">
          <label className="edit-label">
            Title:
            <input
              className="edit-input"
              type="text"
              value={title}
              name={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="edit-label">
            Description:
            <textarea
              cols="1"
              rows="10"
              className="edit-input"
              type="text"
              value={description}
              name={description}
              onChange={(e) => setDes(e.target.value)}
            />
          </label>
          <label className="edit-label">
            Author:
            <input
              className="edit-input"
              type="text"
              value={author}
              name={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label className="edit-label">
            Location:
            <input
              className="edit-input"
              type="text"
              value={location}
              name={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button className="edit-save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
