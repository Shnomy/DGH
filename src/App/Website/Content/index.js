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
    currentSubCategory: state`app.currentSubCategory`,
    currentArticle: state`app.currentArticle`,

    subCategoryContent: state`pages.${state`app.currentPage`}.subCategories.${state`app.currentSubCategory`}.content`,
    articlesInCategory: state`articlesInCategory.${state`app.currentSubCategory`}`,
    pageContent: state`pages.${state`app.currentPage`}.content`,
    subCategoriesInPage: state`pages.${state`app.currentPage`}.subCategories`
  },
  function Content({
    user,
    currentPage,
    currentSubCategory,
    currentArticle,

    subCategoryContent,
    articlesInCategory,
    pageContent,
    subCategoriesInPage,

    linkClicked
  }) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login />
        </ContentWrapper>
      );
    }

    let content = "";
    let menu = {};

    if (currentArticle) {
      content = "# an article";
    } else if (currentSubCategory) {
      content = subCategoryContent;
      menu = articlesInCategory;
    } else if (currentPage) {
      content = pageContent;
      menu = subCategoriesInPage;
    }
    console.log(content);
    return (
      <ContentWrapper>
        {user
          ? <Button
              text={"Rediger side"}
              onClick={() => linkClicked({ url: `/edit/${currentPage}` })}
            />
          : null}
        {compile(content || "").tree}
      </ContentWrapper>
    );
  }
);
