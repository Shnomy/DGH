import React from "react";
import { Wrapper, NavBarItemStyled } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";

export default connect(
  {
    currentPage: state`app.currentPage`,
    redirect: signal`app.redirect`
  },
  function NavBar({ currentPage, redirect }) {
    return (
      <Wrapper>
        <NavBarItemStyled
          onClick={() => redirect({ url: "/" })}
          icon={"home"}
          text={" Forside"}
          current={currentPage === "forside"}
        />
        <NavBarItemStyled
          onClick={() => redirect({ url: "/bater" })}
          icon={"ship"}
          text={" Båter"}
          current={currentPage === "bater"}
        />
        <NavBarItemStyled
          onClick={() => redirect({ url: "/mobler" })}
          icon={"legal"}
          text={" Møbler"}
          current={currentPage === "mobler"}
        />
        <NavBarItemStyled
          onClick={() => redirect({ url: "/dorVindu" })}
          icon={"windows"}
          text={" Dør/Vindu"}
          current={currentPage === "dorVindu"}
        />
        <NavBarItemStyled
          onClick={() => redirect({ url: "/provSelv" })}
          icon={"pencil"}
          text={" Prøv selv!"}
          current={currentPage === "provSelv"}
        />
      </Wrapper>
    );
  }
);
