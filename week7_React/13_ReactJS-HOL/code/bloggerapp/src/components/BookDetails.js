// components/BookDetails.js
import React from 'react';

function BookDetails() {
  const books = [
    { title: "Learning Vue", price: 550 },
    { title: "Fullstack with Java", price: 780 },
    { title: "Database Design", price: 600 }
  ];

  return (
    <div className="card">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index} className="item">
          <h3>{book.title}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
