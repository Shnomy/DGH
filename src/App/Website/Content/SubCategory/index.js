import React from "react";
import { ContentWrapper, OuterWrapper } from "../elements";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { form } from "@cerebral/forms";
import compile from "../../../../marksy";

import SubMenu from "../../../../common/SubMenu";
import Button from "../../../../components/Button";

export default connect(
  {
    user: state`app.user`,
    currentPage: state`app.currentPage`,
    currentSubCategory: state`app.currentSubCategory`,

    subCategoryContent: state`pages.${state`app.currentPage`}.subCategories.${state`app.currentSubCategory`}.content`,
    articlesInCategory: state`articlesInCategory.${state`app.currentSubCategory`}`,

    linkClicked: signal`app.linkClicked`,
    addArticle: signal`app.addArticle`,
    addForm: form(state`edit.addForm`)
  },
  function SubCategory({
    user,
    currentPage,
    currentSubCategory,

    subCategoryContent,
    articlesInCategory,

    linkClicked,
    addArticle,
    addForm
  }) {
    return (
      <OuterWrapper>
        <SubMenu
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
        <ContentWrapper>
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
