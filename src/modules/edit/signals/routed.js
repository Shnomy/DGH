import {state, props, string} from 'cerebral/tags';
import {set} from 'cerebral/operators';
import {value} from '@cerebral/firebase/operators';
import listenForImages from '../actions/listenForImages';

export default [
  set(state`app.edit`, true),
  set(state`edit.page`, props`page`),
  value(string`pages.${props`page`}`),
  set(state`edit.content`, props`value`),
  set(state`edit.backup`, props`value`),
  listenForImages,
];
