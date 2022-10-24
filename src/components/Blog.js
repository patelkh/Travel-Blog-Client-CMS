import React from "react";
import './componentStyle.css'

export default function Blog({blog}) {
    return (
        <div className="blog-container" key={blog._id}>
            <div className="blog-details">
                <h2 className="blog-title">{blog.title}</h2>
                <p><b>Written by:</b> {blog.author}</p>
                <p>{blog.description}</p>
            </div>
        </div>
    )
}