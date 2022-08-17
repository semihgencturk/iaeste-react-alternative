import React from "react";
import styled from "styled-components";
import Logo from "../ui/Logo";
import IaesteLogo from "../assets/IaesteLogo.png";
import ScrollButton from "../ui/ScrollButton";

const BundleContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(105, 152, 171, 1) 0%,
    rgba(26, 55, 77, 1) 100%
  );
`;

const BundleHeader = styled.h1`
  font-size: 70px;
  text-align: center;
  color: #f0f0f0;
  span {
    font-size: 42px;
    color: #f1d00a;
  }
`;

const Bundle = () => {
  return (
    <BundleContainer>
      <Logo src={IaesteLogo} alt="IAESTE-logo" width={150} />
      <BundleHeader>
        IAESTE YTÜ
        <br />
        <span>Uluslararası Staj Değişim Kulübü</span>
      </BundleHeader>
      <ScrollButton href="/" text="IAESTE Nedir?" />
    </BundleContainer>
  );
};

export default Bundle;
