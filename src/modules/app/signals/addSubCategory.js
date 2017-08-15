import { redirect } from "@cerebral/router/operators";
import { props, string, state } from "cerebral/tags";
import addSubCategory from "../actions/addSubCategory";

export default [
  addSubCategory,
  redirect(string`/edit/${state`app.currentPage`}/${props`key`}`)
];
