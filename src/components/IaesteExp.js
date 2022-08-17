import React from "react";
import styled from "styled-components";
import IaesteStat from "../ui/IaesteStat";
import ScrollButton from "../ui/ScrollButton";

const IaesteExpContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(26, 55, 77, 1) 25%,
    rgba(105, 152, 171, 1) 100%
  );
  padding: 25px;
`;

const IaesteExpHeader = styled.h2`
  font-size: 50px;
  margin: 0;

  span {
    color: #f1d00a;
  }
`;

const IaesteExpText = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 0;

  span {
    color: #f1d00a;
  }
`;

const IaesteStats = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const IaesteExpButtons = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const IaesteExp = () => {
  return (
    <IaesteExpContainer>
      <IaesteExpHeader>
        <span>IAESTE</span> Nedir?
      </IaesteExpHeader>
      <IaesteExpText>
        <span>IAESTE</span> öğrencilerin yurtdışında staj yapmalarını organize
        eden, 1948 yılında kurulmuş kar amacı taşımayan bir kuruluştur.
        <br />
        <br />
        <span>IAESTE-Türkiye</span> 1955 yılında IAESTE’ ye üye kabul
        edilmiştir. Bugün IAESTE-Türkiye’ ye üye 34 üniversite bulunmaktadır.
        <br />
        <br />
        <span>IAESTE-Yıldız</span> 1984 yılında IAESTE faaliyetleri Yıldız
        Teknik Üniversitesi’nde resmi olarak öğrenci değişimi ile başlamıştır.
      </IaesteExpText>
      <IaesteStats>
        <IaesteStat
          logo="fa-solid fa-earth-americas"
          number="80+"
          text="Ülke"
        />
        <IaesteStat
          logo="fa-solid fa-graduation-cap"
          number="368.000+"
          text="Stajyer"
        />
        <IaesteStat logo="fa-solid fa-building" number="3000+" text="Şirket" />
        <IaesteStat
          logo="fa-solid fa-handshake-angle"
          number="2500+"
          text="Gönüllü"
        />
      </IaesteStats>
      <IaesteExpButtons>
        <ScrollButton href="/" text="Şirketler İçin Iaeste" />
        {/* <ScrollButton href="/" text="Öğrenciler İçin Iaeste" /> */}
      </IaesteExpButtons>
    </IaesteExpContainer>
  );
};

export default IaesteExp;
