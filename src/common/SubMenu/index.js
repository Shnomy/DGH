import React from "react";
import { connect } from "cerebral/react";
import FontAwesome from "react-fontawesome";
import { state, signal } from "cerebral/tags";
import { form } from "@cerebral/forms";

import SubMenuItem from "../../components/SubMenuItem";
import InputText from "../../common/InputText";

import { OuterWrapper, MenuText } from "./elements";

export default connect(
  {
    currentPage: state`app.currentPage`,
    addSubCategory: signal`app.addSubCategory`,
    addForm: form(state`edit.addForm`)
  },
  function SubMenu({ addSubCategory, addForm, currentPage }) {
    return (
      <OuterWrapper>
        <MenuText>
          {"Undersider"}
        </MenuText>
        <SubMenuItem>
          {"Pram"}
        </SubMenuItem>
        <SubMenuItem>
          {"Snekke"}
        </SubMenuItem>
        <SubMenuItem>
          {"Seilbåt"}
        </SubMenuItem>
        <InputText fieldPath={"edit.addForm.text"} label={"Ny kategori"} />
        <FontAwesome
          name={"plus"}
          onClick={() =>
            addSubCategory({ page: currentPage, title: addForm.text.value })}
        />
      </OuterWrapper>
    );
  }
);
