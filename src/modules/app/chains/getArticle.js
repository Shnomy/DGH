import { when, set } from "cerebral/operators";
import { state } from "cerebral/tags";
import getArticle from "../actions/getArticle";
import setArticle from "../actions/setArticle";

export default [
  when(state`app.currentArticle`),
  {
    true: [
      when(state`articles.${state`app.currentArticle`}`),
      {
        true: [],
        false: [
          set(state`loading.article`, true),
          getArticle,
          set(state`loading.article`, false),
          setArticle
        ]
      }
    ],
    false: []
  }
];
