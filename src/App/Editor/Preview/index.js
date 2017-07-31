import React, {createElement} from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import marksy from 'marksy/components';

import {PreviewWrapper} from './elements';
import Image from '../../../common/Image';

const compile = marksy({
  createElement,
  components: {
    Image
  },
});

export default connect({
  content: state`edit.content`
}, function Preview({content}) {
  return (
    <PreviewWrapper>
      {compile(content || "").tree}
    </PreviewWrapper>
  );
});
