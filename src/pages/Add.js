import React, { useRef } from "react";
import "./pageStyle.css";
import { isAuthenticated } from "../auth/authHelper";
import { useNavigate } from "react-router-dom";

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
        const response = await fetch(`http://localhost:8080/blog/create`, {
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
      <div className="add-form-container">
        <form ref={form} encType="multipart/form-data" onSubmit={handleAdd}>
          <label>Select Image: </label>
          <input type="file" name="image" />

          <label>Title: </label>
          <input type="text" name="title" />

          <label>Description: </label>
          <input type="text" name="description" />

          <label>Author: </label>
          <input type="text" name="author" />

          <label>Location: </label>
          <input type="text" name="location" />

          <label>Date: </label>
          <input type="date" name="date" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
