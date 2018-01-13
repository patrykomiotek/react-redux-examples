import React, { Component } from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter';
import CounterSuperButton from './Counter/CounterSuperButton';
import counterReducer from './Counter/logic';
import './App.css';

const reducers = combineReducers({
  counter: counterReducer
});

const store = createStore(reducers, undefined, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <CounterSuperButton />
        </div>
      </Provider>
    );
  }
}

export default App;
