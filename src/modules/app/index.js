import pageRouted from './factories/pageRouted';
import login from './signals/login';
import editorChanged from './signals/editorChanged';
import save from './signals/save';
import toggleEdit from './signals/toggleEdit';
import forsideRouted from './signals/forsideRouted';
import setURL from './signals/setURL';

export default {
    state: {
      currentPage: "frontPage",
      edit: false,
    },
    signals: {
      frontPageRouted: pageRouted("forside"),
      boatsRouted: pageRouted("bater"),
      furnitureRouted: pageRouted("mobler"),
      doorWindowRouted: pageRouted("dorVindu"),
      tryYourselfRouted: pageRouted("provSelv"),
      loginRouted: pageRouted("login"),
      login,
      editorChanged,
      save,
      toggleEdit,
      forsideRouted,
      setURL
    }
}
