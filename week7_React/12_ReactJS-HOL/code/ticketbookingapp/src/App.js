import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element Variable
  let page;
  if (isLoggedIn) {
    page = <User />;
  } else {
    page = <Guest />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1> Ticket Booking App</h1>

      {/* Conditional Buttons */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {/* Conditional Rendering via element variable */}
      <div style={{ marginTop: "20px" }}>{page}</div>
    </div>
  );
}

export default App;
