import React from "react";
import styled from "styled-components";

const ScrollButtonContainer = styled.a`
  background-color: #ea5455;
  border: none;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  font-size: 25px;
  width: fit-content;
  cursor: pointer;
  color: #e5e5e5;
  text-decoration: none;

  span {
    padding-left: 12px;
    padding-right: 12px;
  }

  :hover {
    color: black;
  }
`;

const ScrollButton = ({ text }) => {
  return (
    <ScrollButtonContainer>
      {/* <span className="fa-solid fa-circle-arrow-down"></span> */}
      {text}
      <span className="fa-solid fa-circle-arrow-down"></span>
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
