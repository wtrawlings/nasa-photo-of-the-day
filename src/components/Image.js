import React from "react";
import styled from "styled-components";

function Image(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} />
    </div>
  );
}

export default Image;
