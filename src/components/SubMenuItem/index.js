import React from "react";
import { connect } from "cerebral/react";

import { OuterWrapper } from "./elements";

export default connect({}, function SubMenuItem({
  children,
  onClick,
  className,
  current,
  isTitle
}) {
  return (
    <OuterWrapper
      isTitle={isTitle}
      current={current}
      onClick={onClick}
      className={className}
    >
      {children}
    </OuterWrapper>
  );
});
