import { Controller } from "cerebral";
import Devtools from "cerebral/devtools";
import FirebaseProvider from "@cerebral/firebase";
import FormsProvider from "@cerebral/forms";
import Router from "@cerebral/router";
import app from "./modules/app";
import edit from "./modules/edit";

export default Controller({
  devtools:
    process.env.NODE_ENV === "production"
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
          signal: "edit.routed"
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
      config: {
        apiKey: "AIzaSyDQOw1Y14ILvjw2e1Ue2vi21kU3D0urvP0",
        authDomain: "dengladehoevel.firebaseapp.com",
        databaseURL: "https://dengladehoevel.firebaseio.com",
        projectId: "dengladehoevel",
        storageBucket: "dengladehoevel.appspot.com",
        messagingSenderId: "716208147989"
      }
    }),
    FormsProvider({})
  ]
});
