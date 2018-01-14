const ADD = 'counter/ADD';
const SUB = 'counter/SUB';
const RESET = 'counter/RESET';
const ADD_VALUE = 'counter/ADD_VALUE';

export const fetchFromServer = () => {
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(addValue(data)))
    }
}

export const add = () => ({
  type: ADD
})

export const sub = () => ({
  type: SUB
});

export const reset = () => ({
  type: RESET
});

export const addValue = (value) => ({
  type: ADD_VALUE,
  value
});

const INITIAL_STATE = {
  counterValue: 0
};

export default (state = INITIAL_STATE, action) => {
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