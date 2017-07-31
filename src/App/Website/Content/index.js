import React, {createElement} from 'react';
import marksy from 'marksy/components';
import {ContentWrapper} from './elements';
import {connect} from 'cerebral/react';
import {state, signal} from 'cerebral/tags';
import Login from '../Login';
import Image from '../../../common/Image';
import Button from '../../../components/Button';


const compile = marksy({
  createElement,
  components: {
    Image
  },
});

export default connect({
  currentPage: state`app.currentPage`,
  page: state`pages.${state`app.currentPage`}`,
  linkClicked: signal`app.linkClicked`,
}, function Content({page, currentPage, linkClicked}) {
    if (currentPage === "login") {
      return (
        <ContentWrapper>
          <Login/>
        </ContentWrapper>
      )
    }
    return (
      <ContentWrapper>
        <Button
          text={"Rediger side"}
          onClick={() => linkClicked({url: `/edit/${currentPage}`})}
        />
        {compile(page || "").tree}
      </ContentWrapper>
    );
});
