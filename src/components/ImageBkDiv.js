/*this is the background image holding the url*/
import React from "react";
import Description from "./Description";
import Header from "./Header";
import Image from "./Image";
import styled from "styled-components";
//import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div`
  background-image: url({props.nasa.url});
  color: white;
  background-color: darkblue;
  max-width: 900px;
`;

function ImageBkDiv(props) {
  console.log(props);
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
