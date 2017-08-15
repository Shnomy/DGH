import { redirect } from "@cerebral/router/operators";
import { set } from "cerebral/operators";
import { props, state } from "cerebral/tags";

export default [set(state`app.showMenu`, false), redirect(props`url`)];
