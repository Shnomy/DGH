import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import compile from '../../../marksy';

import {PreviewWrapper} from './elements';


export default connect({
  content: state`edit.content`
}, function Preview({content}) {
  return (
    <PreviewWrapper>
      {compile(content || "").tree}
    </PreviewWrapper>
  );
});
