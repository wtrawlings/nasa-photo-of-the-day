import React from "react";
import styled from "styled-components";


const imageDiv = styled.div`
  max-width: 50%;
`;


function Image(props) {
  console.log(props);
  return (
    <imageDiv className = "imageDiv">
      <img src={props.image} alt={props.title}/>
    </imageDiv>
  );
}

export default Image;
