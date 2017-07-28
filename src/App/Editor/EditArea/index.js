import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';
import {EditorInput, EditorWrapper} from './elements';

export default connect({

}, function Editor() {
  return (
    <EditorWrapper>
      <EditorInput value={"text"}/>
    </EditorWrapper>
  );
});
