import React, { useState } from "react";
import "./pageStyle.css";

export default function Edit({ blog }) {
  const [title, setTitle] = useState(blog.title);
  const [description, setDes] = useState(blog.description);
  const [author, setAuthor] = useState(blog.author);
  const [location, setLocation] = useState(blog.location);

  //
  // const auth = isAuthenticated();
  // if (!auth) {
  //   const response = await fetch(
  //     `https://kays-travel-blog-api.herokuapp.com/${_id}`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({}),
  //       headers: { Authorization: "Bearer " + auth },
  //     }
  //   );
  //   if (response.status === 200) {
  //     alert("Saved successfully!");
  //   } else {
  //     alert("Save unsuccessfull!");
  //   }
  //   navigate("/home");
  // }
  //

  return (
    <div className="edit-container">
      <h1>Edit</h1>
      <div className="edit-form-container">
        <form className="edit-form">
          <label className="edit-label">
            Title:
            <input
              className="edit-input"
              type="text"
              value={title}
              name={title}
              onChange={(e) => setTitle(e.target.value)}/>
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
          <button className="edit-save-button" onClick={() => {}}>Save</button>
        </form>
      </div>
    </div>
  );
}
