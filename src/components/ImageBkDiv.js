/*this is the background image holding the url*/
import React from "react";
import Description from "./Description";
import Header from "./Header";
import Image from "./Image";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url({props.nasa.url});
  color: white;
`;

function ImageBkDiv(props) {
  console.log(props);
  return (
    <StyledDiv>
      <Header date={props.nasa.date} title={props.nasa.title} />
      <Description description={props.nasa.explanation} />
      <Image image={props.nasa.url} />
    </StyledDiv>
  );
}

export default ImageBkDiv;

// url={nasa.url}
//         date={nasa.date}
//         title={nasa.title}
//         description={nasa.explanation}
