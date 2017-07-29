import React, {createElement} from 'react';
import marksy from 'marksy';
import {PreviewWrapper} from './elements';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';

const compile = marksy({createElement});

export default connect({
  content: state`edit.content`
}, function Preview({content}) {
  return (
    <PreviewWrapper>
      {compile(content || "").tree}
    </PreviewWrapper>
  );
});
