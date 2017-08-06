import { when, set } from "cerebral/operators";
import { state } from "cerebral/tags";

import getSubCategory from "../actions/getSubCategory";
import setSubCategory from "../actions/setSubCategory";

export default [
  when(state`app.currentSubCategory`),
  {
    true: [
      when(state`articlesInCategory.${state`app.currentSubCategory`}`),
      {
        true: [],
        false: [
          set(state`loading.subCategory`, true),
          getSubCategory,
          set(state`loading.subCategory`, false),
          setSubCategory
        ]
      }
    ],
    false: []
  }
];
