import React, {createElement} from 'react';
import marksy from 'marksy';
import {PreviewWrapper} from './elements';
import {connect} from 'cerebral/react';

const compile = marksy({createElement});

export default connect({

}, function Preview() {
  return (
    <PreviewWrapper>
      {compile("# Header" || "").tree}
    </PreviewWrapper>
  );
});
