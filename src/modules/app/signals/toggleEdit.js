import {state} from 'cerebral/tags';
import {toggle} from 'cerebral/operators';

export default [
  toggle(state`app.edit`)
];
