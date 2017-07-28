import React from 'react';
import {ButtonWrapper} from './elements';
import TextMedium from '../TextMedium';

function Button({text, onClick, className}) {
  return (
    <ButtonWrapper
      onClick={onClick}
      className={className}
      >
      <TextMedium>
        {text}
      </TextMedium>
    </ButtonWrapper>
  );
}

export default Button;
