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
<<<<<<< HEAD
    page: state`pages.${state`app.currentPage`}.content`,
    linkClicked: signal`app.linkClicked`
  },
  function Content({ page, currentPage, linkClicked, user }) {
=======
    pageContent: state`pages.${state`app.currentPage`}.content`,
    linkClicked: signal`app.linkClicked`
  },
  function Content({ pageContent, currentPage, linkClicked, user }) {
>>>>>>> c687ed5a7c563cee31622cdb32290cddc40bc70b
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
<<<<<<< HEAD
        {compile(page || "").tree}
=======
        {compile(pageContent || "").tree}
>>>>>>> c687ed5a7c563cee31622cdb32290cddc40bc70b
      </ContentWrapper>
    );
  }
);
