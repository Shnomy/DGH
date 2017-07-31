import React from 'react';
import {connect} from 'cerebral/react';
import {ImagePreviewWrapper, Fieldset, StyledButton} from './elements';

export default connect({

}, function ImagePreview () {
  return (
      <ImagePreviewWrapper>
          <Fieldset>
            <legend>{"Forhåndsvisning"}</legend>
          </Fieldset>
      </ImagePreviewWrapper>
  );
});