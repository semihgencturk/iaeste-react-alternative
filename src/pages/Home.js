import React from "react";
import { useRef } from "react";
import Bundle from "../components/Bundle";
import IaesteExp from "../components/IaesteExp";
import ForCompanies from "../components/ForCompanies";
import Divider from "../ui/Divider";
import Contact from "../components/Contact";
import CompanyLogos from "../components/CompanyLogos";

const Home = () => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll2 = () =>
    myRef2.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll3 = () =>
    myRef3.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div onClick={executeScroll}>
        <Bundle />
      </div>
      <Divider />
      <div ref={myRef} onClick={executeScroll2}>
        <IaesteExp />
      </div>
      <Divider />
      <div ref={myRef2} onClick={executeScroll3}>
        <ForCompanies />
      </div>
      <Divider />
      <div ref={myRef3}>
        <CompanyLogos />
        <Divider />
        <Contact />
      </div>
    </>
  );
};

export default Home;
