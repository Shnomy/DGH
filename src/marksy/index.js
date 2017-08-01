import React, {createElement} from 'react';
import marksy from 'marksy/components';

import {
  H1,
  H2,
  H3,
  H4,
  Ol,
  Ul,
  P,
  A,
  Strong,
  Em,
  Br,
} from './elements';
import Image from '../common/Image';

const compile = marksy({
  createElement,
  elements: {
    h1 ({id, children}) {
      return <H1>{children}</H1>
    },
    h2 ({id, children}) {
      return <H2>{children}</H2>
    },
    h3 ({id, children}) {
      return <H3>{children}</H3>
    },
    h4 ({id, children}) {
      return <H4>{children}</H4>
    },
    ol ({children}) {
      return <Ol>{children}</Ol>
    },
    ul ({children}) {
      return <Ul>{children}</Ul>
    },
    p ({children}) {
      return <P>{children}</P>
    },
    a ({href, title, target, children}) {
      return <A href={href} title={title} target={target}>{children}</A>
    },
    strong ({children}) {
      return <Strong>{children}</Strong>
    },
    em ({children}) {
      return <Em>{children}</Em>
    },
    br () {
      return <Br/>
    }
  },
  components: {
    Image
  },
});

export default compile;
