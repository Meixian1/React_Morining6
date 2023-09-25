import React from "react";
import Home from '../Page/Home'; 

function HouseDisplay({ houses }) {
  return (
    <div>
      <h2>Houses for Sale:</h2>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            <h3>{house.name}</h3>
            <p>Address: {house.address}</p>
            <p>Price: ${house.price}</p>
            <p>Status: {house.isSold ? "Sold" : "For Sale"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseDisplay;
