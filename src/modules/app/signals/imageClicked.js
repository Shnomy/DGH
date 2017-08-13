import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import setScroll from "../actions/setScroll";

export default [set(state`app.imageOverlayUrl`, props`url`), setScroll];
