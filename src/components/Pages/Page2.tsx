import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import boda from "../../images/boda.jpg";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <img
          alt="invitacion"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src={boda}
        />
      </Page2Container>
    </Page2Wrapper>
  );
};
