import React from "react";
import styled from "styled-components";


const ImageDiv = styled.div`
  width: 100%;
  margin: 20px auto;
`;
const ImageOne = styled.img`
  max-width: 100%;
`;

function Image(props) {
  console.log(props);
  return (
    <ImageDiv className = "imageDiv">
      
      <ImageOne src={props.image} alt={props.title} />
      
    </ImageDiv>
  );
}

export default Image;
