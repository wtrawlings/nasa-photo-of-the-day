/*this is the H2 Title Text and DATE on top of the image holding div*/
import React from "react";

function Header(props) {
  return (
    <div>
      <h2> {props.title} </h2>
      <h3> {props.date} </h3>
    </div>
  );
}

export default Header;
