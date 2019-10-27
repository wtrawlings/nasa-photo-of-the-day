import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ImageBkDiv from "./components/ImageBkDiv";

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=l8YJy4uVBHiBDOGzF6f4BuJi65Oe199Ow1cov24N"
      )
      .then(response => {
        //console.log(response.data);
        setNasa(response.data);
      })
      .catch(error => {
        // console.log(error);
      });
  }, []);

  console.log(nasa);
  return (
    <div className="App">
      <div>
        <ImageBkDiv
          nasa={nasa}
          // url={nasa.url}
          // date={nasa.date}
          // title={nasa.title}
          // description={nasa.explanation}
        />
      </div>
      {/* {nasa.map(data => {
        return (
          <div>
            <ImageBkDiv />
          </div>
        );
      })} */}
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;
