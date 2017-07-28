import React, {createElement} from 'react';
import marksy from 'marksy';
import {ContentWrapper} from './elements';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import Login from '../Login';

const compile = marksy({createElement});

export default connect({
  currentPage: state`app.currentPage`,
  page: state`pages.${state`app.currentPage`}`
}, function Content({page, currentPage}) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login/>
        </ContentWrapper>
      )
    }
    return (
      <ContentWrapper>
        {compile(page || "").tree}
      </ContentWrapper>
    );
});
