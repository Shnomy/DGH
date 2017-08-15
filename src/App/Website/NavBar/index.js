import React from "react";
import { Wrapper, NavBarItemStyled } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";

export default connect(
  {
    currentPage: state`app.currentPage`,
    menuClicked: signal`app.menuClicked`,
    toggleMenu: signal`app.toggleMenu`
  },
  function NavBar({ currentPage, menuClicked, toggleMenu }) {
    return (
      <Wrapper>
        <NavBarItemStyled
          onClick={
            currentPage === "forside"
              ? () => toggleMenu()
              : () => menuClicked({ url: "/" })
          }
          icon={"home"}
          text={" Forside"}
          current={currentPage === "forside"}
        />
        <NavBarItemStyled
          onClick={
            currentPage === "bater"
              ? () => toggleMenu()
              : () => menuClicked({ url: "/bater" })
          }
          icon={"ship"}
          text={" Båter"}
          current={currentPage === "bater"}
        />
        <NavBarItemStyled
          onClick={
            currentPage === "mobler"
              ? () => toggleMenu()
              : () => menuClicked({ url: "/mobler" })
          }
          icon={"legal"}
          text={" Møbler"}
          current={currentPage === "mobler"}
        />
        <NavBarItemStyled
          onClick={
            currentPage === "dorVindu"
              ? () => toggleMenu()
              : () => menuClicked({ url: "/dorVindu" })
          }
          icon={"windows"}
          text={" Dør/Vindu"}
          current={currentPage === "dorVindu"}
        />
        <NavBarItemStyled
          onClick={
            currentPage === "provSelv"
              ? () => toggleMenu()
              : () => menuClicked({ url: "/provSelv" })
          }
          icon={"pencil"}
          text={" Prøv selv!"}
          current={currentPage === "provSelv"}
        />
      </Wrapper>
    );
  }
);
