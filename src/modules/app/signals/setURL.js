import {state, props} from 'cerebral/tags';
import {set} from 'cerebral/operators';

export default [
  set(state`urls.${props`key`}`, props`value`)
];
