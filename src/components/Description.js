/*this is the TEXT paragraph at the bottom of the image container div*/
import React from "react";
import styled from "styled-components";

const DescriptionP = styled.p`
  color: orange;
  background-color: black;
  
  shape-outside: circle(50%);
  width: 600px;
  height: 600px;
  
  margin: 10px auto;
  padding-box: 5px;
`;

function Description(props) {
  return (
    <div>
      <DescriptionP> {props.description} </DescriptionP>
    </div>
  );
}

export default Description;
