import pageRouted from './factories/pageRouted';
import login from './signals/login';
import editorChanged from './signals/editorChanged';
import save from './signals/save';
import toggleEdit from './signals/toggleEdit';

export default {
    state: {
      currentPage: "frontPage",
      edit: true,
    },
    signals: {
      frontPageRouted: pageRouted("frontPage"),
      boatsRouted: pageRouted("boats"),
      furnitureRouted: pageRouted("furniture"),
      doorWindowRouted: pageRouted("doorWindow"),
      tryYourselfRouted: pageRouted("tryYourself"),
      loginRouted: pageRouted("login"),
      login,
      editorChanged,
      save,
      toggleEdit,
    }
}
