import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import getPages from "../actions/getPages";
import setPages from "../actions/setPages";
import { getUser } from "@cerebral/firebase/operators";

export default [
  set(state`app.edit`, false),
  set(state`app.currentPage`, props`page`),
  set(state`app.currentSubCategory`, props`subCategory`),
  set(state`app.currentArticle`, props`article`),
  when(state`pages`),
  {
    true: [],
    false: [getPages, setPages]
  },
  getUser(),
  {
    success: [set(state`app.user`, props`user`)],
    error: []
  }
];
