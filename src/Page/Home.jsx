import React from "react";
import HouseDisplay from '../components/HouseDisplay'; // Corrected import path

function Home({ houses }) {
  return (
    <div>
      <h1>Home Page</h1>
      <HouseDisplay houses={houses} />
    </div>
  );
}

export default Home;
