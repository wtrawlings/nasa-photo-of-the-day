/*this is the TEXT paragraph at the bottom of the image container div*/
import React from "react";
import styled from "styled-components";

const descriptionP = styled.p`
  color: white;
  background-color: black;
  max-width: 85%;
  border-radius: 20px;
`;

function Description(props) {
  return (
    <div>
      <descriptionP> {props.description} </descriptionP>
    </div>
  );
}

export default Description;
