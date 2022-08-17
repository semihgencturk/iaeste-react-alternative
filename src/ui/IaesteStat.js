import React from "react";
import styled from "styled-components";

const IaesteStatContainer = styled.div`
  width: 20%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(155, 164, 180, 1) 0%,
    rgba(57, 72, 103, 1) 100%
  );
  border-radius: 100px;
`;

const IaesteStatLogo = styled.span`
  font-size: 50px;
`;

const IaesteStatNumber = styled.div`
  font-size: 32px;
  color: #f1d00a;
`;

const IaesteStatText = styled.div`
  font-size: 24px;
`;
const IaesteStat = ({ logo, number, text }) => {
  return (
    <IaesteStatContainer>
      <IaesteStatLogo className={logo}></IaesteStatLogo>
      <IaesteStatNumber>{number}</IaesteStatNumber>
      <IaesteStatText>{text}</IaesteStatText>
    </IaesteStatContainer>
  );
};

export default IaesteStat;
