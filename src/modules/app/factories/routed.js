import { parallel } from "cerebral";
import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { getUser } from "@cerebral/firebase/operators";

import getData from "../chains/getData";

export default function routed(cont = []) {
  return [
    set(state`app.edit`, false),
    cont,
    parallel([
      getData,
      [
        getUser(),
        {
          success: [set(state`app.user`, props`user`)],
          error: []
        }
      ]
    ])
  ];
}
