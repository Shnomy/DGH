import { set } from "cerebral/operators";
import { props, state, string } from "cerebral/tags";
import { value } from "@cerebral/firebase/operators";

import listenForImagesArticle from "../actions/listenForImagesArticle";

export default [
  value(string`articles.${props`article`}`),
  set(state`edit.content`, props`value.content`),
  set(state`edit.backup`, props`value.content`),
  set(state`edit.title`, props`value.title`),
  listenForImagesArticle
];
