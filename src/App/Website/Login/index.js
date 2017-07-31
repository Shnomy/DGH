import React from 'react';
import {connect} from 'cerebral/react';
import {signal} from 'cerebral/tags';
import {ButtonStyling, ButtonWrapper} from './elements';

export default connect({
  login: signal`app.login`,
}, function Login ({login}) {
  return(
    <ButtonWrapper>
      <ButtonStyling onClick={() => login()}>{"Login med Google"}</ButtonStyling>
    </ButtonWrapper>
  );
});
