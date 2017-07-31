import {set as save} from '@cerebral/firebase/operators';
import {set} from 'cerebral/operators';
import {string, state} from 'cerebral/tags';

export default [
  set(state`edit.backup`, state`edit.content`),
  save(string`pages.${state`edit.page`}`, state`edit.content`)
]
