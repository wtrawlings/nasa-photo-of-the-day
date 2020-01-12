import React from "react";
import styled from "styled-components";


const ImageDiv = styled.div`
  max-width: 50%;
`;


function Image(props) {
  console.log(props);
  return (
    <ImageDiv className = "imageDiv">
      <img src={props.image} alt={props.title}/>
    </ImageDiv>
  );
}

export default Image;
