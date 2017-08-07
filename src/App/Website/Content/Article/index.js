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
    currentArticle: state`app.currentArticle`,

    articlesInCategory: state`articlesInCategory.${state`app.currentSubCategory`}`,
    articleContent: state`articles.${state`app.currentArticle`}.content`,

    linkClicked: signal`app.linkClicked`,
    addArticle: signal`app.addArticle`,
    addForm: form(state`edit.addForm`)
  },
  function Article({
    user,
    currentPage,
    currentSubCategory,
    currentArticle,

    articlesInCategory,
    articleContent,

    linkClicked,
    addArticle,
    addForm
  }) {
    return (
      <OuterWrapper>
        <SubMenu
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
              subCategory: currentSubCategory,
              title: addForm.text.value
            })}
          backClicked={() =>
            linkClicked({ url: `/${currentPage}/${currentSubCategory}` })}
        />
        <ContentWrapper>
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
