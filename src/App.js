import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function photoData() {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=l8YJy4uVBHiBDOGzF6f4BuJi65Oe199Ow1cov24N"
    )
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
photoData();
function App() {
  const [date, setDate] = useState();

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
