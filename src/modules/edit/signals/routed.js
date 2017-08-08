import { state, props } from "cerebral/tags";
import { set, when } from "cerebral/operators";

import editPage from "../chains/editPage";
import editSubCategory from "../chains/editSubCategory";
import editArticle from "../chains/editArticle";

export default [
  set(state`app.edit`, true),
  set(state`app.images`, []),
  set(state`edit.page`, props`page`),
  when(props`subCategory`),
  {
    true: [set(state`edit.subCategory`, props`subCategory`)],
    false: [set(state`edit.subCategory`, false)]
  },
  when(props`article`),
  {
    true: [set(state`edit.article`, props`article`)],
    false: [set(state`edit.article`, false)]
  },
  when(props`article`),
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
