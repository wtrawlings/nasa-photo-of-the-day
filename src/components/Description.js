/*this is the TEXT paragraph at the bottom of the image container div*/
import React from "react";

function Description(props) {
  return (
    <div>
      <p> {props.description} </p>
    </div>
  );
}

export default Description;
