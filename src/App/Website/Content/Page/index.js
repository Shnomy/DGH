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

    pageContent: state`pages.${state`app.currentPage`}.content`,
    subCategoriesInPage: state`pages.${state`app.currentPage`}.subCategories`,

    linkClicked: signal`app.linkClicked`,
    addSubCategory: signal`app.addSubCategory`,
    contentClicked: signal`app.contentClicked`,
    addForm: form(state`edit.addForm`)
  },
  function Content({
    user,
    showMenu,
    currentPage,

    pageContent,
    subCategoriesInPage,

    linkClicked,
    contentClicked,
    addSubCategory,
    addForm
  }) {
    return (
      <OuterWrapper>
        <SubMenu
          showMenu={showMenu}
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
        <ContentWrapper onClick={() => contentClicked()}>
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
