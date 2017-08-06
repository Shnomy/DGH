import { when } from "cerebral/operators";
import { state } from "cerebral/tags";

import getSubCategory from "../actions/getSubCategory";
import setSubCategory from "../actions/setSubCategory";

export default [
  when(state`app.currentSubCategory`),
  {
    true: [
      when(state`articleInCategory.${state`app.currentSubCategory`}`),
      {
        true: [],
        false: [getSubCategory, setSubCategory]
      }
    ],
    false: []
  }
];
