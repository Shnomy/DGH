import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import {
  EditorWrapper,
  ButtonWrapper,
  TextWrapper,
  PageText,
  TitleInput,
  StyledButton
} from "./elements";

export default connect(
  {
    pageName: state`edit.page`,
    title: state`edit.title`,
    noTitle: state`edit.noEditTitle`,
    saveClicked: signal`edit.saveClicked`,
    resetClicked: signal`edit.resetClicked`,
    cancelClicked: signal`edit.cancelClicked`,
    titleChanged: signal`edit.titleChanged`
  },
  function EditorBar({
    pageName,
    saveClicked,
    resetClicked,
    cancelClicked,
    titleChanged,
    title,
    noTitle
  }) {
    return (
      <EditorWrapper>
        <TextWrapper>
          <TitleInput
            value={noTitle ? pageName : title}
            disabled={noTitle}
            onChange={e => titleChanged({ text: e.target.value })}
            placeholder={pageName}
          />
          <PageText>
            {pageName}
          </PageText>
        </TextWrapper>
        <ButtonWrapper>
          <StyledButton onClick={() => saveClicked()} text={"Lagre"} />
          <StyledButton onClick={() => resetClicked()} text={"Reset"} />
          <StyledButton onClick={() => cancelClicked()} text={"Avbryt"} />
        </ButtonWrapper>
      </EditorWrapper>
    );
  }
);
