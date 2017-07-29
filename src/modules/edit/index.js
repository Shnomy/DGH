import routed from './signals/routed';
import editorChanged from './signals/editorChanged';
import saveClicked from './signals/saveClicked';
import resetClicked from './signals/resetClicked';
import cancelClicked from './signals/cancelClicked';
import imageSelected from './signals/imageSelected';
import imageAdded from './signals/imageAdded';

export default {
  state: {
    images: {}
  },
  signals: {
    routed,
    editorChanged,
    saveClicked,
    resetClicked,
    cancelClicked,
    imageSelected,
    imageAdded,
  }
};
