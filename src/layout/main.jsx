import React from "react";

import { Container, Content } from "../components";
import { Footer, Header } from "./components";

export function Layout({
  children,
  minHeight
}) {
  return (
    <>
    <Header />
      <Container>
        <Content direction="column" minHeight={minHeight}>
          {children}
        </Content>
      </Container>
      <Footer></Footer>
    </>
  );
}