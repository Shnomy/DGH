import React from "react";
import { ContentWrapper, OuterWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import compile from "../../../marksy";

import SubMenu from "../../../common/SubMenu";
import Login from "../Login";
import Button from "../../../components/Button";

export default connect(
  {
    user: state`app.user`,
    currentPage: state`app.currentPage`,
    currentSubCategory: state`app.currentSubCategory`,
    currentArticle: state`app.currentArticle`,
    linkClicked: signal`app.linkClicked`,

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
    let buttonText = "";

    if (currentArticle) {
      content = "# an article";
    } else if (currentSubCategory) {
      buttonText = "Ny artikkel";
      content = subCategoryContent;
      menu = articlesInCategory;
    } else if (currentPage) {
      buttonText = "Ny kategori";
      content = pageContent;
      menu = subCategoriesInPage
        ? Object.keys(subCategoriesInPage).map(kat => {
            return {
              onClick: () => linkClicked({ url: `/${currentPage}/${kat}` }),
              title: subCategoriesInPage[kat].title
            };
          })
        : {};
    }
    console.log(menu);
    return (
      <OuterWrapper>
        <SubMenu buttons={menu} placeholder={buttonText} onAddClicked />
        <ContentWrapper>
          {user
            ? <Button
                text={"Rediger side"}
                onClick={() => linkClicked({ url: `/edit/${currentPage}` })}
              />
            : null}
          {compile(content || "").tree}
        </ContentWrapper>
      </OuterWrapper>
    );
  }
);
