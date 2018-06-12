const { createStore } = require("redux");

const initialState = {
  counter: 1
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.qty
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

const store = createStore(myReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const increment = (qty = 1) => {
  return {
    type: "INCREMENT",
    qty
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

store.dispatch(decrement());

store.dispatch(increment(2));

store.dispatch(increment(5));
