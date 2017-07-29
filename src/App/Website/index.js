import React from 'react';
import {connect} from 'cerebral/react';
import {Container, Background} from './elements';
import Header from './Header';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

export default connect({
}, function App({edit}) {
  return (
    <Background>
      <Container>
        <Header/>
        <NavBar/>
        <Content/>
        <Footer/>
      </Container>
    </Background>
  );
});
