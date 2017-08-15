import React from "react";
import { SubMenu, ContentWrapper, ContentPageWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import compile from "../../../marksy";

import getContent from "../../../computeds/getContent";

import Login from "../Login";

export default connect(
  {
    content: getContent,
    user: state`app.user`,
    currentPage: state`app.currentPage`,
    showMenu: state`app.showMenu`,
    redirect: signal`app.redirect`,
    addArticle: signal`app.addArticle`,
    addSubCategory: signal`app.addSubCategory`
  },
  function Content({
    content,
    user,
    showMenu,
    currentPage,
    redirect,
    addArticle,
    addSubCategory
  }) {
    if (currentPage === "login") {
      return (
        <ContentPageWrapper>
          <Login />
        </ContentPageWrapper>
      );
    }

    return (
      <ContentPageWrapper>
        <SubMenu
          isLoggedIn={Boolean(user)}
          title={content.menuTitle}
          buttons={content.menu}
          show={showMenu}
          onAddClicked={content.addArticle ? addArticle : addSubCategory}
        />
        <ContentWrapper>
          <button onClick={() => redirect({ url: content.editURL })}>
            {"Rediger"}
          </button>
          {compile(content.text || "").tree}
        </ContentWrapper>
      </ContentPageWrapper>
    );
  }
);
