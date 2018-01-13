import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add, sub, reset, addValue } from './logic';
import CounterAwesomeButton from './CounterAwesomeButton';

const mapStateToProps = state => {
  return {
    value: state.counter.counterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
    reset: () => dispatch(reset()),
    addValue: (newValue) => dispatch(addValue(newValue))
  }
}

class CounterContainer extends Component {

  handleInc = () => {
    this.props.add();
  }

  handleDec = () => {
    this.props.sub();
  }

  handleReset = () => {
    this.props.reset();
  }

  minusHundred = () => {
    this.props.addValue(-100);
  }

  render() {
    return (
      <div>
        <div>Counter: {this.props.value}</div>
        <div>
          <button onClick={this.handleInc}>Add</button>
          <button onClick={this.handleDec}>Sub</button>
          <button onClick={this.handleReset}>Reset</button>
          <CounterAwesomeButton handleSub={this.minusHundred} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
