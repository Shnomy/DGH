import {set} from 'cerebral/operators';
import {state} from 'cerebral/tags';

export default [
    set(state`edit.content`, state`edit.backup`),
]
