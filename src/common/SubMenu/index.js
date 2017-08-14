import React from "react";
import { connect } from "cerebral/react";
import { signal } from "cerebral/tags";

import InputText from "../../common/InputText";
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
    linkClicked: signal`app.linkClicked`
  },
  function SubMenu({
    buttons,
    placeholder,
    onAddClicked,
    backClicked,
    isLoggedIn,
    className,
    linkClicked,
    title
  }) {
    const menu = buttons
      ? buttons.map(el => {
          return (
            <SubMenuItem
              key={el.id}
              current={el.current}
              onClick={() => linkClicked({ url: el.url })}
            >
              {el.title}
            </SubMenuItem>
          );
        })
      : null;

    return (
      <OuterWrapper className={className}>
        {title
          ? <SubMenuItem isTitle onClick={() => linkClicked({ url: "/" })}>
              {title}
            </SubMenuItem>
          : null}
        {menu}
        {isLoggedIn
          ? <InputWrapper>
              <InputText
                fieldPath={"edit.addForm.text"}
                placeholder={placeholder}
              />
              <PlussIcon name={"plus"} onClick={() => onAddClicked()} />
            </InputWrapper>
          : null}
      </OuterWrapper>
    );
  }
);
