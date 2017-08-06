import React from "react";
import { ContentWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { form } from "@cerebral/forms";
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
    subCategoriesInPage: state`pages.${state`app.currentPage`}.subCategories`,

    addSubCategory: signal`app.addSubCategory`,
    addArticle: signal`app.addArticle`,
    addForm: form(state`edit.addForm`)
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

    linkClicked,
    addSubCategory,
    addArticle,
    addForm
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
    let onAddClicked = null;

    if (currentArticle) {
      content = "# an article";
      buttonText = "Ny artikkel";
      onAddClicked = () =>
        addArticle({
          subCategory: currentSubCategory,
          title: addForm.text.value
        });
      menu = articlesInCategory;
    } else if (currentSubCategory) {
      buttonText = "Ny artikkel";
      content = subCategoryContent;
      onAddClicked = () =>
        addArticle({
          subCategory: currentSubCategory,
          title: addForm.text.value
        });
      menu = articlesInCategory;
    } else if (currentPage) {
      buttonText = "Ny kategori";
      content = pageContent;
      onAddClicked = () =>
        addSubCategory({ page: currentPage, title: addForm.text.value });
      menu = subCategoriesInPage
        ? Object.keys(subCategoriesInPage).map(kat => {
            return {
              onClick: () => linkClicked({ url: `/${currentPage}/${kat}` }),
              title: subCategoriesInPage[kat].title
            };
          })
        : {};
    }

    return (
      <ContentWrapper>
        <SubMenu
          buttons={menu}
          placeholder={buttonText}
          onAddClicked={onAddClicked}
        />
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
