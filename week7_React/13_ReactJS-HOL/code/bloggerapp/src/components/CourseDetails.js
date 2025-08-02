// components/CourseDetails.js
import React from 'react';

function CourseDetails() {
  const courses = [
    { name: "JavaScript", date: "01/02/2025" },
    { name: "Node.js", date: "15/03/2025" }
  ];

  return (
    <div className="card">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index} className="item">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
