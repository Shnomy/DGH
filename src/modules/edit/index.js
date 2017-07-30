import routed from './signals/routed';
import editorChanged from './signals/editorChanged';
import saveClicked from './signals/saveClicked';
import resetClicked from './signals/resetClicked';
import cancelClicked from './signals/cancelClicked';
import imageSelected from './signals/imageSelected';
import imageAdded from './signals/imageAdded';
import imageClicked from './signals/imageClicked';

export default {
  state: {
    images: {},
    showAddImageModal: false,
    addImageForm: {
      width: {
        value: 0
      },
      text: {
        value: ""
      },
      position: {
        value: false
      },
      altText: {
        value: ""
      },
      border: {
        value: 0
      },
      color: {
        value: "black"
      },
      corners: {
        value: 0
      },
    }
  },
  signals: {
    routed,
    editorChanged,
    saveClicked,
    resetClicked,
    cancelClicked,
    imageSelected,
    imageAdded,
    imageClicked,
  }
};
