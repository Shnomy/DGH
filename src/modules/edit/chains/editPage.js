import { set } from "cerebral/operators";
import { props, state, string } from "cerebral/tags";
import { value } from "@cerebral/firebase/operators";

import listenForImagesPage from "../actions/listenForImagesPage";

export default [
  value(string`pages.${props`page`}`),
  set(state`edit.content`, props`value.content`),
  set(state`edit.backup`, props`value.content`),
  set(state`edit.noEditTitle`, true),
  listenForImagesPage
];
