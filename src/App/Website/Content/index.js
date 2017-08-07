import React from "react";
import { ContentWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";

import Article from "./Article";
import SubCategory from "./SubCategory";
import Page from "./Page";

import Login from "../Login";

export default connect(
  {
    currentPage: state`app.currentPage`,
    currentSubCategory: state`app.currentSubCategory`,
    currentArticle: state`app.currentArticle`
  },
  function Content({ currentPage, currentSubCategory, currentArticle }) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login />
        </ContentWrapper>
      );
    }

    if (currentArticle) {
      return <Article />;
    } else if (currentSubCategory) {
      return <SubCategory />;
    } else if (currentPage) {
      return <Page />;
    }
  }
);
