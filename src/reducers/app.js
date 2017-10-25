import * as actions from './../actions/app.js';

import {
  handleActions
} from 'redux-actions';

import Calculation from './../models/app'

const reducer = handleActions({
  [actions.addTax](state, action) {
    return state.addTax(state, action.payload);
  }
}, new Calculation());

export default reducer;
