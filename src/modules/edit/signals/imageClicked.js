import {state, props} from 'cerebral/tags';
import {set} from 'cerebral/operators';

export default [
  set(state`edit.showAddImageModal`, true),
  set(state`edit.chosenImage`, state`edit.images.${props`imageID`}.url`),
];
