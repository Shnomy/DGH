import pageRouted from "./signals/pageRouted";
import subCategoryRouted from "./signals/subCategoryRouted";
import articleRouted from "./signals/articleRouted";
import frontPageRouted from "./signals/frontPageRouted";
import loginRouted from "./signals/loginRouted";

import login from "./signals/login";
import editorChanged from "./signals/editorChanged";
import save from "./signals/save";
import toggleEdit from "./signals/toggleEdit";
import linkClicked from "./signals/linkClicked";
import forsideRouted from "./signals/forsideRouted";
import setURL from "./signals/setURL";
import redirect from "./signals/redirect";

export default {
  state: {
    currentPage: "frontPage",
    edit: false
  },
  signals: {
    frontPageRouted,
    loginRouted,
    pageRouted,
    subCategoryRouted,
    articleRouted,

    login,
    editorChanged,
    save,
    toggleEdit,
    linkClicked,
    forsideRouted,
    setURL,
    redirect
  }
};
