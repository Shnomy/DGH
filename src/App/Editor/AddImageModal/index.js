import React from 'react';
import {connect} from 'cerebral/react';
import {ModalWrapper, StyledText, ModalTitle} from './elements';
import ImageForm from './ImageForm';

export default connect ({

}, function AddImageModal() {
  return (
    <ModalWrapper>
      <ModalTitle>
        <StyledText>
          {"Legg til bilde"}
        </StyledText>
      </ModalTitle>
      <ImageForm/>
    </ModalWrapper>
  );
});
