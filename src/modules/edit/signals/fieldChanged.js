import {props, state} from 'cerebral/tags';
import {setField} from '@cerebral/forms/operators';

export default [
  setField(state`${props`path`}`, props`value`)
];
