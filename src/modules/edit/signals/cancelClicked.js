import { redirect } from "@cerebral/router/operators";
import { string, state } from "cerebral/tags";

export default [
  redirect(string`/${state`edit.page` === "forside" ? "" : state`edit.page`}`)
];
