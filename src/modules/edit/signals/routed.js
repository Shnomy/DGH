import { state, props } from "cerebral/tags";
import { set, when } from "cerebral/operators";

import editPage from "../chains/editPage";
import editSubCategory from "../chains/editSubCategory";
import editArticle from "../chains/editArticle";

export default [
  set(state`app.edit`, true),
  set(state`edit.page`, props`page`),
  set(state`edit.subCategory`, props`subCategory`),
  set(state`edit.article`, props`article`),
  when(props`artcle`),
  {
    true: [editArticle],
    false: [
      when(props`subCategory`),
      {
        true: [editSubCategory],
        false: [editPage]
      }
    ]
  }
];
