import {state, props} from 'cerebral/tags';
import {set} from 'cerebral/operators';
import {resetForm} from '@cerebral/forms/operators'

export default [
  resetForm(state`edit.addImageForm`),
  set(state`edit.chosenImage`, null),
  set(state`edit.showAddImageModal`, false),
];
