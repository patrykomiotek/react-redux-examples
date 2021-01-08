import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { add, sub, reset, addValue, fetchFromServer } from './logic';
import CounterAwesomeButton from './CounterAwesomeButton';

const mapStateToProps = (state) => ({
  value: state.counter.counterValue
});

const mapDispatchToProps = {
  add,
  sub,
  reset,
  addValue,
  fetchFromServer
};

function CounterContainer(props) {

  useEffect(() => {
    props.fetchFromServer();
  }, []);

  const handleInc = () => props.add();
  const handleDec = () => props.sub();
  const handleReset = () => props.reset();
  const minusHundred = () => props.addValue(-100);

  return (
    <div>
      <div>Counter: {props.value}</div>
      <div>
        <button onClick={handleInc}>Add</button>
        <button onClick={handleDec}>Sub</button>
        <button onClick={handleReset}>Reset</button>
        <CounterAwesomeButton handleSub={minusHundred} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
