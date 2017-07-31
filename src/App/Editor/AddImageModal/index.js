import React from 'react';
import {connect} from 'cerebral/react';
import {signal} from 'cerebral/tags';
import {
  ModalWrapper,
  StyledText,
  ModalTitle,
  Content,
  ModalButtonsWrapper,
  StyledButton,
  StyledButtonLeft
 } from './elements';
import ImageForm from './ImageForm';
import ImagePreview from './ImagePreview';

export default connect ({
  closeAddImageModalClicked: signal`edit.closeAddImageModalClicked`,
  addImageClicked: signal`edit.addImageClicked`,
}, function AddImageModal({closeAddImageModalClicked, addImageClicked}) {
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
        <StyledButtonLeft
          text={"Legg til"}
          onClick={() => addImageClicked()}
        />
        <StyledButton
          text={"Avbryt"}
          onClick={() => closeAddImageModalClicked()}
        />
      </ModalButtonsWrapper>
    </ModalWrapper>
  );
});
