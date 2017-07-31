import {state, props} from 'cerebral/tags';
import {set} from 'cerebral/operators';

export default [
  set(state`edit.content`, props`text`)
];
