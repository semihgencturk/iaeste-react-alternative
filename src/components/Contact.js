import React from "react";
import styled from "styled-components";
import LinkButton from "../ui/LinkButton";

const ContactContainer = styled.div`
  height: 50vh;
  background: linear-gradient(
    135deg,
    rgba(105, 152, 171, 1) 0%,
    rgba(26, 55, 77, 1) 100%
  );
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContactHeader = styled.h2`
  font-size: 50px;
`;

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const SocialMediaIcon = styled.span`
  font-size: 50px;
  color: white;

  :hover {
    color: #f1d00a;
  }
`;

const Mail = styled.p`
  font-size: 20px;
  font-weight: 900;
  color: #f1d00a;
`;

const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
  button {
    margin-bottom: 15px;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>Bize Ulaşın</ContactHeader>
      <SocialMedias>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <SocialMediaIcon
            className="fa-brands fa-linkedin"
            aria-hidden="true"
          ></SocialMediaIcon>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <SocialMediaIcon
            className="fa-brands fa-twitter-square"
            aria-hidden="true"
          ></SocialMediaIcon>
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <SocialMediaIcon
            className="fa-brands fa-instagram-square"
            aria-hidden="true"
          ></SocialMediaIcon>
          <span className="sr-only">instagram</span>
        </a>
        <a
          href="https://www.youtube.com/channel"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMediaIcon
            className="fa-brands fa-youtube-square"
            aria-hidden="true"
          ></SocialMediaIcon>
          <span className="sr-only">Youtube</span>
        </a>
      </SocialMedias>
      <Mail>ik@iaesteyildiz.com</Mail>
      <LinkButtons>
        <LinkButton link="/" text="Öğrenciler için Iaeste" />
      </LinkButtons>
    </ContactContainer>
  );
};

export default Contact;
