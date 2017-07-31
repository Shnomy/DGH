import pageRouted from './factories/pageRouted';
import login from './signals/login';
import editorChanged from './signals/editorChanged';
import save from './signals/save';
import toggleEdit from './signals/toggleEdit';
import linkClicked from './signals/linkClicked';

export default {
    state: {
      currentPage: "frontPage",
      edit: false,
    },
    signals: {
      frontPageRouted: pageRouted("forside"),
      editPageRouted: pageRouted("edit/"),
      boatsRouted: pageRouted("bater"),
      furnitureRouted: pageRouted("mobler"),
      doorWindowRouted: pageRouted("dorVindu"),
      tryYourselfRouted: pageRouted("provSelv"),
      loginRouted: pageRouted("login"),
      login,
      editorChanged,
      save,
      toggleEdit,
      linkClicked,
    }
}
