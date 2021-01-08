import React from 'react';
import { connect } from 'react-redux';

import { addValue } from './logic';

const mapDispatchToProps = dispatch => {
  return {
    addValue: (newValue) => dispatch(addValue(newValue))
  }
};

// it's the same
// const mapDispatchToProps = dispatch => {
//   addValue
// };

function CounterSuperButton(props) {

  const handleClick = () => props.addValue(100);

  return(
    <button onClick={handleClick}>Add 100!</button>
  );
}

export default connect(null, mapDispatchToProps)(CounterSuperButton);
