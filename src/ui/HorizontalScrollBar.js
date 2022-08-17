import React from "react";
import styled from "styled-components";

const HorizontalScrollBarContainer = styled.div`
  width: 75%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
`;

const HorizontalScrollBarArrow = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalScrollBarContents = styled.div`
  width: 80%;
  background-color: red;
`;

const HorizontalScrollBar = () => {
  return (
    <HorizontalScrollBarContainer>
      <HorizontalScrollBarArrow>
        <span className="fa-solid fa-circle-arrow-left"></span>
      </HorizontalScrollBarArrow>
      <HorizontalScrollBarContents></HorizontalScrollBarContents>
      <HorizontalScrollBarArrow>
        <span className="fa-solid fa-circle-arrow-right"></span>
      </HorizontalScrollBarArrow>
    </HorizontalScrollBarContainer>
  );
};

export default HorizontalScrollBar;
