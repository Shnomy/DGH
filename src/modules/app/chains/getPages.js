import { when } from "cerebral/operators";
import { state } from "cerebral/tags";
import getPages from "../actions/getPages";
import setPages from "../actions/setPages";

export default [
  when(state`pages.${state`app.currentPage`}`),
  {
    true: [],
    false: [getPages, setPages]
  }
];
