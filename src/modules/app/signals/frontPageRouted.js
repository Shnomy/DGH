import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import getPages from "../actions/getPages";
import setPages from "../actions/setPages";
import { getUser } from "@cerebral/firebase/operators";

export default [
  set(state`app.edit`, false),
  set(state`app.currentPage`, "forside"),
  set(state`app.currentSubCategory`, null),
  set(state`app.currentArticle`, null),
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
