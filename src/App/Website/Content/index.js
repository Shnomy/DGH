import React from "react";
import { SubMenu, ContentWrapper, ContentPageWrapper } from "./elements";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import compile from "../../../marksy";

import getContent from "../../../computeds/getContent";

import Login from "../Login";

export default connect(
  {
    content: getContent,
    showMenu: state`app.showMenu`
  },
  function Content({ content, showMenu }) {
    return (
      <ContentPageWrapper>
        <SubMenu
          title={content.menuTitle}
          buttons={content.menu}
          show={showMenu}
        />
        <ContentWrapper>
          {compile(content.text || "").tree}
        </ContentWrapper>
      </ContentPageWrapper>
    );
  }
);
