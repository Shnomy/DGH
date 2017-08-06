import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import routed from "../factories/routed";

export default [
  routed([
    set(state`app.currentPage`, "forside"),
    set(state`app.currentSubCategory`, null),
    set(state`app.currentArticle`, null)
  ])
];
