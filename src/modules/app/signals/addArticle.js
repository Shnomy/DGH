import { redirect } from "@cerebral/router/operators";
import { props, string, state } from "cerebral/tags";
import addArticle from "../actions/addArticle";
import addArticleToSubCategory from "../actions/addArticleToSubCategory";

export default [
  addArticle,
  addArticleToSubCategory,
  redirect(
    string`/edit/${state`app.currentPage`}/${state`app.currentSubCategory`}/${props`key`}`
  )
];
