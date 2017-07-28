import {state} from 'cerebral/tags';
import {set} from '@cerebral/firebase/operators';
import {toggle} from 'cerebral/operators';

export default [
    set("pages", state`pages`),
    toggle(state`app.edit`),
];
