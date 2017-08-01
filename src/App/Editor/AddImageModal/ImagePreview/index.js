import React from 'react';
import {connect} from 'cerebral/react';
import {ImagePreviewWrapper, Fieldset, Content} from './elements';

export default connect({

}, function ImagePreview () {
  return (
      <ImagePreviewWrapper>
          <Fieldset>
            <legend>{"Forhåndsvisning"}</legend>
            <Content>
              Kommer snart
            </Content>
          </Fieldset>
      </ImagePreviewWrapper>
  );
});
