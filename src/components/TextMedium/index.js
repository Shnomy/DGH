import React from 'react';
import {TextMediumWrapper} from './elements';

function TextMedium({children, className}) {
  return (
    <TextMediumWrapper className={className}>
      {children}
    </TextMediumWrapper>
  );
}

export default TextMedium;
