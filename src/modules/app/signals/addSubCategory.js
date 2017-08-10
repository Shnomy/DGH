import { redirect } from "@cerebral/router/operators";
import { props, string } from "cerebral/tags";
import addSubCategory from "../actions/addSubCategory";

export default [
  addSubCategory,
  redirect(string`/edit/${props`page`}/${props`key`}`)
];
