/*this is the background image holding the url*/
import React from "react";
import Description from "./Description";
import Header from "./Header";
import Image from "./Image";
import styled from "styled-components";
//import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div`
  background-image: url("{nasa.url}");
  color: grey;
  border: 2px solid red;
  //background-color: darkblue;//
  max-width: 900px;
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 10px auto;
  padding: 20px;
`;



function ImageBkDiv(props) {
  console.log(props.nasa.url);
  return (
  
    <StyledDiv>
      <Header date={props.nasa.date} title={props.nasa.title} />
      <Description description={props.nasa.explanation} />
      <Image image={props.nasa.url} title={props.nasa.title}/>
    </StyledDiv>
  );
}

export default ImageBkDiv;

// url={nasa.url}
//         date={nasa.date}
//         title={nasa.title}
//         description={nasa.explanation}
