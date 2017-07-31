import routed from './signals/routed';
import editorChanged from './signals/editorChanged';
import saveClicked from './signals/saveClicked';
import resetClicked from './signals/resetClicked';
import cancelClicked from './signals/cancelClicked';
import imageSelected from './signals/imageSelected';
import imageAdded from './signals/imageAdded';
import imageClicked from './signals/imageClicked';
import fieldChanged from './signals/fieldChanged';
import closeAddImageModalClicked from './signals/closeAddImageModalClicked';
import addImageClicked from './signals/addImageClicked';

export default {
  state: {
    images: {},
    showAddImageModal: false,
    addImageForm: {
      width: {
        value: 100,
        defaultValue: 100
      },
      text: {
        value: "",
        defaultValue: ""
      },
      position: {
        value: "full",
        defaultValue: "full"
      },
      altText: {
        value: "",
        defaultValue: ""
      },
      border: {
        value: 0,
        defaultValue: 0
      },
      color: {
        value: "black",
        defaultValue: "black"
      },
      corners: {
        value: 0,
        defaultValue: 0
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
    fieldChanged,
    closeAddImageModalClicked,
    addImageClicked,
  }
};
