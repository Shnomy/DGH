import { set } from "cerebral/operators";
import { props, state, string } from "cerebral/tags";
import { value } from "@cerebral/firebase/operators";

export default [
  value(string`articles.${props`article`}.content`),
  set(state`edit.content`, props`value`),
  set(state`edit.backup`, props`value`)
];
