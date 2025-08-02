// components/BlogDetails.js
import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: "Mastering Redux",
      author: "Priya N",
      content: "Redux helps manage state in large React apps."
    },
    {
      title: "CSS Grid Magic",
      author: "Rohit Sharma",
      content: "Layout design becomes super easy with CSS Grid."
    }
  ];

  return (
    <div className="card">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="item">
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
