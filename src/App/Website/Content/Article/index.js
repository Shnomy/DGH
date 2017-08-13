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
    currentArticle: state`app.currentArticle`,

    articlesInCategory: state`articlesInCategory.${state`app.currentSubCategory`}`,
    articleContent: state`articles.${state`app.currentArticle`}.content`,

    linkClicked: signal`app.linkClicked`,
    contentClicked: signal`app.contentClicked`,
    addArticle: signal`app.addArticle`,
    addForm: form(state`edit.addForm`)
  },
  function Article({
    user,
    showMenu,
    currentPage,
    currentSubCategory,
    currentArticle,

    articlesInCategory,
    articleContent,

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
          backClicked={() =>
            linkClicked({ url: `/${currentPage}/${currentSubCategory}` })}
        />
        <ContentWrapper onClick={() => contentClicked()}>
          {user
            ? <Button
                text={"Rediger artikkel"}
                onClick={() =>
                  linkClicked({
                    url: `/edit/${currentPage}/${currentSubCategory}/${currentArticle}`
                  })}
              />
            : null}
          {compile(articleContent || "").tree}
        </ContentWrapper>
      </OuterWrapper>
    );
  }
);
