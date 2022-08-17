import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButtonContainer = styled.button`
  background-color: #ea5455;
  border: none;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  font-size: 25px;
  width: fit-content;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const LinkButton = ({ link, text }) => {
  return (
    <Link to={link}>
      <LinkButtonContainer>{text}</LinkButtonContainer>
    </Link>
  );
};

export default LinkButton;
