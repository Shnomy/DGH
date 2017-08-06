import routed from "../factories/routed";
import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  routed([
    set(state`app.currentPage`, props`page`),
    set(state`app.currentSubCategory`, props`subCategory`),
    set(state`app.currentArticle`, null)
  ])
];
