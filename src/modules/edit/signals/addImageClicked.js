import {state, props} from 'cerebral/tags';
import {set} from 'cerebral/operators';
import closeAddImageModalClicked from './closeAddImageModalClicked';
import addImageToContent from '../actions/addImageToContent';

export default [
  addImageToContent,
  closeAddImageModalClicked,
];
