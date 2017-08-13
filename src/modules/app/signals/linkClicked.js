import { redirect } from "@cerebral/router/operators";
import { props } from "cerebral/tags";

export default [redirect(props`url`)];
