import React from "react";
import { connect } from "cerebral/react";
import { Container, Background, ContentWrapper } from "./elements";
import Header from "./Header";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";
import SubMenu from "../../common/SubMenu";

export default connect({}, function App({ edit }) {
  return (
    <Background>
      <Container>
        <Header />
        <NavBar />
        <ContentWrapper>
          <SubMenu />
          <Content />
        </ContentWrapper>
        <Footer />
      </Container>
    </Background>
  );
});
