import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth/authHelper";
import "./pageStyle.css";

export default function Add() {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    const auth = isAuthenticated();
    const data = new FormData(form.current);
    // for (let value of data.values()) {
    //   console.log(`data value: ${value}`)
    // }

    if (auth !== false) {
      try {
        const response = await fetch(`https://kays-travel-blog-api.herokuapp.com/api/blog/create`, {
          method: "POST",
          body: data,
          headers: {
            Authorization: "Bearer " + auth,
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        });
        if (response.status === 200) {
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="add-container">
      <h1>Add</h1>
      <div className="add-form-container">
        <form className="add-form" ref={form} encType="multipart/form-data" onSubmit={handleAdd}>
          <label className="add-label">Select Image: </label>
          <input className="add-input" type="file" name="image" />

          <label className="add-label">Title:* </label>
          <input className="add-input"  type="text" name="title" />

          <label className="add-label">Description: </label>
          <textarea className="add-input"  cols="1" rows="10" type="text" name="desc" />

          <label className="add-label">Author: </label>
          <input className="add-input"  type="text" name="author" />

          <label className="add-label">Location: </label>
          <input className="add-input"  type="text" name="location" />

          <label className="add-label">Date: </label>
          <input className="add-input"  type="date" name="date" />
          <button className="add-save-button">Add</button>
        </form>
      </div>
    </div>
  );
}
