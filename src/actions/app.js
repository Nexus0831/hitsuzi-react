import {
  createAction
} from 'redux-actions';

import * as actionsName from './actionNames/app';

export const addTax = createAction(
  actionsName.ADD_TAX,
  async (price) => {
    const payload = {};

    try {
      const result = Math.round(price * 1.08);
      payload.price = result + "円";
      return payload;
    } catch (e) {
      return payload;
    }
  }
);
