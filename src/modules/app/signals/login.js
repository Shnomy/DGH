import {signInWithGoogle} from '@cerebral/firebase/operators';
import {set} from 'cerebral/operators';
import {state, props} from 'cerebral/tags';

export default [
  signInWithGoogle({redirect: false}),
  set(state`app.user`, props`user`)
];
