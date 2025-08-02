import React from "react";
import office1Img from './assets/office1.jpg';
import office2Img from './assets/office2.jpeg';


function App() {
  // Office object
  const office1 = {
    name: "Spacious Office A",
    rent: 50000,
    address: "123 Main Street, Chennai",
    image: office1Img
  };

  const office2 = {
    name: "Premium Office B",
    rent: 75000,
    address: "456 Tech Park, Bengaluru",
    image: office2Img // Real office image
  };

  // List of offices
  const officeList = [office1, office2];

  // Function to determine rent color
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Office Space Rental App</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "30px"
      }}>
        {officeList.map((office, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              width: "300px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{ width: "100%", height: "180px", borderRadius: "6px" }}
            />
            <h2>{office.name}</h2>
            <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
            <p>Address: {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
