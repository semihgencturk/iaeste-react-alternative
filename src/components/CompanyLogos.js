import React from "react";
import styled from "styled-components";
import YtuLogo from "../assets/YtuLogo.png";
import Logo from "../ui/Logo";

const CompanyLogosContainer = styled.div`
  height: 50vh;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 55, 77, 1) 25%,
    rgba(105, 152, 171, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompanyLogosRow = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const CompanyLogosHeader = styled.div`
  font-size: 50px;
`;

const CompanyLogos = () => {
  return (
    <CompanyLogosContainer>
      <CompanyLogosHeader>Partnerlerimiz</CompanyLogosHeader>
      <CompanyLogosRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompanyLogosRow>
      <CompanyLogosRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompanyLogosRow>
      <CompanyLogosRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompanyLogosRow>
    </CompanyLogosContainer>
  );
};

export default CompanyLogos;
