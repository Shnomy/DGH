import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';
import {EditorInput, EditorWrapper} from './elements';

export default connect({
  onChange: signal`edit.editorChanged`,
  content: state`edit.content`
}, function Editor({onChange, content}) {
  return (
    <EditorWrapper>
      <EditorInput onChange={(e) => onChange({text: e.target.value})} value={content}/>
    </EditorWrapper>
  );
});
