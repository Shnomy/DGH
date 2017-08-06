import React from "react";
import { connect } from "cerebral/react";
import InputText from "../../common/InputText";
import { state, signal } from "cerebral/tags";
import { form } from "@cerebral/forms";

import SubMenuItem from "../../components/SubMenuItem";

import {
  OuterWrapper,
  MenuText,
  InputWrapper,
  PlussIcon,
  BackIcon
} from "./elements";

export default connect(
  {
    currentPage: state`app.currentPage`,
    subCategories: state`pages.${state`app.currentPage`}.subCategories`,
    addForm: form(state`edit.addForm`),
    addSubCategory: signal`app.addSubCategory`
  },
  function SubMenu({ addSubCategory, addForm, currentPage, subCategories }) {
    const menu = Object.keys(subCategories || {}).map(el => {
      return (
        <SubMenuItem>
          {subCategories[el].title}
        </SubMenuItem>
      );
    });
    return (
      <OuterWrapper>
        <MenuText>
          <BackIcon name={"arrow-left"} />
          {"Undersider"}
        </MenuText>
        {menu}
        <InputWrapper>
          <InputText
            fieldPath={"edit.addForm.text"}
            placeholder={"Ny kategori"}
          />
          <PlussIcon
            name={"plus"}
            onClick={() =>
              addSubCategory({ page: currentPage, title: addForm.text.value })}
          />
        </InputWrapper>
      </OuterWrapper>
    );
  }
);
