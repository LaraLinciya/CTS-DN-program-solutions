import React, { useState } from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="container">
      {showCourses && <CourseDetails />}
      {showBooks ? <BookDetails /> : null}
      {showBlogs && (
        <>
          <BlogDetails />
        </>
      )}
    </div>
  );
}

export default App;
