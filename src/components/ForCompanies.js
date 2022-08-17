import React from "react";
import styled from "styled-components";
import ForCompaniesCard from "../ui/ForCompaniesCard";
import ScrollButton from "../ui/ScrollButton";

const ForCompaniesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(105, 152, 171, 1) 0%,
    rgba(26, 55, 77, 1) 100%
  );

  padding: 25px;
`;

const ForCompaniesHeader = styled.h2`
  font-size: 50px;
  margin: 0;

  span {
    color: #f1d00a;
  }
`;

const ForCompaniesCardBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 5%;
`;
const ForCompanies = () => {
  return (
    <ForCompaniesContainer>
      <ForCompaniesHeader>
        <span>Şirketler</span> İçin IAESTE
      </ForCompaniesHeader>
      <ForCompaniesCardBox>
        <ForCompaniesCard
          logo="fa-solid fa-coins"
          text="IAESTE ile çalışmak bir kurum için ekonomik anlamda çok uygundur. Kurumların ihtiyaçlarını karşılayacak doğru insanı bulmasının en ucuz ve kolay yoludur."
        />
        <ForCompaniesCard
          logo="fa-solid fa-language"
          text="Yabancı bir stajyer, kuruma uluslararası bir atmosfer getirir. Dil kurslarına para vermek yerine çalışanlar stajyerler ile konuşarak dil yeteneklerini çalışırken geliştirme şansı verir."
        />
        <ForCompaniesCard
          logo="fa-solid fa-book"
          text="IAESTE stajyerleri motivasyonu yüksek ve gerçek anlamda çalıştıkları kuruma katkıda bulunmayı hedefleyen öğrenciler olarak stajları boyunca gerçekten anlamlı işler yapmak istemektedirler."
        />
        <ForCompaniesCard
          logo="fa-solid fa-globe"
          text="IAESTE uluslararası çaptaki kurumlara daha sonra dış temsilciliklerinde görev verebileceği potansiyel çalışanlarla tanışıp onları eğitme ve deneme şansı sunar."
        />
        <ForCompaniesCard
          logo="fa-solid fa-network-wired"
          text="IAESTE kurumlara gelecekteki çalışanlarını seçebilecekleri uluslararası bir “network” şansı sunar"
        />
        <ForCompaniesCard
          logo="fa-solid fa-graduation-cap"
          text="Uluslarası bir çalışanı işe almadan önce deneme şansı sunar."
        />
      </ForCompaniesCardBox>
      <ScrollButton href="/" text="Bize Ulaşın" />
    </ForCompaniesContainer>
  );
};

export default ForCompanies;
