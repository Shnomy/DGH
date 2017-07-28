import React from 'react';
import {connect} from 'cerebral/react';
import {EditorWrapper, ButtonWrapper, TextWrapper} from './elements';
import Button from '../../../components/Button';

export default connect({

}, function EditorBar() {
  return (
    <EditorWrapper>
      <TextWrapper>
        <h3>{"Teksten er her da"}</h3>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          text={"Lagre"}
        />
        <Button
          text={"Reset"}
        />
        <Button
          text={"Avbryt"}
        />
      </ButtonWrapper>
    </EditorWrapper>
  )
});
