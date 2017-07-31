import React from 'react';
import {connect} from 'cerebral/react';
import {ModalWrapper, StyledText, ModalTitle, Content, ModalButtonsWrapper, StyledButton} from './elements';
import ImageForm from './ImageForm';
import ImagePreview from './ImagePreview';


export default connect ({

}, function AddImageModal() {
  return (
    <ModalWrapper>
      <ModalTitle>
        <StyledText>
          {"Legg til bilde"}
        </StyledText>
      </ModalTitle>
      <Content>
        <ImageForm/>
        <ImagePreview/>
      </Content>
      <ModalButtonsWrapper>
        <StyledButton text={"Legg til"}/>
        <StyledButton text={"Avbryt"}/>
      </ModalButtonsWrapper>
    </ModalWrapper>
  );
});
