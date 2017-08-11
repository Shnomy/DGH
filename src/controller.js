import { Controller } from "cerebral";
import Devtools from "cerebral/devtools";
import FirebaseProvider from "@cerebral/firebase";
import FormsProvider from "@cerebral/forms";
import Router from "@cerebral/router";
import configs from "./config";
import app from "./modules/app";
import edit from "./modules/edit";

export default Controller({
  devtools:
    process.env.REACT_APP_ENV === "prod"
      ? null
      : Devtools({
          host: "localhost:8787"
        }),
  state: {
    urls: {},
    pages: {},
    articlesInCategory: {},
    articles: {},
    loading: {}
  },
  modules: {
    app: app,
    edit: edit,
    router: Router({
      routes: [
        {
          path: "/",
          signal: "app.frontPageRouted"
        },
        {
          path: "/forside",
          signal: "app.forsideRouted"
        },
        {
          path: "/login",
          signal: "app.loginRouted"
        },
        {
          path: "/edit/:page",
          signal: "edit.editPageRouted"
        },
        {
          path: "/edit/:page/:subCategory",
          signal: "edit.editSubCategoryRouted"
        },
        {
          path: "/edit/:page/:subCategory/:article",
          signal: "edit.editArticleRouted"
        },
        {
          path: "/:page",
          signal: "app.pageRouted"
        },
        {
          path: "/:page/:subCategory",
          signal: "app.subCategoryRouted"
        },
        {
          path: "/:page/:subCategory/:article",
          signal: "app.articleRouted"
        }
      ]
    })
  },
  providers: [
    FirebaseProvider({
      config: configs[process.env.REACT_APP_ENV || "dev"].firebase
    }),
    FormsProvider({})
  ]
});
