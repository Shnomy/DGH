import React from 'react';
import {Wrapper, NavBarItemStyled} from './elements';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';

export default connect({
  currentPage: state`app.currentPage`,
  frontPageRouted: signal`app.frontPageRouted`,
  boatsRouted: signal`app.boatsRouted`,
  furnitureRouted: signal`app.furnitureRouted`,
  doorWindowRouted: signal`app.doorWindowRouted`,
  tryYourselfRouted: signal`app.tryYourselfRouted`,
}, function NavBar({currentPage, frontPageRouted, boatsRouted, furnitureRouted, doorWindowRouted, tryYourselfRouted}) {
  return (
    <Wrapper>
      <NavBarItemStyled onClick={frontPageRouted} icon={"home"} text={" Forside"} current={currentPage === "frontPage"}/>
      <NavBarItemStyled onClick={boatsRouted} icon={"ship"} text={" Båter"} current={currentPage === "boats"}/>
      <NavBarItemStyled onClick={furnitureRouted} icon={"legal"} text={" Møbler"} current={currentPage === "furniture"}/>
      <NavBarItemStyled onClick={doorWindowRouted} icon={"windows"} text={" Dør/Vindu"} current={currentPage === "doorWindow"}/>
      <NavBarItemStyled onClick={tryYourselfRouted} icon={"pencil"} text={" Prøv selv!"} current={currentPage === "tryYourself"}/>
    </Wrapper>
  );
});