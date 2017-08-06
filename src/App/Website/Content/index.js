import React from "react";
import { ContentWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import compile from "../../../marksy";

import Login from "../Login";
import Button from "../../../components/Button";

export default connect(
  {
    user: state`app.user`,
    currentPage: state`app.currentPage`,
    pageContent: state`pages.${state`app.currentPage`}.content`,
    linkClicked: signal`app.linkClicked`
  },
  function Content({ pageContent, currentPage, linkClicked, user }) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login />
        </ContentWrapper>
      );
    }
    return (
      <ContentWrapper>
        {user
          ? <Button
              text={"Rediger side"}
              onClick={() => linkClicked({ url: `/edit/${currentPage}` })}
            />
          : null}
        {compile(pageContent || "").tree}
      </ContentWrapper>
    );
  }
);
