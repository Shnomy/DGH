import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';
import {EditorInput, SaveButton, EditorWrapper} from './elements';

export default connect({
  currentPage: state`app.currentPage`,
  text: state`pages.${state`app.currentPage`}`,
  editorChanged: signal`app.editorChanged`,
  save: signal`app.save`
}, function Editor({text, editorChanged, currentPage, save}) {
  return (
    <EditorWrapper>
      <SaveButton onClick={() => save()}>
        {"Lagre"}
      </SaveButton>
      <EditorInput value={text} onChange={(e) => editorChanged({path: `pages.${currentPage}`, text: e.target.value})}/>
    </EditorWrapper>
  );
});
