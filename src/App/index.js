import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import Website from './Website';
import Editor from './Editor';

export default connect({
  edit: state`app.edit`
}, function App({edit}) {
  return (
    <div>{edit ? <Editor/> : <Website/>}</div>
  );
});
