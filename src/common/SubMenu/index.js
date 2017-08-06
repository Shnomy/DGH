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

export default function SubMenu({ buttons, placeholder, onAddClicked }) {
  const menu = Object.keys(buttons || {}).map(el => {
    return (
      <SubMenuItem onClick={buttons[el].onClick}>
        {buttons[el].title}
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
        <InputText fieldPath={"edit.addForm.text"} placeholder={placeholder} />
        <PlussIcon name={"plus"} onClick={() => onAddClicked()} />
      </InputWrapper>
    </OuterWrapper>
  );
}
