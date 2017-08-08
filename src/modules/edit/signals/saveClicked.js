import { set, when } from "cerebral/operators";
import { string, state } from "cerebral/tags";

import saveArticle from "../actions/saveArticle";
import saveSubCategory from "../actions/saveSubCategory";
import savePage from "../actions/savePage";

export default [
  set(state`edit.backup`, state`edit.content`),
  when(state`edit.article`),
  {
    true: [saveArticle],
    false: [
      when(state`edit.subCategory`),
      {
        true: [saveSubCategory],
        false: [savePage]
      }
    ]
  }
];
