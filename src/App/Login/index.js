import React from 'react';
import {connect} from 'cerebral/react';
import {signal} from 'cerebral/tags';
import {ButtonStyling, ButtonWrapper} from './elements';

export default connect({
  login: signal`app.login`,
  toggleEdit: signal`app.toggleEdit`,
}, function Login ({login, toggleEdit}) {
  return(
    <ButtonWrapper>
      <ButtonStyling onClick={() => login()}>{"Login med Google"}</ButtonStyling>
      <ButtonStyling onClick={() => toggleEdit()}>{"Rediger"}</ButtonStyling>
    </ButtonWrapper>
  );
});
