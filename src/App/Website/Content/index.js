import React from 'react';
import {ContentWrapper} from './elements';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import compile from '../../../marksy';

import Login from '../Login';
import Button from '../../../components/Button';

export default connect({
  user: state`app.user`,
  currentPage: state`app.currentPage`,
  page: state`pages.${state`app.currentPage`}`
}, function Content({page, currentPage, user}) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login/>
        </ContentWrapper>
      )
    }
    return (
      <ContentWrapper>
        {user ? <Button text={"Rediger side"}/> : null}
        {compile(page || "").tree}
      </ContentWrapper>
    );
});
