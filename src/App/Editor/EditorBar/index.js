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
    saveClicked: signal`edit.saveClicked`,
    resetClicked: signal`edit.resetClicked`,
    cancelClicked: signal`edit.cancelClicked`
  },
  function EditorBar({ pageName, saveClicked, resetClicked, cancelClicked }) {
    return (
      <EditorWrapper>
        <TextWrapper>
          <TitleInput placeholder={pageName} />
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
