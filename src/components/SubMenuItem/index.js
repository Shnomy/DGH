import React from "react";
import { connect } from "cerebral/react";

import { OuterWrapper } from "./elements";

export default connect({}, function SubMenuItem({ children, onClick }) {
  return (
    <OuterWrapper onClick={onClick}>
      {children}
    </OuterWrapper>
  );
});
