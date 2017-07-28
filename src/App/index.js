import React, { Component } from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import {Container, Background} from './elements';
import Header from './Header';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import Editor from './Editor';

export default connect({
  edit: state`app.edit`
}, function App({edit}) {
  return (
    <Background edit={edit}>
      <Container edit={edit}>
        <Header/>
        <NavBar/>
        <Content/>
        <Footer/>
      </Container>
      {edit ? <Editor/> : null}
    </Background>
  );
});
