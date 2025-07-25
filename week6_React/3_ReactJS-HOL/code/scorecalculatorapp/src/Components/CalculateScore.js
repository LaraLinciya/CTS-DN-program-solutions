import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const percentage = (props.total / props.goal).toFixed(2);

  return (
    <div className="student-container">
      <h1 className="heading">Student Details:</h1>
      <p><span className="label name-label">Name:</span> <span className="value name-value">{props.name}</span></p>
      <p><span className="label school-label">School:</span> <span className="value school-value">{props.school}</span></p>
      <p><span className="label total-label">Total:</span> <span className="value total-value">{props.total} Marks</span></p>
      <p><span className="label score-label">Score:</span> <span className="value score-value">{percentage}%</span></p>
    </div>
  );
}

export default CalculateScore;
