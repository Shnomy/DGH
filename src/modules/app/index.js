import pageRouted from "./signals/pageRouted";
import subCategoryRouted from "./signals/subCategoryRouted";
import articleRouted from "./signals/articleRouted";
import frontPageRouted from "./signals/frontPageRouted";
import loginRouted from "./signals/loginRouted";

import login from "./signals/login";
import editorChanged from "./signals/editorChanged";
import toggleEdit from "./signals/toggleEdit";
import linkClicked from "./signals/linkClicked";
import forsideRouted from "./signals/forsideRouted";
import setURL from "./signals/setURL";
import redirect from "./signals/redirect";
import imageClicked from "./signals/imageClicked";

import addSubCategory from "./signals/addSubCategory";
import addArticle from "./signals/addArticle";
import contentClicked from "./signals/contentClicked";
import menuClicked from "./signals/menuClicked";
import toggleMenu from "./signals/toggleMenu";

export default {
  state: {
    currentPage: "frontPage",
    showMenu: false,
    edit: false
  },
  signals: {
    frontPageRouted,
    loginRouted,
    pageRouted,
    subCategoryRouted,
    articleRouted,
    imageClicked,

    login,
    editorChanged,
    toggleEdit,
    linkClicked,
    forsideRouted,
    setURL,
    redirect,

    addSubCategory,
    addArticle,
    contentClicked,
    menuClicked,
    toggleMenu
  }
};
