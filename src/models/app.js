import {
  Record,
  List
} from 'immutable';

const Result = Record({
  price: ''
});

class Calculation extends Result {
  addTax(state, payload) {
    const newState = state.update('price',
      () => {
        return payload.price;
      });

    return newState;
  }
}

export default Calculation;
