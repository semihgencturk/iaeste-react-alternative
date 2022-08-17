import React from "react";
import styled from "styled-components";

const ForCompaniesCardContainer = styled.div`
  width: 30%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(155, 164, 180, 1) 0%,
    rgba(57, 72, 103, 1) 100%
  );
  border-radius: 25px;
  padding: 15px;
  margin: 10px 0 0 0;
`;

const ForCompaniesCardLogo = styled.span`
  font-size: 40px;
  color: #f1d00a;
`;

const ForCompaniesCardText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const ForCompaniesCard = ({ logo, text }) => {
  return (
    <ForCompaniesCardContainer>
      <ForCompaniesCardLogo className={logo}></ForCompaniesCardLogo>
      <ForCompaniesCardText>{text}</ForCompaniesCardText>
    </ForCompaniesCardContainer>
  );
};

export default ForCompaniesCard;
