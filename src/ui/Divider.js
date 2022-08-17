import React from "react";
import styled from "styled-components";

const DividerContainer = styled.div`
  height: 1vh;
  background: linear-gradient(
    135deg,
    rgba(155, 164, 180, 1) 25%,
    rgba(57, 72, 103, 1) 100%
  );
`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
