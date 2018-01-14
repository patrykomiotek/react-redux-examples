const ADD = 'counter/ADD';
const SUB = 'counter/SUB';
const RESET = 'counter/RESET';
const ADD_VALUE = 'counter/ADD_VALUE';

export function fetchFromServer() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(addValue(data)))
    }
}

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function reset() {
  return {
    type: RESET
  }
}

export function addValue(value) {
  return {
    type: ADD_VALUE,
    value
  }
}

const INITIAL_STATE = {
  counterValue: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { counterValue: state.counterValue + 1 };
    case SUB:
      return { counterValue: state.counterValue - 1 };
    case RESET:
      return { counterValue: 0 };
    case ADD_VALUE:
      return { counterValue: state.counterValue + action.value };
    default:
      return state;
  }
}