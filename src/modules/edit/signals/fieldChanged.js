import {props} from 'cerebral/tags';
import {setField} from '@cerebral/forms/operators';

export default [
  setField(props`path`, props`value`)
];
