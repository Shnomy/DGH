import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";

import { Wrapper, ImageWrapper } from "./elements";

export default connect(
  {
    url: state`app.imageOverlayUrl`,
    imageClicked: signal`app.imageClicked`
  },
  function({ url, imageClicked }) {
    if (!url) {
      return null;
    }

    return (
      <Wrapper onClick={() => imageClicked({ url: false })}>
        <ImageWrapper url={url} />
      </Wrapper>
    );
  }
);
