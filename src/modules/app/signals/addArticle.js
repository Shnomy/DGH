import { redirect } from "@cerebral/router/operators";
import { props, string } from "cerebral/tags";
import addArticle from "../actions/addArticle";
import addArticleToSubCategory from "../actions/addArticleToSubCategory";

export default [
  addArticle,
  addArticleToSubCategory,
  redirect(string`/edit/${props`page`}/${props`subCategory`}/${props`key`}`)
];
