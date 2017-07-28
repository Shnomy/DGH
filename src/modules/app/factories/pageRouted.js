import {set, when} from 'cerebral/operators';
import {state, props} from 'cerebral/tags';
import getPages from '../actions/getPages';
import setPages from '../actions/setPages';
import {getUser} from '@cerebral/firebase/operators';

export default function pageRouted(page) {
  return [
    set(state`app.currentPage`, page),
    when(state`pages`), {
      true: [],
      false: [
        getPages,
        setPages
      ]
    },
    getUser(), {
      success: [
        set(state`app.user`, props`user`)
      ],
      error: []
    }
  ];
};
