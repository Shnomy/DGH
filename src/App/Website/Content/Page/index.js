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

    pageContent: state`pages.${state`app.currentPage`}.content`,
    subCategoriesInPage: state`pages.${state`app.currentPage`}.subCategories`,

    linkClicked: signal`app.linkClicked`,
    addSubCategory: signal`app.addSubCategory`,
    addForm: form(state`edit.addForm`)
  },
  function Content({
    user,
    currentPage,

    pageContent,
    subCategoriesInPage,

    linkClicked,
    addSubCategory,
    addForm
  }) {
    return (
      <OuterWrapper>
        <SubMenu
          isLoggedIn={Boolean(user)}
          buttons={
            subCategoriesInPage
              ? Object.keys(subCategoriesInPage).map(kat => {
                  return {
                    onClick: () =>
                      linkClicked({ url: `/${currentPage}/${kat}` }),
                    title: subCategoriesInPage[kat].title
                  };
                })
              : {}
          }
          placeholder={"Ny kategori"}
          onAddClicked={() =>
            addSubCategory({ page: currentPage, title: addForm.text.value })}
        />
        <ContentWrapper>
          {user
            ? <Button
                text={"Rediger side"}
                onClick={() => linkClicked({ url: `/edit/${currentPage}` })}
              />
            : null}
          {compile(pageContent || "").tree}
        </ContentWrapper>
      </OuterWrapper>
    );
  }
);
