import {props, signal, string, state} from 'cerebral/tags';
import {when} from 'cerebral/operators';
import uploadImage from '../actions/uploadImage';
import pushImage from '../actions/pushImage';

export default [
  when(props`file`), {
    true: [
      uploadImage,
      pushImage,
    ],
    false: []
  }
];
