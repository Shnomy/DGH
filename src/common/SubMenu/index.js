import React from "react";

import InputText from "../../common/InputText";
import SubMenuItem from "../../components/SubMenuItem";
import {
  OuterWrapper,
  MenuText,
  InputWrapper,
  PlussIcon,
  BackIcon
} from "./elements";

export default function SubMenu({
  buttons,
  placeholder,
  onAddClicked,
  backClicked
}) {
  const menu = Object.keys(buttons || {}).map(el => {
    return (
      <SubMenuItem key={el} onClick={buttons[el].onClick}>
        {buttons[el].title}
      </SubMenuItem>
    );
  });
  return (
    <OuterWrapper>
      {backClicked
        ? <MenuText onClick={backClicked}>
            <BackIcon name={"arrow-left"} />
            {"Tilbake"}
          </MenuText>
        : null}
      {menu}
      <InputWrapper>
        <InputText fieldPath={"edit.addForm.text"} placeholder={placeholder} />
        <PlussIcon name={"plus"} onClick={() => onAddClicked()} />
      </InputWrapper>
    </OuterWrapper>
  );
}
