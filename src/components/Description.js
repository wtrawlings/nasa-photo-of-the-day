/*this is the TEXT paragraph at the bottom of the image container div*/
import React from "react";
import styled from "styled-components";

const DescriptionP = styled.p`
  color: white;
  background-color: black;
  border-radius: 20px;

  
  margin: 10px auto;
  padding: 20px;
`;

function Description(props) {
  return (
    <div>
      <DescriptionP> {props.description} </DescriptionP>
    </div>
  );
}

export default Description;
