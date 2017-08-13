import React from "react";
import { ContentWrapper, OuterWrapper, SubMenu } from "../elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { form } from "@cerebral/forms";
import compile from "../../../../marksy";

import Button from "../../../../components/Button";

export default connect(
  {
    user: state`app.user`,
    showMenu: state`app.showMenu`,
    currentPage: state`app.currentPage`,
    currentSubCategory: state`app.currentSubCategory`,

    subCategoryContent: state`pages.${state`app.currentPage`}.subCategories.${state`app.currentSubCategory`}.content`,
    articlesInCategory: state`articlesInCategory.${state`app.currentSubCategory`}`,

    linkClicked: signal`app.linkClicked`,
    addArticle: signal`app.addArticle`,
    contentClicked: signal`app.contentClicked`,
    addForm: form(state`edit.addForm`)
  },
  function SubCategory({
    user,
    showMenu,
    currentPage,
    currentSubCategory,

    subCategoryContent,
    articlesInCategory,

    linkClicked,
    contentClicked,
    addArticle,
    addForm
  }) {
    return (
      <OuterWrapper>
        <SubMenu
          showMenu={showMenu}
          isLoggedIn={Boolean(user)}
          buttons={
            articlesInCategory
              ? Object.keys(articlesInCategory).map(article => {
                  return {
                    onClick: () =>
                      linkClicked({
                        url: `/${currentPage}/${currentSubCategory}/${article}`
                      }),
                    title: articlesInCategory[article].title
                  };
                })
              : {}
          }
          placeholder={"Ny artikkel"}
          onAddClicked={() =>
            addArticle({
              page: currentPage,
              subCategory: currentSubCategory,
              title: addForm.text.value
            })}
          backClicked={() => linkClicked({ url: `/${currentPage}` })}
        />
        <ContentWrapper onClick={() => contentClicked()}>
          {user
            ? <Button
                text={"Rediger kategori"}
                onClick={() =>
                  linkClicked({
                    url: `/edit/${currentPage}/${currentSubCategory}`
                  })}
              />
            : null}
          {compile(subCategoryContent || "").tree}
        </ContentWrapper>
      </OuterWrapper>
    );
  }
);
