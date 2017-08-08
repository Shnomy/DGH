import { set } from "cerebral/operators";
import { props, state, string } from "cerebral/tags";
import { value } from "@cerebral/firebase/operators";

import listenForImagesSubCategory from "../actions/listenForImagesSubCategory";

export default [
  value(
    string`pages.${props`page`}.subCategories.${props`subCategory`}.content`
  ),
  set(state`edit.content`, props`value`),
  set(state`edit.backup`, props`value`),
  listenForImagesSubCategory
];
