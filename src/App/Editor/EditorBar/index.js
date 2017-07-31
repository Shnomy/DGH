import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';
import {
  EditorWrapper,
  ButtonWrapper,
  TextWrapper,
  PageText
} from './elements';
import Button from '../../../components/Button';

export default connect({
  pageName: state`edit.page`,
  saveClicked: signal`edit.saveClicked`,
  resetClicked: signal`edit.resetClicked`,
  cancelClicked: signal`edit.cancelClicked`,
}, function EditorBar({pageName, saveClicked, resetClicked, cancelClicked}) {
  return (
    <EditorWrapper>
      <TextWrapper>
        <PageText>{pageName}</PageText>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => saveClicked()}
          text={"Lagre"}
        />
        <Button
          onClick={() => resetClicked()}
          text={"Reset"}
        />
        <Button
          onClick={() => cancelClicked()}
          text={"Avbryt"}
        />
      </ButtonWrapper>
    </EditorWrapper>
  )
});
