import React from "react";
import {
  Container,
  MainTitle,
  SubTitle,
  Content,
  Description,
} from "./LandingPage.styles";

export default function LandingPage() {
  return (
    <Container>
      <MainTitle>Pairing Playground</MainTitle>
      <SubTitle>This is where the magic happens</SubTitle>
      <Content>
        <Description>
          Welcome to our collaborative coding environment where developers come
          together to solve problems, share knowledge, and build amazing things.
        </Description>
      </Content>
    </Container>
  );
}
